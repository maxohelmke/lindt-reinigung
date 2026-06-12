export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <line x1="20" y1="4" x2="20" y2="36" />
        <line x1="4" y1="20" x2="36" y2="20" />
        <line x1="8.5" y1="8.5" x2="31.5" y2="31.5" />
        <line x1="31.5" y1="8.5" x2="8.5" y2="31.5" />
      </g>
    </svg>
  );
}

export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 14 C 30 2, 60 26, 90 14 S 150 2, 180 14 S 215 22, 218 12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
