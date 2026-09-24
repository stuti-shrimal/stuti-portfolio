const palettes: Record<string, [string, string]> = {
  ai: ["#e4d2b0", "#9eb0c8"],
  workforce: ["#c9b79a", "#e4d2b0"],
  cloud: ["#9eb0c8", "#e4d2b0"],
  product: ["#d7c4a4", "#8ea0b8"],
  airbnb: ["#e4d2b0", "#c4b49a"],
  insurance: ["#9eb0c8", "#d7c4a4"],
  fraud: ["#c9b79a", "#8ea0b8"],
  hr: ["#e4d2b0", "#9eb0c8"],
  traffic: ["#b7c3d4", "#e4d2b0"],
  portfolio: ["#d7c4a4", "#b7c3d4"],
};

export function ProjectArt({ hint, title }: { hint: string; title: string }) {
  const [a, b] = palettes[hint] ?? palettes.ai;
  const id = hint.replace(/[^a-z0-9]/gi, "");
  return (
    <div className="relative isolate overflow-hidden border-b border-line bg-bg-elev">
      <svg viewBox="0 0 800 420" className="h-full w-full" role="img" aria-label={`${title} visual`}>
        <defs>
          <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={a} stopOpacity="0.85" />
            <stop offset="100%" stopColor={b} stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <rect width="800" height="420" fill="#101012" />
        <circle cx="140" cy="80" r="180" fill={`url(#${id}-g)`} opacity="0.35" />
        <circle cx="680" cy="340" r="160" fill={b} opacity="0.16" />
        {Array.from({ length: 7 }).map((_, i) => (
          <rect key={i} x={56} y={70 + i * 42} width={180 + (i % 3) * 70} height="8" rx="4" fill={a} opacity={0.18 + (i % 4) * 0.08} />
        ))}
        <text x="56" y="360" fill={a} fontSize="13" fontFamily="ui-monospace, monospace" letterSpacing="3">
          {title.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
