import React from 'react';
import '../App.css'; // Import the consolidated CSS file

// Array of skills data with image paths and descriptions
const skillsData = [
    { image: "aws.png", description: 'AWS Cloud' },
    { image: 'python.png', description: 'Python' },
    { image: 'javascript.png', description: 'Javascript' },
    { image: 'html.png', description: 'HTML' },
    { image: 'css.png', description: 'CSS' },
    { image: 'react.png', description: 'React' },
    { image: 'nextjs.png', description: 'Next.js' },
    { image: 'mysql.png', description: 'MySql' },
    { image: 'mongodb.png', description: 'Mongo DB' },
    { image: 'pgadmin.png', description: 'Postgre SQL' },
    { image: 'githublogo.png', description: 'GitHub' },
    { image: 'flutter.png', description: 'Flutter' },
    { image: 'fedora.png', description: 'Fedora' },
];

const Skill = () => {
  return (
    <section className="skills-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="skills-heading">Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-box" aria-label={skill.description}>
            <img
              src={skill.image}
              alt={skill.description}
              className="skill-image"
              onError={(e) => { e.target.src = 'path/to/fallback-image.png'; }} // Fallback image
            />
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
