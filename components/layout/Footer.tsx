"use client";

import React from "react";
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center space-y-3">
        {/* Text */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Naitik Nayak</span>. Built with{" "}
          <span className="text-red-500">❤️</span> using
        </p>

        {/* Icons Line */}
        <div className="flex items-center justify-center gap-4 text-gray-400 text-lg">
          <span className="inline-flex items-center gap-2">
            <SiNextdotjs className="text-white/80" /> <span className="text-sm">Next.js</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <SiTailwindcss className="text-[#38bdf8]" /> <span className="text-sm">Tailwind CSS</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <SiVercel className="text-white/80" /> <span className="text-sm">Vercel</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
