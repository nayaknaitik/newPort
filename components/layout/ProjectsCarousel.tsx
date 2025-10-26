"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import Image from "next/image";
import gsap from "gsap";
import { SiGithub } from "react-icons/si";

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef<number>(0); // to avoid stale closures

  // Keep ref synced with state
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // animateTransition: smoothly overlap outgoing -> incoming
  const animateTransition = (fromIndex: number, toIndex: number) => {
    const cards = Array.from(document.querySelectorAll(".project-card")) as HTMLElement[];
    const currentCard = cards[fromIndex];
    const nextCard = cards[toIndex];

    if (!currentCard || !nextCard) return;

    // kill any running timeline
    if (tl.current) tl.current.kill();

    // prepare next card visually (on top but hidden)
    nextCard.style.zIndex = "20";
    nextCard.style.pointerEvents = "auto";
    gsap.set(nextCard, { opacity: 0, filter: "blur(8px)", scale: 1.05 });

    // ensure current card under next
    currentCard.style.zIndex = "10";
    currentCard.style.pointerEvents = "none";

    // timeline: outgoing blurs/fades while incoming sharpens/fades in (overlap)
    tl.current = gsap.timeline({
      onComplete: () => {
        // reset z-index/pointer-events on all cards
        cards.forEach((c, i) => {
          c.style.zIndex = i === toIndex ? "10" : "0";
          c.style.pointerEvents = i === toIndex ? "auto" : "none";
        });

        // ensure final visual state
        gsap.set(nextCard, { opacity: 1, filter: "blur(0px)", scale: 1 });
        gsap.set(currentCard, { opacity: 0, filter: "blur(8px)", scale: 0.95 });

        // update active index
        setActiveIndex(toIndex);
      },
    });

    tl.current
      .to(
        currentCard,
        {
          opacity: 0,
          filter: "blur(10px)",
          scale: 0.95,
          duration: 0.7,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        nextCard,
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=0.55" // overlap: next starts before current finishes
      );
  };

  // initial reveal & set base styles
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".project-card")) as HTMLElement[];
    cards.forEach((c, i) => {
      c.style.pointerEvents = i === activeIndex ? "auto" : "none";
      c.style.zIndex = i === activeIndex ? "10" : "0";
      gsap.set(c, {
        opacity: i === activeIndex ? 1 : 0,
        filter: i === activeIndex ? "blur(0px)" : "blur(8px)",
        scale: i === activeIndex ? 1 : 1.05,
      });
    });

    const currentCard = cards[activeIndex];
    if (currentCard) {
      gsap.fromTo(
        currentCard,
        { opacity: 0, filter: "blur(8px)", scale: 1.05 },
        { opacity: 1, filter: "blur(0px)", scale: 1, duration: 0.9, ease: "power2.out" }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // start infinite loop + pause on hover
  useEffect(() => {
    const startLoop = () => {
      // clear existing
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      // create new interval
      intervalRef.current = window.setInterval(() => {
        const from = activeIndexRef.current;
        const to = (from + 1) % projects.length;
        animateTransition(from, to);
        // setActiveIndex will be called in onComplete
      }, 5000);
    };

    startLoop();

    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      // softly pause any running timeline
      if (tl.current) tl.current.pause();
    };

    const handleMouseLeave = () => {
      // resume timeline if paused
      if (tl.current) tl.current && tl.current.resume();
      // restart loop
      startLoop();
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // set up once

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Work</h2>

        {/* keep the same narrow width as before (max-w-3xl) */}
        <div ref={containerRef} className="relative w-full h-[500px] max-md:h-[300px] mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card absolute inset-0 w-full h-full flex items-center justify-center rounded-lg overflow-hidden bg-white/5 border border-white/10 p-0 transition-all duration-300`}
            >
              {/* Image area: image + dark gradient overlay + bottom glass strip */}
              <div className="relative w-full h-full">
                {/* Image: cover the entire area */}
                <div className="absolute inset-0 w-auto h-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain object-center"
                  />
                </div>

                {/* gradient overlay (slightly darken) */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />

                {/* bottom glass strip: only project name + github code link */}
                <div className="absolute left-6 right-6 bottom-6 z-20">
                  <div className="w-full mx-auto max-w-3xl">
                    <div className="flex items-center justify-between gap-4 px-4 py-3 bg-white/8 backdrop-blur-md border border-white/10 rounded-xl shadow-sm">
                      <div className="text-white font-semibold text-lg max-md:text-md truncate">
                        {project.title}
                      </div>

                      {project.codeUrl ? (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-md transition"
                        >
                          {/* <SiGithub className="w-5 h-5" /> */}
                          <span className="text-sm font-medium">Link</span>
                        </a>
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>
                </div>

                {/* preserve structure for accessibility / future metadata */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
