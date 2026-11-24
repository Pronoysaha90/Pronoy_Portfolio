import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ProblemSolvingSection from "@/components/ProblemSolvingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-foreground overflow-x-clip relative">
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProblemSolvingSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
