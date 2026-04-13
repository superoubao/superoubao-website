/**
 * Decorative SVG illustrations — no stock photography.
 * `clinical`: wide journey / pathway motif for the first trust band.
 * `authority`: taller “care & growth” motif — supportive arcs, sprout, warm focus (no compass/crosshair).
 */
type Props = {
  variant: "clinical" | "authority";
  alt: string;
};

export default function TrustGraphic({ variant, alt }: Props) {
  if (variant === "authority") {
    return (
      <svg
        className="trust-graphic trust-graphic--authority"
        viewBox="0 0 440 520"
        role="img"
        aria-label={alt}
      >
        <defs>
          <linearGradient id="auth-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent, #2d9d78)" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#f4f9f7" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-accent, #2d9d78)" stopOpacity="0.16" />
          </linearGradient>
          <radialGradient id="auth-glow" cx="50%" cy="42%" r="48%">
            <stop offset="0%" stopColor="var(--color-accent, #2d9d78)" stopOpacity="0.28" />
            <stop offset="70%" stopColor="var(--color-accent, #2d9d78)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="auth-embrace" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="var(--color-primary, #0a2540)" stopOpacity="0.28" />
            <stop offset="50%" stopColor="var(--color-accent, #2d9d78)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--color-primary, #0a2540)" stopOpacity="0.28" />
          </linearGradient>
          <linearGradient id="auth-leaf" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent, #2d9d78)" stopOpacity="0.75" />
            <stop offset="100%" stopColor="var(--color-primary, #0a2540)" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="440" height="520" rx="20" fill="url(#auth-bg)" />
        <ellipse cx="220" cy="215" rx="140" ry="120" fill="url(#auth-glow)" />
        {/* Supportive framing arcs — read as “holding space,” not a target */}
        <path
          d="M 32 420 Q 32 180 200 128"
          fill="none"
          stroke="url(#auth-embrace)"
          strokeWidth="2.75"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M 408 420 Q 408 180 240 128"
          fill="none"
          stroke="url(#auth-embrace)"
          strokeWidth="2.75"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M 56 440 Q 120 320 220 300 Q 320 320 384 440"
          fill="none"
          stroke="var(--color-accent, #2d9d78)"
          strokeWidth="1.5"
          strokeOpacity="0.28"
          strokeLinecap="round"
        />
        {/* Soft focal orb — “you at the center” */}
        <circle cx="220" cy="218" r="44" fill="rgba(255,255,255,0.55)" stroke="var(--color-accent, #2d9d78)" strokeOpacity="0.35" strokeWidth="1.5" />
        <circle cx="220" cy="218" r="22" fill="var(--color-accent, #2d9d78)" fillOpacity="0.2" />
        {/* Minimal sprout — growth / new beginnings */}
        <path
          d="M 220 360 L 220 268"
          stroke="url(#auth-leaf)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 220 300 Q 168 268 148 228 Q 175 248 212 288"
          fill="none"
          stroke="url(#auth-leaf)"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 220 295 Q 272 263 292 223 Q 265 243 228 283"
          fill="none"
          stroke="url(#auth-leaf)"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse cx="220" cy="248" rx="10" ry="14" fill="var(--color-accent, #2d9d78)" fillOpacity="0.35" transform="rotate(-8 220 248)" />
      </svg>
    );
  }

  return (
    <svg
      className="trust-graphic trust-graphic--clinical"
      viewBox="0 0 720 400"
      role="img"
      aria-label={alt}
    >
      <defs>
        <linearGradient id="cg-base" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#e8f2ef" stopOpacity="0.95" />
          <stop offset="38%" stopColor="#f4f8fb" stopOpacity="1" />
          <stop offset="100%" stopColor="#dfeef0" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="cg-path" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-accent, #2d9d78)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-primary, #0a2540)" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="cg-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="var(--color-accent, #2d9d78)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="720" height="400" rx="18" fill="url(#cg-base)" />
      <rect width="720" height="400" rx="18" fill="url(#cg-glow)" />
      <path
        d="M56 228 C 160 228, 200 120, 360 132 C 480 140, 520 268, 664 248"
        fill="none"
        stroke="url(#cg-path)"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M72 244 C 180 260, 240 160, 360 168 C 460 174, 540 220, 648 200"
        fill="none"
        stroke="var(--color-accent, #2d9d78)"
        strokeOpacity="0.25"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g>
        <circle cx="120" cy="228" r="14" fill="#fff" stroke="var(--color-accent, #2d9d78)" strokeWidth="2.5" opacity="0.95" />
        <circle cx="360" cy="132" r="18" fill="#fff" stroke="var(--color-primary, #0a2540)" strokeOpacity="0.25" strokeWidth="2" opacity="0.98" />
        <circle cx="600" cy="236" r="14" fill="#fff" stroke="var(--color-accent, #2d9d78)" strokeWidth="2.5" opacity="0.95" />
      </g>
      <rect x="48" y="52" width="120" height="4" rx="2" fill="var(--color-primary, #0a2540)" fillOpacity="0.08" />
      <rect x="48" y="64" width="88" height="4" rx="2" fill="var(--color-accent, #2d9d78)" fillOpacity="0.15" />
      <rect x="552" y="300" width="120" height="4" rx="2" fill="var(--color-primary, #0a2540)" fillOpacity="0.07" />
      <circle cx="360" cy="320" r="56" fill="none" stroke="var(--color-primary, #0a2540)" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="4 8" />
    </svg>
  );
}
