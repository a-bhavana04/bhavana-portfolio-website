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
      <CyberGrid />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/20 py-12 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left: Name */}
            <div>
              <h3 className="font-broadway text-lg text-primary mb-2">Bhavana Anand</h3>
              <p className="font-broadway text-xs text-foreground/70">Software Engineer & AI Developer</p>
            </div>
            
            {/* Center: Quick Links */}
            <div className="text-center">
              <div className="flex justify-center space-x-6">
                <a href="#about" className="font-broadway text-xs text-foreground/70 hover:text-primary transition-colors">About</a>
                <a href="#projects" className="font-broadway text-xs text-foreground/70 hover:text-primary transition-colors">Projects</a>
                <a href="#resume" className="font-broadway text-xs text-foreground/70 hover:text-primary transition-colors">Resume</a>
                <a href="#contact" className="font-broadway text-xs text-foreground/70 hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
            
            {/* Right: Social Links */}
            <div className="text-right">
              <div className="flex justify-end space-x-4">
                <a 
                  href="https://github.com/a-bhavana04" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-broadway text-xs text-foreground/70 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/abhavana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-broadway text-xs text-foreground/70 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="mailto:banand@umass.edu"
                  className="font-broadway text-xs text-foreground/70 hover:text-primary transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-primary/10 text-center">
            <p className="font-broadway text-xs text-foreground/50">
              © 2025 Bhavana Anand. All rights reserved. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
