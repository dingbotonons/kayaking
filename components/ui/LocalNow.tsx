"use client";

import { useEffect, useState } from "react";

/**
 * The visitor's local date (and optionally time), rendered client-side
 * after mount so the date shown is the reader's own "today", not the
 * server's. Server-rendered output is an empty placeholder of the same
 * height, so there is no hydration mismatch and no layout shift.
 *
 * Formats:
 *  - date only:  "Thursday, November 13, 2026"
 *  - with time:  "Thursday, November 13, 2026 · 7:42 PM"
 */
export function LocalNow({
  withTime = false,
  className = "",
}: {
  withTime?: boolean;
  className?: string;
}) {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const format = () => {
      const now = new Date();
      const date = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(now);
      if (!withTime) {
        setText(date);
        return;
      }
      const time = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }).format(now);
      setText(`${date} · ${time}`);
    };
    format();
    if (withTime) {
      const id = setInterval(format, 30_000);
      return () => clearInterval(id);
    }
  }, [withTime]);

  return (
    <p className={className} aria-live="off">
      {text || "\u00A0"}
    </p>
  );
}
