export function MoonPhaseIcon({
  category,
  className = "w-6 h-6",
}: {
  category: string;
  className?: string;
}) {
  switch (category) {
    case "new-moon":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#173440" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "waxing-crescent":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 1 6 9 9 9 0 0 1-6 9" fill="currentColor" />
        </svg>
      );
    case "first-quarter":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" stroke="none" />
        </svg>
      );
    case "waxing-gibbous":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93A8 8 0 0 1 12 4.07a8 8 0 0 1-1 15.86z" />
        </svg>
      );
    case "full-moon":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#ffffff" stroke="#bec9c7" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "waning-gibbous":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm2 17.74A8 8 0 0 1 12 4.07a8 8 0 0 1 2 15.67z" />
        </svg>
      );
    case "last-quarter":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 0 0 18" fill="currentColor" stroke="none" />
        </svg>
      );
    case "waning-crescent":
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 0-6 9 9 9 0 0 0 6 9" fill="currentColor" />
        </svg>
      );
  }
}

export function AutoAwesomeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
    </svg>
  );
}

export function CompassExploreIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" />
    </svg>
  );
}

