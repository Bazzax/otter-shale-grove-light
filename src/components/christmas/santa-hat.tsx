import { useId } from "react";

type SantaHatProps = {
  variant: "hero" | "portrait";
};

export function SantaHat({ variant }: SantaHatProps) {
  const uid = useId().replace(/:/g, "");
  const body = `${uid}-hat`;
  const fold = `${uid}-fold`;
  const cuff = `${uid}-cuff`;
  const cuffShade = `${uid}-cuff-shade`;
  const pom = `${uid}-pom`;
  const drop = `${uid}-drop`;

  return (
    <svg
      className={`xmas-hat xmas-hat--${variant}`}
      viewBox="0 0 180 190"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={body} x1="40" y1="8" x2="150" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--xmas-hat-lit)" />
          <stop offset="0.34" stopColor="var(--xmas-hat)" />
          <stop offset="0.72" stopColor="var(--xmas-hat-deep)" />
          <stop offset="1" stopColor="#4e1010" />
        </linearGradient>
        <linearGradient id={fold} x1="70" y1="20" x2="120" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3f0c0c" stopOpacity="0" />
          <stop offset="0.45" stopColor="#3f0c0c" stopOpacity="0.22" />
          <stop offset="1" stopColor="#3f0c0c" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id={cuff} x1="30" y1="128" x2="150" y2="172" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.4" stopColor="var(--xmas-fur)" />
          <stop
            offset="1"
            stopColor="color-mix(in srgb, var(--xmas-fur) 74%, var(--color-stone))"
          />
        </linearGradient>
        <linearGradient
          id={cuffShade}
          x1="70"
          y1="138"
          x2="110"
          y2="168"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#04060a" stopOpacity="0" />
          <stop offset="1" stopColor="#04060a" stopOpacity="0.28" />
        </linearGradient>
        <radialGradient id={pom} cx="0.32" cy="0.28" r="0.78">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.42" stopColor="var(--xmas-fur)" />
          <stop
            offset="1"
            stopColor="color-mix(in srgb, var(--xmas-fur) 55%, var(--color-stone))"
          />
        </radialGradient>
        <filter id={drop} x="-30%" y="-25%" width="160%" height="160%">
          <feDropShadow dx="1" dy="3" stdDeviation="2.2" floodColor="#04060a" floodOpacity="0.55" />
        </filter>
      </defs>

      <ellipse cx="90" cy="174" rx="48" ry="8" fill="#04060a" opacity="0.38" />

      <g filter={`url(#${drop})`}>
        <ellipse
          cx="90"
          cy="150"
          rx="52"
          ry="16"
          fill="color-mix(in srgb, var(--xmas-fur) 68%, var(--color-stone))"
        />

        <path
          d="M54 148
             C46 110 54 62 82 30
             C96 12 124 8 142 24
             C158 38 164 58 152 74
             C138 92 126 112 118 142
             C138 148 150 156 140 162
             C120 172 72 170 54 148 Z"
          fill={`url(#${body})`}
        />
        <path
          d="M60 146
             C52 108 62 66 84 40
             C78 78 80 116 88 146 Z"
          fill={`url(#${fold})`}
        />
        <path
          d="M104 28 C122 52 132 90 126 140"
          fill="none"
          stroke="#4e1010"
          strokeOpacity="0.38"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M110 22 C130 18 148 32 152 48"
          fill="none"
          stroke="var(--xmas-hat-lit)"
          strokeOpacity="0.55"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M86 36 C102 34 118 48 122 70"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.18"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <ellipse cx="148" cy="26" rx="18" ry="17" fill={`url(#${pom})`} />
        <ellipse cx="141" cy="20" rx="5.5" ry="4" fill="#ffffff" opacity="0.78" />
        <circle cx="138" cy="24" r="2.4" fill="var(--xmas-fur)" />
        <circle cx="156" cy="20" r="2.1" fill="var(--xmas-fur)" opacity="0.85" />
        <circle cx="157" cy="32" r="2.3" fill="var(--xmas-fur)" opacity="0.7" />
        <circle cx="144" cy="36" r="1.9" fill="var(--xmas-fur)" opacity="0.65" />
        <circle cx="152" cy="14" r="1.8" fill="var(--xmas-fur)" opacity="0.8" />

        <path
          d="M36 152
             C48 130 90 122 140 138
             C156 144 160 160 144 170
             C122 182 58 184 40 168
             C28 158 28 160 36 152 Z"
          fill={`url(#${cuff})`}
        />
        <path
          d="M50 150
             C64 138 100 136 128 146
             C136 150 136 158 124 162
             C100 170 68 170 54 160
             C46 154 46 152 50 150 Z"
          fill={`url(#${cuffShade})`}
        />

        <ellipse cx="48" cy="154" rx="11" ry="10" fill="var(--xmas-fur)" />
        <ellipse cx="64" cy="144" rx="12" ry="10.5" fill="#ffffff" />
        <ellipse cx="82" cy="140" rx="12.5" ry="11" fill="var(--xmas-fur)" />
        <ellipse cx="102" cy="141" rx="12" ry="10.5" fill="#ffffff" />
        <ellipse cx="120" cy="146" rx="11.5" ry="10" fill="var(--xmas-fur)" />
        <ellipse cx="136" cy="156" rx="10.5" ry="9.5" fill="#ffffff" />
        <ellipse cx="56" cy="166" rx="9" ry="7.5" fill="var(--xmas-fur)" />
        <ellipse cx="78" cy="170" rx="10" ry="8" fill="#ffffff" />
        <ellipse cx="100" cy="170" rx="9.5" ry="7.8" fill="var(--xmas-fur)" />
        <ellipse cx="122" cy="166" rx="9" ry="7.4" fill="#ffffff" />
        <ellipse cx="70" cy="148" rx="4" ry="2.6" fill="#ffffff" opacity="0.55" />
        <ellipse cx="98" cy="146" rx="4.4" ry="2.8" fill="#ffffff" opacity="0.45" />
        <ellipse cx="124" cy="152" rx="3.6" ry="2.2" fill="#ffffff" opacity="0.4" />
      </g>
    </svg>
  );
}
