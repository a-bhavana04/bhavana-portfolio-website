const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-4xl mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-broadway text-2xl md:text-3xl text-primary mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-foreground/90">
              <p className="font-broadway text-xs leading-relaxed">
                Passionate cybersecurity engineer with expertise in threat analysis, 
                vulnerability assessment, and security architecture design.
              </p>
              <p className="font-broadway text-xs leading-relaxed">
                Dedicated to protecting digital assets and ensuring robust security 
                frameworks for modern applications and infrastructure.
              </p>
              <p className="font-broadway text-xs leading-relaxed">
                Continuously learning and adapting to emerging threats in the 
                ever-evolving cybersecurity landscape.
              </p>
            </div>
            
            {/* Skills */}
            <div className="mt-8">
              <h3 className="font-broadway text-lg text-primary mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Penetration Testing',
                  'Network Security',
                  'Incident Response',
                  'Risk Assessment',
                  'Security Auditing',
                  'Threat Intelligence'
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className="font-broadway text-xs text-foreground/80 p-2 border border-primary/30 rounded bg-secondary/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="w-full h-64 border border-primary/30 rounded-lg bg-secondary/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border-2 border-primary rounded-full flex items-center justify-center animate-glow-pulse">
                  <span className="font-broadway text-xs text-primary">CERT</span>
                </div>
                <p className="font-broadway text-xs text-foreground/60">
                  Professional Certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
