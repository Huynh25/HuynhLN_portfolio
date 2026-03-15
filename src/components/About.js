// components/About.js
function About() {
  return (
    <section id="about">
      <h2>Introduction</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hi, I'm Le Nhu Huynh, an aspiring Frontend Developer with a solid foundation in Software Engineering from FPT University. I have gained practical experience through internships and software projects, focusing on building user-centric interfaces.</p>
          <p>I am passionate about understanding technical requirements and translating them into clean, functional code using React.js and JavaScript</p>
          <p>By combining my IT background with a focus on structured documentation and user-centric design, I aim to contribute to professional teams and deliver impactful digital products</p>
          
          {/* <div className="skills-highlight">
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
          </div> */}
          
          <a href="https://drive.google.com/file/d/1ToVp_vM-87KfQRgyXskb4KbP7tt8Hele/view?usp=sharing" className="cta-button" target="_blank" rel="noopener noreferrer">Download my CV</a>
        </div>
        <div className="about-sidebar">
          <div className="sidebar-profile-image">
            <img src="/profile.jpg" alt="Profile" className="profile-img" />
          </div>
          <div className="sidebar-section">
            <p className="location">📍 Asia/Ho Chi Minh</p>
          </div>
          <div className="sidebar-section">
            <h4>Languages</h4>
            <ul>
              <li>Vietnamese</li>
              <li>English</li>
              <li>Chineses</li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;
