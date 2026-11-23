import { useId } from "react";

type SantaHatProps = {
  variant: "hero" | "portrait";
};

export function SantaHat({ variant }: SantaHatProps) {
  const uid = useId().replace(/:/g, "");
  const body = `${uid}-hat`;
  const brim = `${uid}-brim`;
  const pom = `${uid}-pom`;
  const shade = `${uid}-shade`;

  return (
    <svg
      className={`xmas-hat xmas-hat--${variant}`}
      viewBox="0 0 120 132"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={body} x1="18" y1="24" x2="96" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--xmas-hat-lit)" />
          <stop offset="0.42" stopColor="var(--xmas-hat)" />
          <stop offset="1" stopColor="var(--xmas-hat-deep)" />
        </linearGradient>
        <linearGradient id={brim} x1="20" y1="92" x2="100" y2="118" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--xmas-fur)" />
          <stop
            offset="1"
            stopColor="color-mix(in srgb, var(--xmas-fur) 72%, var(--color-stone))"
          />
        </linearGradient>
        <radialGradient id={pom} cx="0.32" cy="0.28" r="0.75">
          <stop offset="0" stopColor="var(--xmas-fur)" />
          <stop
            offset="1"
            stopColor="color-mix(in srgb, var(--xmas-fur) 70%, var(--color-stone))"
          />
        </radialGradient>
        <filter id={shade} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.6" floodColor="#04060a" floodOpacity="0.45" />
        </filter>
      </defs>

      <g filter={`url(#${shade})`}>
        <path
          d="M28 96c4-28 18-58 38-78 6-6 16-8 24-3 6 4 8 12 4 18-8 14-16 28-18 46 12 2 32 8 36 16-18 6-48 10-84 1z"
          fill={`url(#${body})`}
        />
        <path
          d="M62 28c8 14 14 32 16 52"
          fill="none"
          stroke="var(--xmas-hat-deep)"
          strokeOpacity="0.28"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <ellipse cx="92" cy="22" rx="11.5" ry="11" fill={`url(#${pom})`} />
        <ellipse cx="88" cy="18" rx="3.4" ry="2.4" fill="var(--xmas-fur)" opacity="0.7" />
        <ellipse cx="58" cy="104" rx="46" ry="16" fill={`url(#${brim})`} />
        <ellipse cx="38" cy="100" rx="8" ry="7" fill="var(--xmas-fur)" />
        <ellipse cx="58" cy="97" rx="8.5" ry="7.2" fill="var(--xmas-fur)" />
        <ellipse cx="78" cy="100" rx="8" ry="7" fill="var(--xmas-fur)" />
        <ellipse cx="96" cy="104" rx="7" ry="6.2" fill="var(--xmas-fur)" />
        <ellipse cx="22" cy="106" rx="7" ry="6" fill="var(--xmas-fur)" />
        <ellipse cx="58" cy="108" rx="38" ry="7" fill="var(--xmas-hat-deep)" opacity="0.22" />
      </g>
    </svg>
  );
}
