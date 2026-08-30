// components/Skills.js
import { Database, GitBranch, MonitorSmartphone, ServerCog } from 'lucide-react';

function Skills() {
  const stack = [
    { name: "React", image: "/assets/react-logo.png" },
    { name: "Ant Design", image: "/assets/antd-logo.png" },
    { name: "React Native", label: "RN" },
    { name: "Node.js", label: "Node" },
    { name: "MongoDB", label: "DB" },
    { name: "Docker", label: "DX" }
  ];

  const skills = [
    {
      category: "Frontend",
      description: "Interfaces, component states, responsive layouts, and API-connected screens.",
      icon: MonitorSmartphone,
      items: ["JavaScript", "React", "React Native", "HTML", "CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      description: "Enough backend fluency to integrate APIs, debug contracts, and understand system flow.",
      icon: ServerCog,
      items: ["Node.js", "ExpressJS", "NestJS", "Java", "REST API"]
    },
    {
      category: "Database",
      description: "Working with data models, realtime services, and frontend data presentation.",
      icon: Database,
      items: ["MongoDB", "Firebase", "Neo4j", "SQL"]
    },
    {
      category: "DevOps & Tools",
      description: "Daily collaboration tools for branches, reviews, builds, and deployment handoff.",
      icon: GitBranch,
      items: ["Git", "Github", "Docker", "Vercel"]
    }
  ];

  return (
    <section id="skills">
      <div className="section-heading">
        <p className="eyebrow">Technical stack</p>
        <h2>Tools I use to turn requirements into shipped interfaces.</h2>
      </div>

      <div className="skills-layout">
        <div className="stack-panel">
          <div className="stack-panel-copy">
            <span>Core toolkit</span>
            <h3>React-first, API-aware, mobile-ready.</h3>
            <p>I use familiar, production-friendly tools and shape them into clear product screens.</p>
          </div>
          <div className="stack-logo-grid">
            {stack.map((item) => (
              <div className="stack-logo-tile" key={item.name}>
                {item.image ? <img src={item.image} alt={item.name} /> : <strong>{item.label}</strong>}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-list">
          {skills.map((skillGroup) => {
            const Icon = skillGroup.icon;
            return (
            <div key={skillGroup.category} className="skill-row">
              <div className="skill-row-icon">
                <Icon size={26} strokeWidth={1.5} />
              </div>
              <div>
                <h3>{skillGroup.category}</h3>
                <p className="skill-description">{skillGroup.description}</p>
                <div className="skill-items">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>

    </section>
  );
}

export default Skills;
