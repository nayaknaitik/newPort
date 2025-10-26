'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!navRef.current || !nameRef.current) return;

    // Navbar blur + fade-in
    gsap.fromTo(
      navRef.current,
      { opacity: 0, filter: 'blur(10px)', y: -30 },
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      }
    );

    // Name text animation (slight drop + fade)
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: -20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 "
    >
      <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
        <h1
          ref={nameRef}
          className="text-3xl mx-auto md:text-4xl font-bold tracking-tight text-white"
        >
          Naitik Nayak
        </h1>
      </div>
    </div>
  );
}
