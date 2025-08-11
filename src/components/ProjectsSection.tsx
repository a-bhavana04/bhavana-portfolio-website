const ProjectsSection = () => {
  const projects = [
    {
      title: "Security Framework",
      description: "Comprehensive security architecture for enterprise applications",
      tech: ["Python", "AWS", "Docker"]
    },
    {
      title: "Vulnerability Scanner",
      description: "Automated tool for identifying security vulnerabilities",
      tech: ["Node.js", "React", "PostgreSQL"]
    },
    {
      title: "Threat Intelligence",
      description: "Real-time threat detection and analysis platform",
      tech: ["Machine Learning", "API", "Cloud"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-6xl mx-auto px-4 z-10">
        <h2 className="font-broadway text-2xl md:text-3xl text-primary text-center mb-12">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="border border-primary/30 rounded-lg p-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="font-broadway text-lg text-primary-foreground mb-3 group-hover:animate-glow-pulse">
                {project.title}
              </h3>
              <p className="font-broadway text-xs text-primary-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-broadway text-xs px-2 py-1 border border-primary-foreground/40 rounded text-primary-foreground/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="font-broadway text-xs mt-4 text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
