// app/layout.tsx
"use client";

import { useRef } from "react";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import LocomotiveProvider from "@/components/layout/LocomotiveProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans(/* ... */);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLElement | null>(null);

  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans bg-black text-white">
        {/* <ScrollProgressBar height={4} color="#f3f3f3" />
        <LocomotiveProvider containerRef={containerRef} smooth multiplier={1} lerp={0.08} /> */}
        <main data-scroll-container ref={containerRef as React.RefObject<HTMLElement>} style={{ minHeight: "100vh" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
