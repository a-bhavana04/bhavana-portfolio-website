import CyberGrid from '@/components/CyberGrid';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="relative bg-background text-foreground font-broadway overflow-x-hidden">
      {/* Animated Cyberpunk Grid Background */}
      <CyberGrid />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-broadway text-xs text-foreground/60">
            © 2024 Cybersecurity Portfolio. Secured by design.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
