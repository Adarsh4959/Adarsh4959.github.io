import React from 'react';
import '../App.css'; // Import the consolidated CSS file

const experience = [
  {
    title: 'Software Engineer',
    company: 'ABC Corp',
    duration: 'Jan 2022 - Present',
    description: 'Worked on developing web applications using React and Node.js.',
    logo: 'github.png', // Replace with actual path
  },
  {
    title: 'Frontend Developer',
    company: 'XYZ Ltd',
    duration: 'Jul 2020 - Dec 2021',
    description: 'Specialized in building responsive UIs with HTML, CSS, and JavaScript.',
    logo: 'aws.png', // Replace with actual path
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-heading">Experience</h2>
      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <img src={exp.logo} alt={exp.company} className="timeline-logo" />
            </div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="timeline-date">{exp.duration}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
