// components/Experience.js
function Experience() {
  const experiences = [
    {
      type: "Experience",
      title: "Frontend Developer Intern",
      company: "FPT Software",
      period: "04/2024 – 8/2024",
      description: [
        "Designed and developed an e-learning web application inspired by Coursera using React.js.",
        "Collaborated with backend team to consume REST APIsand ensure smooth data flow",
      ]
    },
    {
      type: "Education",
      title: "Bachelor of Information Technology",
      company: "FPT University",
      period: "Expected 2025",
      description: ["Currently pursuing degree in Information Technology"]
    }
  ];

  return (
    <section id="experience">
      <div className="experience-wrapper">
        <div className="exp-section">
          <h2>Experience</h2>
          <div className="timeline">
            {experiences.filter(e => e.type === "Experience").map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                  {Array.isArray(exp.description) ? (
                    <ul className="description-list">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="description">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="edu-section">
          <h2>Education</h2>
          <div className="timeline">
            {experiences.filter(e => e.type === "Education").map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                  {Array.isArray(exp.description) ? (
                    <ul className="description-list">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="description">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
