// components/Projects.js
import { Github, ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Stiktify",
      description: "Social platform for sharing music and short videos with interactions and in-app marketplace",
      tech: ["Next.js", "Nest.js", "MongoDB", "Neo4j", "Docker", "Firebase"],
      frontend: "https://github.com/TeamHorizon123/StiktifyFrontend.git",
      backend: "https://github.com/TeamHorizon123/StiktifyBackend.git",
      demo: "https://youtu.be/oUN4-NkNpBE?si=WyN7TE7ud_94ZCdE"
    },
    {
      id: 2,
      title: "Petwell",
      description: "Developed a comprehensive pet care ecosystem consisting of a web management platform to modernize veterinary services",
      tech: ["React", "ExpressJs", "Firebase", "MongoDB", "Cloudinary"],
      frontend: "https://github.com/Huynh25/wdp301_petwell_web.git",
      backend: "https://github.com/Huynh25/wdp301_petwell_backend.gits",
      demo: "#"
    },
    {
      id: 3,
      title: "Clone Highlands Coffee App",
      description: "A clone of the Highlands Coffee mobile application with similar features and functionality",
      tech: ["React Native", "Express.js", "MongoDB", "Cloudinary"],
      frontend: "https://github.com/Huynh25/project-mma-highlands.git",
      backend: "https://github.com/Huynh25/Project-api-MMA301.git",
      demo: "#"
    },
    // {
    //   id: 4,
    //   title: "AI Chatbot",
    //   description: "Intelligent chatbot with NLP capabilities",
    //   tech: ["Python", "TensorFlow", "Flask"],
    //   frontend: "#",
    //   backend: "https://github.com",
    //   demo: "https://chatbot.com"
    // }
  ];

  return (
    <section id="project">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.frontend !== "#" && (
                <a href={project.frontend} target="_blank" rel="noopener noreferrer" className="project-link-btn fe-btn">
                  <Github size={16} />
                  FE
                </a>
              )}
              {project.backend !== "#" && (
                <a href={project.backend} target="_blank" rel="noopener noreferrer" className="project-link-btn be-btn">
                  <Github size={16} />
                  BE
                </a>
              )}
              {project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn demo-btn">
                  <ExternalLink size={16} />
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
