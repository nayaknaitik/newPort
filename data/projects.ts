import docMaintain from "../public/CursorBackend.png";
import tagore from "../public/tagore.jpeg";
import slot from "../public/slot.png";
import icancare from "../public/ican.png";

export const projects = [
  {
    id: 4,
    title: "iCanCare — Healthcare Platform (Internship Project)",
    date: "Apr–Sep 2025",
    description:
      "Production healthcare platform built end-to-end during internship, serving real users at scale.",
    highlights: [
      "Full-stack development using Next.js, TypeScript, Prisma, and MySQL",
      "Admin panels with role-based access control",
      "AWS deployment with integrated payment gateway",
    ],
    image: icancare,
    liveUrl: "https://icancare.com",
  },
  {
    id: 1,
    title: "DocMaintain — Documentation Indexing Backend",
    date: "Dec 2025",
    description:
      "Backend system for ingesting, indexing, and semantically retrieving large documentation and codebases.",
    highlights: [
      "Incremental ingestion and vector indexing pipeline",
      "Semantic retrieval APIs with metadata filtering",
      "Scalable backend architecture for IDE integration",
    ],
    image: docMaintain,
    github: "https://github.com/nayaknaitik/Cursor-LikeBackendSystem",
  },
  
  {
    id: 2,
    title: "TagoreNess — Emotionally-Aware RAG System",
    date: "Nov 2025",
    description:
      "Retrieval-Augmented Generation system delivering context-aware responses grounded in curated literary sources.",
    highlights: [
      "End-to-end RAG pipeline using FastAPI and FAISS",
      "Hybrid semantic + metadata-based retrieval",
      "Citation-grounded response generation",
    ],
    image: tagore,
    github:
      "https://github.com/nayaknaitik/tagoreNess-ChatBotAgent-Backend-v1-fastAPI",
  },
  {
    id: 3,
    title: "SlotSwapper — Peer-to-Peer Time Slot Exchange Platform",
    date: "Oct 2025",
    description:
      "Full-stack scheduling platform enabling users to exchange calendar slots through secure workflows.",
    highlights: [
      "JWT-secured APIs with transactional handling",
      "PostgreSQL-backed data modeling with Prisma",
      "Containerized deployment using Docker Compose",
    ],
    image: slot,
    github:
      "https://github.com/nayaknaitik/slotSwapper-project-ServiceHive",
  },
  
];
