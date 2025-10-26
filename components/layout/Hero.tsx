"use client";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import SplitType from "split-type";
import Button from "../ui/Button";
import Image from "next/image";
import profile from "../../public/profile.jpeg";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const split = new SplitType(headingRef.current, { types: "chars" });
    gsap.set(split.chars, { filter: "blur(3px)", opacity: 0 });
    gsap.to(split.chars, {
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.05,
      ease: "power2.out",
      duration: 0.4,
      delay: 0.3,
    });

    // Fade-up animation for subtext and buttons (after heading)
    gsap.from([subtextRef.current, buttonsRef.current], {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      delay: 1.8,
      stagger: 0.2,
    });

    return () => {
      split.revert();
    };
  }, []);

  // 👇 New: smooth scroll handler for "View Work" button
  const handleScrollToWork = () => {
    const target = document.querySelector("#work");
    if (!target) return;

    // Try using Locomotive Scroll if available
    const loco = (window as any).__locomotive;
    if (loco && typeof loco.scrollTo === "function") {
      loco.scrollTo(target, { offset: 0, duration: 1, easing: [0.25, 0.0, 0.35, 1.0] });
    } else {
      // Fallback to native smooth scroll
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToSkills = () => {
    const target = document.querySelector("#skills");
    if (!target) return;

    // Try using Locomotive Scroll if available
    const loco = (window as any).__locomotive;
    if (loco && typeof loco.scrollTo === "function") {
      loco.scrollTo(target, { offset: 0, duration: 1, easing: [0.25, 0.0, 0.35, 1.0] });
    } else {
      // Fallback to native smooth scroll
      target.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className="h-screen flex items-center justify-center -mt-10 text-center px-6 relative">
      <div className="flex flex-col items-center space-y-6">
        {/* Availability Badge */}
        <div className="relative w-46 h-46 rounded-full bg-white/5 border border-white/20 backdrop-blur-md shadow-md overflow-hidden ring-1 ring-white/10 hover:scale-105 transition-transform duration-300">
          <Image
            src={profile}
            alt="Naitik Nayak"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Headline */}
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl tracking-tight lg:text-6xl font-semibold max-w-3xl leading-tighter"
        >
          Building Intelligent <br /> Web Experiences
        </h1>

        {/* Subheadline */}
        <p
          ref={subtextRef}
          className="text-lg md:text-lg max-w-2xl text-[#b3b3b3]"
        >
          I build scalable, intelligent, and beautifully crafted web
          applications <br /> merging clean design with robust engineering
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex gap-4 mt-4">
          <Button label="Experience" onClick={handleScrollToWork}  />
          <Button
            label="Skills"
            onClick={handleScrollToSkills}  
            className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
          />
        </div>
      </div>
    </section>
  );
}
