// components/layout/ScrollContainer.tsx
"use client";

import React, { useRef } from "react";
import LocomotiveProvider from "./LocomotiveProvider";

export default function ScrollContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLElement | null>(null);

  return (
    <>
      {/* Initialize locomotive using the client provider and pass the ref */}
      <LocomotiveProvider containerRef={containerRef} smooth multiplier={1} lerp={0.08} />

      {/* This is the actual container that locomotive will control */}
      <main
        data-scroll-container
        ref={containerRef as React.RefObject<HTMLElement>}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </main>
    </>
  );
}
