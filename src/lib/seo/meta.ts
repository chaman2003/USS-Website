/** Build SEO-friendly meta descriptions in the 120–160 character range. */
export function metaDescription(parts: string[]): string {
  const text = parts.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
  if (text.length >= 120 && text.length <= 160) return text;
  if (text.length > 160) return text.slice(0, 157).replace(/\s+\S*$/, '') + '…';
  // Pad with neutral USS context if too short
  const suffix =
    ' Insights from Unity Software Solution (USS), a Bengaluru software studio building web, mobile, and AI products for India.';
  let padded = text;
  if (padded.length < 120) padded = padded + suffix;
  if (padded.length <= 160) return padded;
  return padded.slice(0, 157).replace(/\s+\S*$/, '') + '…';
}
