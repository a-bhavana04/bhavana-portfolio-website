
import React, { useState } from "react";
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Arthanithi (App)",
      description: "Micro-investment platform with spare-change auto-investing and RL-based portfolio management.",
      tech: ["Flutter", "Flask", "Firebase", "PostgreSQL", "PPO RL", "OpenAI Gym"],
      link: "https://github.com/a-bhavana04/arthanithi-app"
    },
    {
      title: "EquiGo",
      description: "Resilient navigation app using dual-LLMs for reliable routes over unstable networks.",
      tech: ["React", "Node.js", "Dual-LLM", "CI/CD"],
      link: "https://github.com/a-bhavana04/EquiGo"
    },
    {
      title: "SheStrides",
      description: "Women’s safety app with ARCore overlays and personalized route guidance.",
      tech: ["Kotlin", "ARCore", "Google Geospatial"],
      link: "https://github.com/a-bhavana04/SheStrides-TeamAda-sDescendants"
    },
    {
      title: "DigiWe",
      description: "Speech-driven assistive app for new tech users and elderly, with edge computing and Whisper AI.",
      tech: ["Kotlin", "Whisper AI", "Edge Computing"],
      link: "https://github.com/a-bhavana04"
    },
    {
      title: "EasyLexi",
      description: "Assistive reading tool for dyslexic users with OCR, speech-to-text, and correction overlays.",
      tech: ["Python", "Flask", "OCR", "Speech-to-Text"],
      link: "https://github.com/a-bhavana04/EasyLexi-Decoding-Difficulties-for-Dyslexics-flask-"
    },
    {
      title: "AlgoJudge",
      description: "AI-powered coding judge with sandboxed execution, optimization feedback, and complexity analysis.",
      tech: ["Next.js", "FastAPI", "Docker", "PostgreSQL", "AWS", "Phi-4 LLM"],
      link: "https://github.com/a-bhavana04/AlgoJudge"
    },
    {
      title: "RaftStream",
      description: "Distributed video processing platform with RAFT consensus and failover recovery.",
      tech: ["Go", "React", "FastAPI", "RAFT", "RabbitMQ", "MinIO", "Docker"],
      link: "https://github.com/a-bhavana04/distributed-video-platform"
    },
    {
      title: "DermaMVQA",
      description: "Multimodal QA for dermatology combining Graph-RAG, CLIP, BioBERT, and medical knowledge graphs.",
      tech: ["Python", "PyTorch", "LangChain", "LLaMA-7B", "PyVis"],
      link: "https://github.com/a-bhavana04/DermaMVQA"
    },
    {
      title: "Arthanithi (Dashboard)",
      description: "Financial analytics dashboard with ETF/stock drift detection, RL-based rebalancing, and sentiment overlays.",
      tech: ["Python", "Flask", "PostgreSQL", "NLTK"],
      link: "https://github.com/a-bhavana04"
    },
    {
      title: "ArXiv Research Clustering & Recommender",
      description: "Processed 8K+ arXiv abstracts with TF-IDF, PCA, and clustering to build a semantic recommender.",
      tech: ["Python", "Scikit-learn", "NumPy", "Matplotlib", "Seaborn"],
      link: "https://github.com/a-bhavana04/ArxivClustering"
    },
  ];

  const PROJECTS_PER_PAGE = 3;
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = projects.slice(
    page * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE
  );

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50 z-0"></div>
      <div className="max-w-6xl mx-auto px-4 z-10">
        <h2 className="font-broadway text-2xl md:text-3xl text-primary text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {paginatedProjects.map((project, index) => (
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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={20} className="inline align-middle" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {pageCount > 1 && (
          <div className="flex justify-center mt-10 gap-4">
            <button
              className="font-broadway text-xs px-4 py-2 border border-primary rounded text-primary bg-transparent hover:bg-primary hover:text-background transition-all duration-300 disabled:opacity-40"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            >
              Previous
            </button>
            <span className="font-broadway text-xs text-primary-foreground/80 self-center">
              Page {page + 1} of {pageCount}
            </span>
            <button
              className="font-broadway text-xs px-4 py-2 border border-primary rounded text-primary bg-transparent hover:bg-primary hover:text-background transition-all duration-300 disabled:opacity-40"
              onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              disabled={page === pageCount - 1}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
