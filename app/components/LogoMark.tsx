import { useId } from "react";

export default function LogoMark({
  className = "",
}: {
  className?: string;
}) {
  const gradientId = useId();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      className={className}
      role="img"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="6" y1="6" x2="34" y2="34">
          <stop offset="0" stopColor="#0f172a" />
          <stop offset="0.55" stopColor="#334155" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>

      <circle cx="20" cy="20" r="18" fill="white" />
      <circle cx="20" cy="20" r="18" fill={`url(#${gradientId})`} opacity="0.08" />
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.2"
      />

      <g stroke={`url(#${gradientId})`} strokeLinecap="round" opacity="0.95">
        <path d="M11.5 14.5H28.5" strokeWidth="1.2" />
        <path d="M11.5 18H28.5" strokeWidth="1.2" />
        <path d="M11.5 21.5H28.5" strokeWidth="1.2" />
        <path d="M11.5 25H28.5" strokeWidth="1.2" />
      </g>

      <g filter="url(#soft)">
        <path
          d="M22.4 12.6v13.9c0 1.9-1.5 3.4-3.4 3.4-1.6 0-2.9-1.2-2.9-2.8 0-1.8 1.6-3.2 3.6-3.2.6 0 1.2.1 1.7.4V12.6c0-.4.3-.8.8-.8h.2c.5 0 .8.4.8.8Z"
          fill="#0f172a"
          opacity="0.9"
        />
      </g>

      <circle cx="18.9" cy="27.1" r="2.2" fill="#0f172a" />
    </svg>
  );
}
