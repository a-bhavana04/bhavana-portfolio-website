const ResumeSection = () => {
  return (
    <section id="resume" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-4xl mx-auto px-4 z-10">
        <h2 className="font-broadway text-2xl md:text-3xl text-primary text-center mb-12">
          Resume
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="font-broadway text-lg text-primary mb-6">Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-4 p-4 bg-primary text-primary-foreground rounded-lg">
                <h4 className="font-broadway text-base text-primary-foreground">Senior Security Engineer</h4>
                <p className="font-broadway text-xs text-primary-foreground/70 mb-2">TechCorp • 2022 - Present</p>
                <p className="font-broadway text-xs text-primary-foreground/80">
                  Leading security initiatives and implementing robust defense mechanisms.
                </p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4 p-4 bg-primary text-primary-foreground rounded-lg">
                <h4 className="font-broadway text-base text-primary-foreground">Security Analyst</h4>
                <p className="font-broadway text-xs text-primary-foreground/70 mb-2">SecureNet • 2020 - 2022</p>
                <p className="font-broadway text-xs text-primary-foreground/80">
                  Conducted vulnerability assessments and incident response activities.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="font-broadway text-lg text-primary mb-6">Education</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-broadway text-base text-foreground">M.S. Cybersecurity</h4>
                <p className="font-broadway text-xs text-foreground/70 mb-2">University • 2020</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-broadway text-base text-foreground">B.S. Computer Science</h4>
                <p className="font-broadway text-xs text-foreground/70 mb-2">University • 2018</p>
              </div>
            </div>

            <h3 className="font-broadway text-lg text-primary mb-6 mt-8">Certifications</h3>
            <div className="space-y-3">
              {['CISSP', 'CEH', 'Security+', 'CISM'].map((cert) => (
                <div key={cert} className="font-broadway text-xs p-2 border border-primary/30 rounded bg-secondary/10 text-foreground/80">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="font-broadway text-xs px-6 py-3 border border-primary bg-transparent text-primary hover:bg-primary hover:text-background transition-all duration-300 rounded-lg">
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
