"use client";

import React from "react";
import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";
import { HiOutlineDocument, HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  const links = [
    {
      id: "x",
      label: "Twitter",
      href: "https://twitter.com/NAITIKNAYA56197",
      icon: <FaXTwitter className="w-5 h-5" />,
    },
    {
      id: "github",
      label: "Github",
      href: "https://github.com/nayaknaitik",
      icon: <SiGithub className="w-5 h-5" />,
    },
    {
      id: "resume",
      label: "Resume",
      href: "https://drive.google.com/file/d/1I5aUSU-0s5yklKXufMKv9f0G9ncciOP6/view?usp=drive_link",
      icon: <HiOutlineDocument className="w-5 h-5" />,
    },
    {
      id: "linkedin",
      label: "Linkedin",
      href: "https://www.linkedin.com/in/naitiknayak/",
      icon: <SiLinkedin className="w-5 h-5" />,
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:naitiknayak009@gmail.com",
      icon: <HiOutlineMail className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="w-full bg-black text-white py-14 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-400 mb-3">
          You can check these{" "}
          <span className="text-white font-medium">links</span>{" "}
          if you wish to
        </p>

        {/* visible email line */}
        <p className="text-sm text-gray-400 mb-6">
          Or email me at{" "}
          <a
            href="mailto:naitiknayak009@gmail.com"
            className="text-white underline decoration-white/10"
          >
            naitiknayak009@gmail.com
          </a>
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              target={l.href.startsWith("/") || l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={l.href.startsWith("/") || l.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={l.label}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg min-w-[120px] sm:min-w-[140px] 
                         bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.02))] 
                         border border-white/10 text-white text-sm
                         backdrop-blur-md shadow-inner hover:-translate-y-0.5 hover:bg-white/6
                         transition transform duration-180 focus:outline-none focus:ring-2 focus:ring-white/10"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-black/40 border border-white/6">
                {l.icon}
              </span>
              <span className="font-medium">{l.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
