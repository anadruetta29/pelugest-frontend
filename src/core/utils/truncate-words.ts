export default function truncateText(
  text: string,
  maxLength: number
): { text: string; truncated: boolean } {
  if (text.length <= maxLength) {
    return { text, truncated: false };
  }

  return {
    text: text.slice(0, maxLength).trimEnd() + "…",
    truncated: true,
  };
}

