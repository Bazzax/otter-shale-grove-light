import { useId } from "react";

type SantaHatProps = {
  variant: "hero" | "portrait";
};

export function SantaHat({ variant }: SantaHatProps) {
  const uid = useId().replace(/:/g, "");
  const body = `${uid}-hat`;
  const crease = `${uid}-crease`;
  const underside = `${uid}-under`;
  const cuff = `${uid}-cuff`;
  const cuffShade = `${uid}-cuff-shade`;
  const pom = `${uid}-pom`;
  const drop = `${uid}-drop`;

  return (
    <svg
      className={`xmas-hat xmas-hat--${variant}`}
      viewBox="0 0 320 272"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={body} x1="70" y1="20" x2="250" y2="210" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--xmas-hat-lit)" />
          <stop offset="0.28" stopColor="var(--xmas-hat)" />
          <stop offset="0.68" stopColor="var(--xmas-hat-deep)" />
          <stop offset="1" stopColor="#4e1010" />
        </linearGradient>
        <linearGradient
          id={underside}
          x1="210"
          y1="40"
          x2="290"
          y2="210"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="var(--xmas-hat-deep)" />
          <stop offset="0.55" stopColor="#4e1010" />
          <stop offset="1" stopColor="#3a0b0b" />
        </linearGradient>
        <linearGradient
          id={crease}
          x1="150"
          y1="30"
          x2="250"
          y2="160"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3f0c0c" stopOpacity="0" />
          <stop offset="0.4" stopColor="#3f0c0c" stopOpacity="0.28" />
          <stop offset="1" stopColor="#3f0c0c" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id={cuff} x1="40" y1="175" x2="220" y2="230" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="var(--xmas-fur)" />
          <stop
            offset="1"
            stopColor="color-mix(in srgb, var(--xmas-fur) 74%, var(--color-stone))"
          />
        </linearGradient>
        <linearGradient
          id={cuffShade}
          x1="80"
          y1="188"
          x2="180"
          y2="228"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#04060a" stopOpacity="0" />
          <stop offset="1" stopColor="#04060a" stopOpacity="0.26" />
        </linearGradient>
        <radialGradient id={pom} cx="0.32" cy="0.28" r="0.78">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.42" stopColor="var(--xmas-fur)" />
          <stop
            offset="1"
            stopColor="color-mix(in srgb, var(--xmas-fur) 55%, var(--color-stone))"
          />
        </radialGradient>
        <filter id={drop} x="-25%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="1" dy="3" stdDeviation="2.4" floodColor="#04060a" floodOpacity="0.5" />
        </filter>
      </defs>

      <ellipse cx="128" cy="232" rx="78" ry="7" fill="#04060a" opacity="0.4" />

      <g filter={`url(#${drop})`}>
        <ellipse
          cx="128"
          cy="204"
          rx="86"
          ry="16"
          fill="color-mix(in srgb, var(--xmas-fur) 62%, var(--color-stone))"
        />

        <path
          d="M58 200
             C48 150 62 88 108 48
             C138 22 178 16 208 36
             C228 50 236 72 228 96
             C218 128 198 158 178 198
             C158 204 98 208 58 200 Z"
          fill={`url(#${body})`}
        />
        <path
          d="M188 40
             C230 22 276 58 292 108
             C306 150 308 198 296 228
             C288 248 270 258 254 256
             C238 254 234 236 242 218
             C254 176 250 128 226 94
             C210 70 196 50 188 40 Z"
          fill={`url(#${underside})`}
        />
        <path
          d="M176 48
             C218 28 262 58 280 104
             C294 140 296 186 286 220
             C280 240 264 250 252 248
             C240 246 240 226 248 208
             C260 168 254 124 232 94
             C216 72 194 54 176 48 Z"
          fill={`url(#${body})`}
        />
        <path
          d="M170 52 C210 70 246 118 268 176"
          fill="none"
          stroke={`url(#${crease})`}
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M118 58 C148 40 186 42 214 64"
          fill="none"
          stroke="var(--xmas-hat-lit)"
          strokeOpacity="0.5"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M96 92 C118 70 150 62 176 74"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.16"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <ellipse cx="262" cy="250" rx="22" ry="21" fill={`url(#${pom})`} />
        <ellipse cx="254" cy="242" rx="6.5" ry="5" fill="#ffffff" opacity="0.78" />
        <circle cx="250" cy="246" r="2.8" fill="var(--xmas-fur)" />
        <circle cx="272" cy="240" r="2.4" fill="var(--xmas-fur)" opacity="0.85" />
        <circle cx="274" cy="254" r="2.6" fill="var(--xmas-fur)" opacity="0.7" />
        <circle cx="258" cy="260" r="2.2" fill="var(--xmas-fur)" opacity="0.65" />
        <circle cx="266" cy="234" r="2" fill="var(--xmas-fur)" opacity="0.8" />

        <path
          d="M40 208
             C40 192 82 184 128 184
             C174 184 216 192 216 208
             C216 220 174 228 128 228
             C82 228 40 220 40 208 Z"
          fill={`url(#${cuff})`}
        />
        <path
          d="M60 208
             C60 198 90 192 128 192
             C166 192 196 198 196 208
             C196 216 166 220 128 220
             C90 220 60 216 60 208 Z"
          fill={`url(#${cuffShade})`}
        />

        <ellipse cx="56" cy="208" rx="14" ry="10" fill="var(--xmas-fur)" />
        <ellipse cx="84" cy="196" rx="15" ry="10" fill="#ffffff" />
        <ellipse cx="114" cy="194" rx="16" ry="10.5" fill="var(--xmas-fur)" />
        <ellipse cx="144" cy="194" rx="15.5" ry="10.5" fill="#ffffff" />
        <ellipse cx="174" cy="198" rx="14.5" ry="10" fill="var(--xmas-fur)" />
        <ellipse cx="200" cy="208" rx="13" ry="9.5" fill="#ffffff" />
        <ellipse cx="72" cy="220" rx="12" ry="7" fill="var(--xmas-fur)" />
        <ellipse cx="104" cy="224" rx="13" ry="7" fill="#ffffff" />
        <ellipse cx="138" cy="224" rx="13" ry="7" fill="var(--xmas-fur)" />
        <ellipse cx="170" cy="220" rx="12" ry="7" fill="#ffffff" />
        <ellipse cx="96" cy="202" rx="5" ry="2.6" fill="#ffffff" opacity="0.5" />
        <ellipse cx="132" cy="200" rx="5.4" ry="2.8" fill="#ffffff" opacity="0.42" />
        <ellipse cx="168" cy="204" rx="4.6" ry="2.4" fill="#ffffff" opacity="0.38" />
      </g>
    </svg>
  );
}
