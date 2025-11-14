"use client";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import Image from "next/image";
import gsap from "gsap";
import { SiGithub } from "react-icons/si";

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tl = useRef(null);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const animateTransition = (fromIndex, toIndex) => {
    const cards = Array.from(document.querySelectorAll(".project-card"));
    const currentCard = cards[fromIndex];
    const nextCard = cards[toIndex];

    if (!currentCard || !nextCard) return;
    if (tl.current) tl.current.kill();

    nextCard.style.zIndex = "20";
    nextCard.style.pointerEvents = "auto";
    gsap.set(nextCard, { opacity: 0, filter: "blur(8px)", scale: 1.03 });
    currentCard.style.zIndex = "10";
    currentCard.style.pointerEvents = "none";

    tl.current = gsap.timeline({
      onComplete: () => {
        cards.forEach((c, i) => {
          c.style.zIndex = i === toIndex ? "10" : "0";
          c.style.pointerEvents = i === toIndex ? "auto" : "none";
        });
        gsap.set(nextCard, { opacity: 1, filter: "blur(0px)", scale: 1 });
        gsap.set(currentCard, { opacity: 0, filter: "blur(8px)", scale: 0.98 });
        setActiveIndex(toIndex);
      }
    });

    tl.current
      .to(
        currentCard,
        { opacity: 0, filter: "blur(8px)", scale: 0.98, duration: 0.6, ease: "power2.inOut" },
        0
      )
      .to(
        nextCard,
        { opacity: 1, filter: "blur(0px)", scale: 1, duration: 0.8, ease: "power2.out" },
        "-=0.44"
      );
  };

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".project-card"));
    cards.forEach((c, i) => {
      c.style.pointerEvents = i === activeIndex ? "auto" : "none";
      c.style.zIndex = i === activeIndex ? "10" : "0";
      gsap.set(c, {
        opacity: i === activeIndex ? 1 : 0,
        filter: i === activeIndex ? "blur(0px)" : "blur(8px)",
        scale: i === activeIndex ? 1 : 1.03
      });
    });

    const currentCard = cards[activeIndex];
    if (currentCard) {
      gsap.fromTo(
        currentCard,
        { opacity: 0, filter: "blur(8px)", scale: 1.03 },
        { opacity: 1, filter: "blur(0px)", scale: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    const startLoop = () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      intervalRef.current = window.setInterval(() => {
        const from = activeIndexRef.current;
        const to = (from + 1) % projects.length;
        animateTransition(from, to);
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
      if (tl.current) tl.current.pause();
    };
    const handleMouseLeave = () => {
      if (tl.current) tl.current && tl.current.resume();
      startLoop();
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const goTo = (idx) => {
    if (idx === activeIndex) return;
    animateTransition(activeIndex, idx);
  };

  return (
    <section className="w-full bg-black text-white py-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My Work
        </h2>
        <div
          ref={containerRef}
          className="relative w-full h-[400px] max-md:h-[250px] mx-auto rounded-2xl overflow-hidden"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card absolute inset-0 w-full h-full flex items-center justify-center rounded-2xl overflow-hidden transition-all duration-700"
              aria-hidden={index !== activeIndex}
              tabIndex={index === activeIndex ? 0 : -1}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    priority={index === activeIndex}
                  />
                </div>
                <div className="absolute left-4 right-4 bottom-4 z-20">
                  <div className="w-full mx-auto max-w-3xl">
                    <div className="flex items-center justify-between gap-4 px-4 py-4 bg-black/60 border border-white/10 rounded-lg">
                      <div className="text-white font-semibold text-lg truncate">
                        {project.title}
                      </div>
                      {project.codeUrl ? (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/30 text-white px-3 py-1 rounded-md transition"
                        >
                          <SiGithub className="w-5 h-5" />
                          <span className="text-sm">Code</span>
                        </a>
                      ) : <div />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel indicators */}
          {/* <div className="absolute z-30 bottom-2 w-full flex justify-center gap-3">
            {projects.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => goTo(idx)}
                className={`w-2.5 h-2.5 rounded-full border-2 transition-all ${
                  idx === activeIndex
                    ? "bg-white border-white scale-125"
                    : "bg-transparent border-white/30 hover:border-white"
                }`}
                style={{ outline: "none" }}
              ></button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
