// techIcons.tsx
import React from "react";

type SVGProps = React.SVGProps<SVGSVGElement>;

export const NextJsIcon: React.FC<SVGProps> = (props) => (
  <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m4.5 4.5.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207 6.5 9 .81-.586-6.5-9zM10 4v6h1V4z"
      fill="currentColor"
    />
  </svg>
);

export const TailwindIcon: React.FC<SVGProps> = (props) => (
  <svg viewBox="0 -51 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...props}>
    <defs>
      <linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="tw-grad-a">
        <stop stopColor="#2298BD" offset="0%" />
        <stop stopColor="#0ED7B5" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M128 0Q76.8 0 64 51.2 83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2 19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
      fill="url(#tw-grad-a)"
    />
  </svg>
);

export const PostgresIcon: React.FC<SVGProps> = (props) => (
  <svg viewBox="-4 0 264 264" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...props}>
    {/* trimmed for brevity — include the full path(s) you want */}
    <path d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 ..." fill="#336791" />
  </svg>
);

export const NeonDBIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" {...props}>
    <path
      fill="#12FFF7"
      fillRule="evenodd"
      d="M0 4.828C0 2.16 2.172 0 4.851 0h18.436c2.679 0 4.85 2.161 4.85 4.828V20.43c0 2.758-3.507 3.955-5.208 1.778l-5.318-6.809v8.256c0 2.4-1.955 4.345-4.367 4.345H4.851C2.172 28 0 25.839 0 23.172z"
      clipRule="evenodd"
    />
  </svg>
);

export const DrizzleIcon: React.FC<SVGProps> = (props) => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="5.254" height="22.283" rx="2.627" transform="matrix(.87303 .48767 -.49721 .86763 16.08 30.33)" />
    <rect width="5.254" height="22.283" rx="2.627" transform="matrix(.87303 .48767 -.49721 .86763 34.33 19)" />
    <rect width="5.254" height="22.283" rx="2.627" transform="matrix(.87303 .48767 -.49721 .86763 62.413 19)" />
    <rect width="5.254" height="22.283" rx="2.627" transform="matrix(.87303 .48767 -.49721 .86763 44.156 30.33)" />
  </svg>
);

export const DataGripIcon: React.FC<SVGProps> = (props) => (
  <svg viewBox="0 -21 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...props}>
    {/* shortened — paste full DataGrip paths if desired */}
    <path d="M145.918 103.058 33.628 5.407a19.71 19.71 0 1 0-22.971 31.642l126.302 78.409..." />
  </svg>
);

export const CursorIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="m11.925 24 10.425-6-10.425-6L1.5 18z" />
    <path d="M22.35 18V6L11.925 0v12z" />
    <path d="M11.925 0 1.5 6v12l10.425-6z" />
  </svg>
);

// optional grouped export
const Icons = {
  NextJsIcon,
  TailwindIcon,
  PostgresIcon,
  NeonDBIcon,
  DrizzleIcon,
  DataGripIcon,
  CursorIcon,
};
export default Icons;
