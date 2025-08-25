const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50 z-0"></div>
        <div className="max-w-4xl mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center text-center mx-auto max-w-2xl">
          <h2 className="font-broadway text-2xl md:text-3xl text-primary mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-foreground/90">
            <p className="font-broadway text-xs leading-relaxed">
              Fullstack and AI engineer with experience building scalable web platforms, distributed systems, and intelligent automation solutions.
            </p>
            <p className="font-broadway text-xs leading-relaxed">
              Skilled in React, Next.js, FastAPI, Go, Python, and cloud-native technologies. Passionate about leveraging AI/ML for real-world impact and seamless user experiences.
            </p>
            <p className="font-broadway text-xs leading-relaxed">
              Always learning, collaborating, and pushing the boundaries of software and AI engineering.
            </p>
          </div>
          {/* Skills */}
          <div className="mt-8 w-full">
            <h3 className="font-broadway text-lg text-primary mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-3 justify-center">
              {[
                'Python',
                'JavaScript / TypeScript',
                'Go',
                'React / Next.js',
                'FastAPI / Flask',
                'MongoDB / PostgreSQL',
                'Docker / AWS',
                'Machine Learning',
                'LangChain / PyTorch',
                'Distributed Systems'
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
      </div>
    </section>
  );
};

export default AboutSection;
