"use client";

import { useEffect, useRef } from "react";

interface ScrollProgressBarProps {
  /** Height of the progress bar in pixels (default: 3) */
  height?: number;
  /** Color of the progress bar (default: #f3f3f3) */
  color?: string;
  /** Add a subtle backdrop blur behind the bar */
  blur?: boolean;
  /** Extra Tailwind classes for the wrapper */
  className?: string;
}

/**
 * A scroll progress indicator that fills the top of the page
 * as the user scrolls down.
 *
 * Example:
 * ```tsx
 * <ScrollProgressBar height={4} color="#f3f3f3" blur />
 * ```
 */
export default function ScrollProgressBar({
  height = 3,
  color = "#f3f3f3",
  blur = false,
  className = "",
}: ScrollProgressBarProps) {
  const barRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      el.style.transform = `translateX(${pct - 100}%)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(update);
      }
    };

    update(); // initialize position

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 right-0 z-[9999] ${className}`}
      style={{ height: `${height}px` }}
    >
      <div
        className={`w-full h-full overflow-hidden ${
          blur ? "backdrop-blur-sm bg-opacity-10" : ""
        }`}
        style={{ background: "transparent" }}
      >
        <div
          ref={barRef}
          className="h-full origin-left transition-transform duration-150 ease-linear"
          style={{
            width: "100%",
            transform: "translateX(-100%)",
            willChange: "transform",
            backgroundColor: color, // ✅ white/gray bar color (#f3f3f3)
          }}
        />
      </div>
    </div>
  );
}
