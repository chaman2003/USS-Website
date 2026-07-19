import { visit } from 'unist-util-visit';
import type { Root, Text, PhrasingContent } from 'mdast';
import { buildInternalLinkTerms } from '../seo/internal-links';

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function remarkInternalLinks() {
  const terms = buildInternalLinkTerms();
  const linked = new Set<string>();

  return (tree: Root) => {
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || index === undefined) return;
      const parentType = (parent as { type: string }).type;
      if (parentType === 'link' || parentType === 'heading' || parentType === 'inlineCode') return;

      for (const term of terms) {
        if (linked.has(term.url)) continue;
        const regex = new RegExp(`\\b${escapeRegex(term.term)}\\b`, 'i');
        const match = regex.exec(node.value);
        if (!match) continue;

        const before = node.value.slice(0, match.index);
        const after = node.value.slice(match.index + match[0].length);
        linked.add(term.url);

        const replacement: PhrasingContent[] = [];
        if (before) replacement.push({ type: 'text', value: before });
        replacement.push({
          type: 'link',
          url: term.url,
          children: [{ type: 'text', value: match[0] }],
        });
        if (after) replacement.push({ type: 'text', value: after });

        (parent.children as PhrasingContent[]).splice(index, 1, ...replacement);
        return;
      }
    });
  };
}
