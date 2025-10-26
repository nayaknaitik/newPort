import ContactSection from "@/components/layout/ContactSection";
import ExperienceSection from "@/components/layout/ExperienceSection";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import ProjectsCarousel from "@/components/layout/ProjectsCarousel";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import Skills from "@/components/layout/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
       <ScrollProgressBar height={4} color="#f3f3f3" blur />
       <Navbar/>
      <Hero/>
       <Skills/>
      <ProjectsCarousel/>
      <ExperienceSection/>
      <ContactSection/>
      <Footer/>
     
      
    </div>
  );
}
