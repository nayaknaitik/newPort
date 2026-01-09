"use client";

import Image from "next/image";
import { projects } from "@/data/projects";
import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";

export default function ProjectsSection() {
  return (
    <section className="w-full bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-center">
          Selected Projects
        </h2>

        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <article
              key={project.id}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-[260px] md:h-[380px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <span className="text-sm text-white/50">
                    {project.date}
                  </span>
                </div>

                <p className="text-white/80 leading-relaxed mb-6">
                  {project.description}
                </p>

                <ul className="list-disc list-inside text-white/70 space-y-2 mb-8">
                  {project.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                {/* Action Link */}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 hover:border-white hover:bg-white/10 transition"
                  >
                    <HiExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Live</span>
                  </a>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 hover:border-white hover:bg-white/10 transition"
                  >
                    <SiGithub className="w-5 h-5" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
