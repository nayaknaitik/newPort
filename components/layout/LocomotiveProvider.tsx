// components/layout/LocomotiveProvider.tsx
"use client";

import React, { type RefObject, useEffect } from "react";

type Locomotive = any;

interface Props {
  containerRef: RefObject<HTMLElement | null>;
  smooth?: boolean;
  multiplier?: number;
  lerp?: number;
}

export default function LocomotiveProvider({
  containerRef,
  smooth = true,
  multiplier = 1,
  lerp = 0.08,
}: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const el = containerRef?.current;
    if (!el) {
      console.warn("[LocomotiveProvider] containerRef.current is not available.");
      return;
    }

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.style.overflow = "auto";
      return;
    }

    el.style.overflow = "auto";
    el.style.height = "100%";

    let locoInstance: Locomotive | null = null;
    let destroyed = false;

    (async () => {
      try {
        const mod = await import("locomotive-scroll");
        const LocomotiveScroll = (mod && (mod.default ?? mod)) as any;
        if (destroyed) return;

        locoInstance = new LocomotiveScroll({
          el,
          smooth,
          multiplier,
          lerp,
          smartphone: { smooth: false },
          tablet: { smooth: true },
        });

        el.style.overflow = "hidden";
        document.documentElement.classList.add("has-locomotive");
        console.info("[LocomotiveProvider] locomotive-scroll initialized.");
      } catch (err) {
        console.error("[LocomotiveProvider] Failed to import/initialize locomotive-scroll:", err);
        if (el) el.style.overflow = "auto";
      }
    })();

    return () => {
      destroyed = true;
      if (locoInstance) {
        try {
          locoInstance.destroy();
        } catch {}
        locoInstance = null;
      }
      if (el) el.style.overflow = "auto";
      document.documentElement.classList.remove("has-locomotive");
      console.info("[LocomotiveProvider] destroyed.");
    };
  }, [containerRef, smooth, multiplier, lerp]);

  return null;
}
