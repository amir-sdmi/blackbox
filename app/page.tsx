import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutCompany from "@/components/AboutCompany";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ExecutedProjects from "@/components/ExecutedProjects";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Fixed Gradient Orbs */}
      <div className="gradient-orb gradient-orb--blue" aria-hidden="true" />
      <div className="gradient-orb gradient-orb--pink" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <AboutCompany />
        <Services />
        <Projects />
        <ExecutedProjects />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
