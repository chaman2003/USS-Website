import type { AstroIntegration } from 'astro';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function pagefindIntegration(): AstroIntegration {
  return {
    name: 'pagefind',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const sitePath = fileURLToPath(dir);
        const outputPath = path.join(sitePath, 'pagefind');

        const result = spawnSync(
          'npx',
          ['pagefind', '--site', sitePath, '--output-path', outputPath],
          { stdio: 'inherit', shell: true },
        );

        if (result.status !== 0) {
          throw new Error('Pagefind index build failed');
        }
      },
    },
  };
}
