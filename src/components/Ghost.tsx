interface GhostProps {
  /** `lower` sits like a lowercase letter; `cap` matches capital height. */
  size?: "lower" | "cap";
  /** Fill colour token; defaults to Periwinkle per the style reference. */
  tone?: "periwinkle" | "lavender" | "paper";
  className?: string;
}

/**
 * The brand mascot, rendered flat and inline so it can replace a vowel in a headline.
 */
export function Ghost({ size = "lower", tone = "periwinkle", className }: GhostProps) {
  const cls = ["ghost", `ghost--${size}`, `ghost--${tone}`, className].filter(Boolean).join(" ");
  return (
    <svg className={cls} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        className="ghost__body"
        d="M16 2.5C9.1 2.5 3.5 8.1 3.5 15v12.6c0 1.2 1.4 1.9 2.4 1.1l2.6-2.1a1.8 1.8 0 0 1 2.2 0l2.7 2.2a1.8 1.8 0 0 0 2.2 0l2.7-2.2a1.8 1.8 0 0 1 2.2 0l2.6 2.1c1 .8 2.4.1 2.4-1.1V15C28.5 8.1 22.9 2.5 16 2.5Z"
      />
      <rect className="ghost__eye" x="10.5" y="11.5" width="3.4" height="6" rx="1.7" />
      <rect className="ghost__eye" x="18.1" y="11.5" width="3.4" height="6" rx="1.7" />
    </svg>
  );
}

/**
 * Renders `word` with the character at `index` swapped for the ghost mascot.
 */
export function GhostWord({
  word,
  index,
  size = "lower",
  tone,
}: {
  word: string;
  index: number;
  size?: "lower" | "cap";
  tone?: GhostProps["tone"];
}) {
  const before = word.slice(0, index);
  const replaced = word.charAt(index);
  const after = word.slice(index + 1);
  return (
    <span className="ghost-word" aria-label={word}>
      <span aria-hidden="true">{before}</span>
      <Ghost size={size} tone={tone} />
      <span className="sr-only">{replaced}</span>
      <span aria-hidden="true">{after}</span>
    </span>
  );
}
