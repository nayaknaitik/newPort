"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiReact,
  SiSpringboot,
  SiRedux,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiJsonwebtokens,
  SiFigma,
  SiPostgresql,
  SiLangchain,
  SiN8N, // ⚙️ Added n8n logo
} from "react-icons/si";
import { FaRobot } from "react-icons/fa"; // 🤖 Agentic AI icon

export default function Skills() {
  // --- SKILL DATA ---
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Python", icon: <SiPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "SQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "GSAP", icon: "GSAP" },
        { name: "LangChain", icon: <SiLangchain /> },
        { name: "n8n", icon: <SiN8N /> }, // ✅ Added n8n automation tool
        { name: "RAG Agents", icon: <FaRobot /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "H2", icon: "H2" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "JWT", icon: <SiJsonwebtokens /> },
        { name: "Figma", icon: <SiFigma /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white -mt-30 py-20 px-6"
    >
      <div className="max-w-6xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-4xl font-bold tracking-tight mb-6"
        >
          My Tech Stack
        </motion.h2>

        {/* --- Intro Line --- */}
        <motion.p
  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-zinc-300 text-lg md:text-lg leading-relaxed max-w-2xl mx-auto mb-16"
>
  I enjoy exploring the full spectrum of development — from building
  robust{" "}
  <span className="font-semibold text-white">back-end APIs</span> to
  crafting smooth, polished{" "}
  <span className="font-semibold text-white">front-end interfaces</span>.
  <br className="hidden md:block" />
  Currently, I primarily build with{" "}
  <motion.span
    initial={{ scale: 0.8, opacity: 0, filter: "blur(4px)" }}
    whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.3 }}
    className="inline-flex items-center gap-2 ml-1 mr-2"
  >
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm text-white text-[18px] ring-1 ring-white/10 shadow-sm">
      <SiNextdotjs />
    </span>
    <span className="font-medium text-white">Next.js</span>
  </motion.span>
  for the frontend,{" "}
  <motion.span
    initial={{ scale: 0.8, opacity: 0, filter: "blur(4px)" }}
    whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.4 }}
    className="inline-flex items-center gap-2 ml-1 mr-2"
  >
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#F5DA55] ring-1 ring-white/10 shadow-sm">
      <SiExpress />
    </span>
    <span className="font-medium text-white">Express.js</span>
  </motion.span>
  for the backend, and{" "}
  <motion.span
    initial={{ scale: 0.8, opacity: 0, filter: "blur(4px)" }}
    whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.5 }}
    className="inline-flex items-center gap-2 ml-1"
  >
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#4DB33D] ring-1 ring-white/10 shadow-sm">
      <SiMongodb />
    </span>
    <span className="font-medium text-white">MongoDB</span>
  </motion.span>{" "}
  as my database solution. <br className="hidden md:block" />
  I also build intelligent{" "}
  <motion.span
    initial={{ scale: 0.8, opacity: 0, filter: "blur(4px)" }}
    whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.6 }}
    className="inline-flex items-center gap-2 ml-1 mr-1"
  >
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#00A67E] ring-1 ring-white/10 shadow-sm">
      <SiLangchain />
    </span>
    <span className="font-medium text-white">LangChain</span>
  </motion.span>{" "}
  +{" "}
  <motion.span
    initial={{ scale: 0.8, opacity: 0, filter: "blur(4px)" }}
    whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.7 }}
    className="inline-flex items-center gap-2"
  >
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#3776AB] ring-1 ring-white/10 shadow-sm">
      <SiPython />
    </span>
    <span className="font-medium text-white">Python</span>
  </motion.span>
  {" "}agents, and I leverage{" "}
  <motion.span
    initial={{ scale: 0.8, opacity: 0, filter: "blur(4px)" }}
    whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.8 }}
    className="inline-flex items-center gap-2 ml-1"
  >
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#FF6B00] ring-1 ring-white/10 shadow-sm">
      <SiN8N />
    </span>
    <span className="font-medium text-white">n8n</span>
  </motion.span>{" "}
  for automation, orchestration, and AI-driven workflows.
</motion.p>

        {/* --- Skills Section --- */}
        <div className="space-y-10 max-w-3xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-white/90">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-center">
                {cat.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: i * 0.1 + idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm transition-transform duration-300 ease-out"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
