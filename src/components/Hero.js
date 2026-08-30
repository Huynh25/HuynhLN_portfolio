import { ArrowDownRight, Braces, Github, Layers, Smartphone } from "lucide-react";

function Hero() {
  const dockItems = [
    { label: "React", value: "Rx" },
    { label: "API", value: "</>" },
    { label: "Mobile", value: "RN" },
    { label: "DB", value: "SQL" },
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Frontend Developer · React · Mobile · Enterprise UI</p>
          <h1>Building interfaces for real teams, real workflows, and real data.</h1>
          <p className="hero-description">
            Hi, I am <span className="highlight">Le Nhu Huynh</span>. I turn business requirements into clean React and React Native products for attendance, work schedules, company operations, and public-service systems.
          </p>
          <div className="hero-actions">
            <a href="#project" className="cta-button primary-action">
              View projects <ArrowDownRight size={18} strokeWidth={1.8} />
            </a>
            <a href="https://github.com/Huynh25" className="cta-button secondary-action" target="_blank" rel="noopener noreferrer">
              <Github size={18} strokeWidth={1.8} /> Github
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Technical portfolio visual">
          <div className="portrait-stage">
            <div className="code-window floating-card">
              <div className="window-controls"><span></span><span></span><span></span></div>
              <pre>{`const developer = {
  name: "Le Nhu Huynh",
  focus: ["React", "UI systems", "Mobile"],
  ships: "enterprise workflows"
};`}</pre>
            </div>
            <img src="/assets/chibi-developer.png" alt="Chibi developer coding with technical UI elements" className="chibi-hero" />
            <div className="tech-node node-react"><Braces size={22} /> React</div>
            <div className="tech-node node-mobile"><Smartphone size={22} /> Mobile</div>
            <div className="tech-node node-system"><Layers size={22} /> Systems</div>
            <div className="hero-dock" aria-label="Technical stack dock">
              {dockItems.map((item) => (
                <span key={item.label} title={item.label}>{item.value}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
