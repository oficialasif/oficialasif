import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div id="home" className="relative z-10">
        <HeroSection />
      </div>

      {/* Spacer to prevent intersection overlap */}
      <div className="relative z-10 bg-black h-4" />

      <div id="projects" className="relative z-20">
        <ProjectsSection />
      </div>

      <div id="services" className="relative z-20">
        <ServicesSection />
      </div>

      <div id="testimonials" className="relative z-20 border-t border-white/5">
        <TestimonialsSection />
      </div>

      <div id="about" className="relative z-20 border-t border-white/5">
        <AboutSection />
      </div>

      <Footer />
    </main>
  );
}
