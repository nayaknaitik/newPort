"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { SiNextdotjs, SiFigma, SiReact } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";
import ICan from "../../public/ICan.svg"; // static import — OK to use with next/image

type Experience = {
  id: number;
  company: string;
  logo?: React.ReactNode;
  logoUrl?: string | StaticImageData | null;
  role: string;
  type: string;
  date: string;
  location?: string;
  points: string[];
};

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Innovative Cancer Care and Rehabilitation",
    logo: <FaBriefcase className="w-5 h-5 text-white" />,
    logoUrl: ICan, // static import is fine here
    role: "SDE Intern",
    type: "Internship",
    date: "June 2025 – Sep 2025",
    location: "Remote",
    points: [
      "Developed and deployed a production-grade Tobacco Cessation Support Platform using Next.js, Express.js, and MySQL — enabling seamless interaction between patients and health professionals.",
      "Implemented secure role-based authentication and session management using JWTs and Express middleware.",
      "Integrated PayU payment gateway with checksum verification and real-time transaction callbacks, reducing checkout failures by 90%.",
      "Built responsive and accessible UI components with Tailwind CSS, improving overall user engagement and usability.",
      "Collaborated with cross-functional teams to deliver end-to-end modules, ensuring timely deployment and scalability on production servers.",
    ],
  },
  {
    id: 2,
    company: "Freelance",
    logo: <SiNextdotjs className="w-5 h-5 text-[#0070f3]" />,
    logoUrl: null, // no image file provided — use icon fallback
    role: "Full Stack Developer",
    type: "Part-time",
    date: "Jan 2024 – Now",
    location: "Remote",
    points: [
      "Worked closely with a team of developers to create scalable, production-ready React components that elevated the product’s UI and performance.",
      "Developed secure and intuitive admin panels using Next.js and NextAuth for monitoring analytics and managing platform data, applying strong frontend and full-stack development skills to enhance overall efficiency and user experience.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="work"  className="w-full bg-black text-white py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight">Experience</h2>
          <p className="text-gray-500 mt-2">Here is my work experience!</p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative pl-12">
          {/* Uncomment if you want a vertical line */}
          {/* <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" /> */}

          <div className="space-y-10">
            {EXPERIENCES.map((exp, idx) => {
              const isActive = exp.date.includes("Now");
              return (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="relative"
                >
                  {/* Marker on timeline (kept empty for now) */}
                  <div className="absolute left-0 md:left-2 top-2">
                    <div className="relative flex items-center justify-center">
                      {/* You can add markers here if desired */}
                      {isActive && (
                        <motion.span
                          aria-hidden
                          initial={{ scale: 0.9, opacity: 0.12 }}
                          animate={{ scale: [0.95, 1.6], opacity: [0.12, 0] }}
                          transition={{ duration: 1.6, repeat: Infinity }}
                          className="absolute rounded-full"
                          style={{ width: 28, height: 28, background: "rgba(255,255,255,0.03)" }}
                        />
                      )}
                      
                    </div>
                  </div>

                  {/* Company & Date Row */}
                  <motion.div
                    whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}
                    className="rounded-md"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex items-start gap-4 md:flex-1">
                        {/* Logo (image if provided, else fallback icon) */}
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                            {exp.logoUrl ? (
                              // exp.logoUrl can be a static import (StaticImageData) or a string path
                              <Image
                                src={exp.logoUrl}
                                alt={`${exp.company} logo`}
                                width={44}
                                height={44}
                                className="object-contain"
                                unoptimized={false}
                              />
                            ) : (
                              exp.logo || <FaBriefcase className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </div>

                        {/* Company Info */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-semibold text-white truncate">{exp.company}</h3>
                            <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-md border border-white/10">
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">{exp.role}</p>
                        </div>
                      </div>

                      {/* Date & Location */}
                      <div className="md:flex-shrink-0 md:text-right text-sm text-gray-400">
                        <div>{exp.date}</div>
                        {exp.location && <div className="mt-1">{exp.location}</div>}
                      </div>
                    </div>
                  </motion.div>

                  {/* Details */}
                  <div className="mt-6 -pl-3 md:pl-16">
                    <ul className="list-disc list-inside space-y-3 text-gray-400">
                      {exp.points.map((p, i) => (
                        <li key={i} className="leading-relaxed">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider (except last) */}
                  {idx !== EXPERIENCES.length - 1 && <div className="mt-8 border-t border-white/10" />}
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
