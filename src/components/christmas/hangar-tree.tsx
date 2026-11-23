import { useId, type CSSProperties } from "react";

const lightStyle = (delay: string): CSSProperties =>
  ({ "--xmas-twinkle-delay": delay }) as CSSProperties;

export function HangarTree() {
  const uid = useId().replace(/:/g, "");
  const canopy = `${uid}-canopy`;
  const glow = `${uid}-glow`;

  return (
    <svg className="xmas-tree" viewBox="0 0 140 220" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient
          id={canopy}
          x1="30"
          y1="20"
          x2="110"
          y2="190"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="var(--xmas-needle)" />
          <stop offset="0.45" stopColor="var(--xmas-tree-lit)" />
          <stop offset="1" stopColor="var(--xmas-tree-dark)" />
        </linearGradient>
        <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="var(--xmas-light)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--xmas-light)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="70" cy="206" rx="42" ry="8" fill={`url(#${glow})`} />
      <ellipse cx="70" cy="208" rx="28" ry="5" fill="#04060a" opacity="0.45" />

      <rect x="64" y="178" width="12" height="28" rx="1.5" fill="#1a2430" />
      <rect x="66" y="180" width="3" height="24" fill="#2a3544" />

      <polygon points="70,86 28,178 112,178" fill={`url(#${canopy})`} />
      <polygon points="70,86 28,178 62,178" fill="var(--xmas-tree-dark)" opacity="0.45" />
      <polygon points="70,58 38,118 102,118" fill="var(--xmas-tree-lit)" />
      <polygon points="70,58 38,118 66,118" fill="var(--xmas-tree-dark)" opacity="0.35" />
      <polygon points="70,22 48,70 92,70" fill="var(--xmas-needle)" />
      <polygon points="70,22 48,70 68,70" fill="var(--xmas-tree)" opacity="0.5" />

      <polygon
        points="70,8 74,18 86,20 76,28 78,40 70,34 62,40 64,28 54,20 66,18"
        fill="var(--xmas-light)"
      />

      <circle className="xmas-light" cx="70" cy="48" r="3.2" style={lightStyle("0s")} />
      <circle className="xmas-light" cx="58" cy="78" r="2.8" style={lightStyle("0.45s")} />
      <circle className="xmas-light" cx="84" cy="72" r="2.6" style={lightStyle("1.1s")} />
      <circle className="xmas-light" cx="50" cy="112" r="3" style={lightStyle("0.2s")} />
      <circle className="xmas-light" cx="90" cy="108" r="2.7" style={lightStyle("1.7s")} />
      <circle className="xmas-light" cx="62" cy="148" r="3.1" style={lightStyle("0.9s")} />
      <circle className="xmas-light" cx="96" cy="152" r="2.8" style={lightStyle("1.4s")} />

      <circle cx="70" cy="48" r="6" fill="var(--xmas-light)" opacity="0.16" />
      <circle cx="90" cy="108" r="5" fill="var(--xmas-light)" opacity="0.12" />
    </svg>
  );
}
