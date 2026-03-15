import { Code, Palette, Rocket } from "lucide-react";

// components/Hero.js
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Building Seamless Interfaces from Robust Logic</h1>
        <p>Hi, I'm <span className="highlight">Le Nhu Huynh</span>, a <span className="highlight">Software Engineer</span> graduate with hands-on experience through internships and diverse team projects</p>
                  <div className="skills-highlight">
            <div className="skill-card">
              <Code className="skill-icon" size={40} strokeWidth={1.5} />
              <h3>Developer</h3>
              <p>Building responsive and performant web apps.</p>
            </div>
            <div className="skill-card">
              <Palette className="skill-icon" size={40} strokeWidth={1.5} />
              <h3>UI/UX</h3>
              <p>Designing clean and intuitive user experiences.</p>
            </div>
            <div className="skill-card">
              <Rocket className="skill-icon" size={40} strokeWidth={1.5} />
              <h3>Growth</h3>
              <p>Always learning and improving new front-end skills.</p>
            </div>
          </div>
        <a href="#about" className="cta-button">About – Le Nhu Huynh</a>
      </div>
    </section>
  );
}

export default Hero;
