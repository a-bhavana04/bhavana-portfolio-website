const ResumeSection = () => {
  return (
    <section id="resume" className="min-h-screen flex items-center py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50 z-0"></div>
      <div className="max-w-4xl mx-auto px-4 z-10">
        
        <h2 className="font-broadway text-2xl md:text-3xl text-primary text-center mb-12">
          Resume
        </h2>
        

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="font-broadway text-lg text-primary mb-6">Experience</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary/30 pl-4 p-4 bg-primary text-primary-foreground rounded-lg">
                <h4 className="font-broadway text-base text-primary-foreground">Software Engineer Intern</h4>
                <p className="font-broadway text-xs text-primary-foreground/70 mb-2">Fanpit • Mar 2025 – Aug 2025</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4 p-4 bg-primary text-primary-foreground rounded-lg">
                <h4 className="font-broadway text-base text-primary-foreground">AI Engineering Intern</h4>
                <p className="font-broadway text-xs text-primary-foreground/70 mb-2">Databahn.ai • Oct 2024 – Jan 2025</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4 p-4 bg-primary text-primary-foreground rounded-lg">
                <h4 className="font-broadway text-base text-primary-foreground">Machine Learning Developer Intern</h4>
                <p className="font-broadway text-xs text-primary-foreground/70 mb-2">Carnegie Mellon University (S3D Dept.) • Jun 2024 – Jul 2024</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4 p-4 bg-primary text-primary-foreground rounded-lg">
                <h4 className="font-broadway text-base text-primary-foreground">AI Research Intern</h4>
                <p className="font-broadway text-xs text-primary-foreground/70 mb-2">Indian Institute of Science • Jun 2023 – Aug 2023</p>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div>
            <h3 className="font-broadway text-lg text-primary mb-6">Education</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-broadway text-base text-foreground">M.S. Computer Science</h4>
                <p className="font-broadway text-xs text-foreground/70 mb-2">University of Massachusetts Amherst • 2025 – 2027 (Expected)</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-broadway text-base text-foreground">B.E. Computer Science</h4>
                <p className="font-broadway text-xs text-foreground/70 mb-2">Anna University (SSN College of Engineering) • 2021 – 2025</p>
              </div>
            </div>

            <h3 className="font-broadway text-lg text-primary mb-6 mt-8">Achievements</h3>
            <div className="space-y-3">
              <div className="font-broadway text-xs p-2 border border-primary/30 rounded bg-secondary/10 text-foreground/80">
                Generation Google Scholar (APAC 2024)
              </div>
              <div className="font-broadway text-xs p-2 border border-primary/30 rounded bg-secondary/10 text-foreground/80">
                Grace Hopper Celebration India Inclusion Scholar
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://drive.google.com/file/d/1kIzJmHVxpoKvhZS5Katmj8QpNJsabYjO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-broadway text-xs px-6 py-3 border border-primary bg-transparent text-primary hover:bg-primary hover:text-background transition-all duration-300 rounded-lg inline-block"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
