import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function IconAnalyze({ size = 28, ...p }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 15l3-3 3 3 4-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMatch({ size = 28, ...p }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="9" cy="9" r="3" />
      <circle cx="15" cy="15" r="3" />
      <path d="M11.5 11.5l5 5" strokeLinecap="round" />
    </svg>
  );
}

export function IconGuide({ size = 28, ...p }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M12 3v4M12 17v4M4 12h4M16 12h4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconNetwork({ size = 24, ...p }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="7" r="2" />
      <circle cx="19" cy="12" r="2" />
      <path d="M7 11l4-2 4 2M9 13l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconData({ size = 24, ...p }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M4 6h16M4 12h10M4 18h14" strokeLinecap="round" />
    </svg>
  );
}

export function IconInsight({ size = 24, ...p }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M12 3v2M12 19v2M4 12h2M18 12h2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
