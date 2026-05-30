import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export const IconTooth = ({ size = 60, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" {...props}>
    <path d="M30 8c-6 0-12 4-14 12-2 8-3 18-1 26 1 4 3 6 6 6 2 0 3-2 4-5l1-5c1-3 2-5 4-5s3 2 4 5l1 5c1 3 2 5 4 5 3 0 5-2 6-6 2-8 1-18-1-26-2-8-8-12-14-12z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
  </svg>
);

export const IconRootCanal = ({ size = 60, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" {...props}>
    <path d="M30 8c-5 0-10 4-12 10-2 6-2 14 0 20 1 3 3 6 5 8l1 6c0 2 2 4 6 4s6-2 6-4l1-6c2-2 4-5 5-8 2-6 2-14 0-20-2-6-7-10-12-10z" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M24 20l12 12M36 20l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="30" cy="26" r="3" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const IconBraces = ({ size = 60, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" {...props}>
    <path d="M20 12c-2 0-4 2-4 6v8c0 4 2 6 4 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M40 12c2 0 4 2 4 6v8c0 4-2 6-4 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 18h5M39 18h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 22h3M41 22h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 16l16-2M22 20l16-2M22 24l16-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M30 28v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="30" cy="42" r="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const IconLaser = ({ size = 60, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" {...props}>
    <path d="M30 8c-5 0-10 4-12 10-2 6-2 14 0 20 1 3 3 6 5 8l1 6c0 2 2 4 6 4s6-2 6-4l1-6c2-2 4-5 5-8 2-6 2-14 0-20-2-6-7-10-12-10z" stroke="currentColor" strokeWidth="2.5"/>
    <line x1="14" y1="20" x2="6" y2="14" stroke="#0891B2" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="28" x2="4" y2="30" stroke="#0891B2" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="36" x2="6" y2="42" stroke="#0891B2" strokeWidth="2" strokeLinecap="round"/>
    <line x1="46" y1="20" x2="54" y2="14" stroke="#0891B2" strokeWidth="2" strokeLinecap="round"/>
    <line x1="46" y1="28" x2="56" y2="30" stroke="#0891B2" strokeWidth="2" strokeLinecap="round"/>
    <line x1="46" y1="36" x2="54" y2="42" stroke="#0891B2" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconCrown = ({ size = 60, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" {...props}>
    <path d="M30 10c-5 0-10 4-12 10s-2 14 0 20c1 3 3 5 5 7v4" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M18 40c0-4 2-8 4-10l3 6 5-8 5 8 3-6c2 2 4 6 4 10" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M22 46h16v4H22z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M28 46v-4M32 46v-4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const IconSurgery = ({ size = 60, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" {...props}>
    <path d="M30 10c-5 0-10 4-12 10-2 6-2 14 0 20 1 3 3 6 5 8l1 4" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M14 36l-4 6c-2 3 0 6 3 6h8c2 0 4-2 5-4l2-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="10" y1="44" x2="20" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="36" y1="16" x2="50" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="38" y1="20" x2="52" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconRehab = ({ size = 60, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" {...props}>
    <path d="M14 44c2-6 6-12 10-14 4-2 8-2 12 0s8 8 10 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 46c2-4 5-8 8-10s6-2 8 0 4 4 6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <path d="M30 20c-4 0-6 4-6 8s2 6 6 6 6-2 6-6-2-8-6-8z" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M20 50h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 50l-2 4M44 50l2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconClock = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconStar = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2l3 7h7l-5.5 5 2 8L12 18l-6.5 4 2-8L2 9h7l3-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const IconHeart = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 21C8 17 4 14 4 10a4 4 0 018 0 4 4 0 018 0c0 4-4 7-8 11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const IconShield = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 3l7 3v5c0 4-3 8-7 9-4-1-7-5-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconCertificate = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2L4 5v6c0 5 3 10 8 11 5-1 8-6 8-11V5l-8-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconPhone = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M17 14.2v2.3a1.5 1.5 0 01-1.6 1.5A14.8 14.8 0 012 4.6 1.5 1.5 0 013.5 3h2.3a1 1 0 011 1c.1 1.2.4 2.4.8 3.5a1 1 0 01-.2 1l-1.4 1.4a11 11 0 005.6 5.6l1.4-1.4a1 1 0 011-.2c1.1.4 2.3.7 3.5.8 1 0 1.5.6 1.5 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const IconWhatsApp = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M10 2a8 8 0 00-7.3 11.7L2 18l4.4-1.3A8 8 0 1010 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M14.7 12.6c-.2.7-.8 1.2-1.5 1.4-.7.2-1.5.1-2.7-.4a7.5 7.5 0 01-2.8-2.8c-.5-1.2-.6-2-.4-2.7.2-.7.7-1.3 1.4-1.5.2-.1.5-.1.7 0 .2 0 .4.3.6.6.3.5.7 1.2.8 1.3.1.1.1.3 0 .5l-.2.5c-.1.1-.2.3-.1.4.2.4.7.9 1.1 1.2.1.1.3.2.4.3l.4-.2c.2 0 .4-.2.5-.3.2-.1.4-.1.5 0 .2 0 .5.3 1 .7.4.4.5.6.5.7 0 .2 0 .5-.2.7z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

export const IconLocation = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M10 2a6 6 0 00-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 00-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const IconCheck = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M3 8l4 4 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconChevronDown = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconMenu = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconClose = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconArrowRight = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconArrowUp = ({ size = 20, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M10 16V4M5 9l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconStarFilled = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 1l2 5h5l-4 3.5L12 15l-4-3-4 3 1-5.5L1 6h5l2-5z"/>
  </svg>
);
