// components/Skills.js
function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["Javascript", "Reactjs", "React Native", "HTML/CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      items: ["Nodejs", "ExpressJS", "Java"]
    },
    {
      category: "Database",
      items: ["MongoDB", "Firebase"]
    },
    {
      category: "DevOps & Tools",
      items: ["Git"]
    }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="skill-category">
            <h3>{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((skill, i) => (
                <span key={i} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
