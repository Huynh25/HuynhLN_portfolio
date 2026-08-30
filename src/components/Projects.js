// components/Projects.js
import { ArrowUpRight, BriefcaseBusiness, CalendarDays, Clock3, Factory, Globe2, Smartphone, UsersRound } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Workforce Attendance Portal",
      subtitle: "Attendance and workforce operations",
      description: "Built web interfaces for employee attendance, QR/location-based check-in flows, attendance requests, work calendars, and shift management so operations teams can track daily work more clearly.",
      tech: ["React", "Ant Design", "REST API", "Schedule UI"],
      icon: Clock3,
      visual: "attendance"
    },
    {
      id: 2,
      title: "Mobile Attendance Companion",
      subtitle: "Mobile field workflow",
      description: "Implemented React Native screens for mobile attendance and operational actions, keeping check-in, schedule viewing, and request handling usable outside the desktop portal.",
      tech: ["React Native", "Mobile UI", "API Integration", "User Flow"],
      icon: Smartphone,
      visual: "mobile"
    },
    {
      id: 3,
      title: "Company Management Console",
      subtitle: "Business and company management",
      description: "Worked on frontend modules for managing company data, user roles, business records, and administrative workflows with a focus on searchable forms and clear information hierarchy.",
      tech: ["React", "Ant Design", "Forms", "Business Data"],
      icon: BriefcaseBusiness,
      visual: "company"
    },
    {
      id: 4,
      title: "Administrative Service Portal",
      subtitle: "Public-sector service portal",
      description: "Developed frontend screens for department-level management flows, focusing on stable data entry, document-like layouts, and clear status feedback for administrative users.",
      tech: ["React", "Ant Design", "Workflow UI", "Status States"],
      icon: Factory,
      visual: "service"
    },
    {
      id: 5,
      title: "Software Company Website",
      subtitle: "Company website",
      description: "Built a modern company-facing website experience to present services, technical capability, and brand credibility with responsive layouts and polished visual sections.",
      tech: ["React", "Responsive", "Brand UI", "Vercel"],
      icon: Globe2,
      visual: "website"
    },
    {
      id: 6,
      title: "Operation Log Management",
      subtitle: "Enterprise scheduling and reporting",
      description: "Contributed to enterprise frontend workflows around staff coordination, schedules, shifts, and operational reporting for teams that need reliable, scan-friendly interfaces.",
      tech: ["React", "Ant Design", "Calendar", "Reports"],
      icon: CalendarDays,
      visual: "operation"
    },
    {
      id: 7,
      title: "Music Social Experience",
      subtitle: "Music social platform",
      description: "Created a full product concept for sharing music and short videos, with social interactions, marketplace flows, and media-first user experiences.",
      tech: ["Next.js", "Nest.js", "MongoDB", "Neo4j", "Docker"],
      icon: UsersRound,
      visual: "social",
      link: "https://youtu.be/oUN4-NkNpBE?si=WyN7TE7ud_94ZCdE"
    }
  ];

  return (
    <section id="project">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Projects for operations, data, and daily teamwork.</h2>
      </div>
      <div className="projects-showcase">
        {projects.map(project => {
          const Icon = project.icon;
          return (
          <div key={project.id} className={`project-card ${project.id <= 2 ? "project-featured" : ""}`}>
            <div className={`project-visual visual-${project.visual}`}>
              <div className="project-visual-toolbar">
                <span></span><span></span><span></span>
              </div>
              <div className="project-visual-body">
                <div className="visual-icon"><Icon size={38} strokeWidth={1.55} /></div>
                <div className="visual-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="visual-logos">
                  <img src="/assets/react-logo.png" alt="React" />
                  {project.tech.includes("Ant Design") && <img src="/assets/antd-logo.png" alt="Ant Design" />}
                </div>
              </div>
            </div>
            <div className="project-topline">
              <Icon size={28} strokeWidth={1.6} />
              <span>{project.subtitle}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            {project.link && <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">Watch demo <ArrowUpRight size={16} /></a>}
          </div>
        )})}
      </div>
    </section>
  );
}

export default Projects;
