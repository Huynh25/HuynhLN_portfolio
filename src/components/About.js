import { FileCode2, MapPin, Sparkles } from 'lucide-react';

// components/About.js
function About() {
  return (
    <section id="about">
      <div className="section-heading">
        <p className="eyebrow">Introduction</p>
        <h2>I build interfaces that make complex operations feel calm.</h2>
      </div>
      <div className="about-content split-layout">
        <div className="about-text">
          <p>
            I am a Frontend Developer with a Software Engineering background from FPT University, focused on React, React Native, responsive UI, and business workflows.
          </p>
          <p>
            My work sits close to operations: attendance, shift scheduling, company management, approval flows, administrative portals, and mobile experiences for users in the field.
          </p>
          <p>
            I care about readable code, practical UI decisions, clean API integration, and interfaces that help people finish their work without friction.
          </p>
          <a href="https://drive.google.com/file/d/1ToVp_vM-87KfQRgyXskb4KbP7tt8Hele/view?usp=sharing" className="cta-button primary-action" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
        <div className="about-sidebar">
          <div className="profile-code-card">
            <FileCode2 size={28} strokeWidth={1.6} />
            <pre>{`type WorkStyle = {
  translate: "requirements to UI";
  build: "React + API screens";
  improve: "flow, state, feedback";
};`}</pre>
          </div>
          <div className="sidebar-section">
            <h3><MapPin size={18} /> Based in Can Tho</h3>
            <p>Vietnam, UTC+7</p>
          </div>
          <div className="sidebar-section">
            <h3><Sparkles size={18} /> Languages</h3>
            <div className="inline-tags">
              <span>Vietnamese</span>
              <span>English</span>
              <span>Chinese</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
