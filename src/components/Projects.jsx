import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Backend Habit Tracker",
      description: "A modular Python-based system for tracking habits with database persistence.",
      tags: ["Python", "OOP", "Database"],
      link: "https://github.com/JAYBITE98/Backend-Habit-Tracker-IU-Project"
    },
    {
      id: 2,
      title: "Car Price Prediction",
      description: "Machine learning model to predict car prices based on various features.",
      tags: ["Python", "Machine Learning"],
      link: "https://github.com/JAYBITE98/CodeAlpha_Car_Price_Prediction"
    },
    {
      id: 3,
      title: "Unemployment Analysis",
      description: "Data analysis project examining unemployment trends and patterns.",
      tags: ["Python", "Data Analysis"],
      link: "https://github.com/JAYBITE98/CodeAlpha_Unemployment_Analysis"
    },
    {
      id: 4,
      title: "Iris Classification",
      description: "Machine learning project for classifying Iris flower species.",
      tags: ["Python", "Classification"],
      link: "https://github.com/JAYBITE98/CodeAlpha_Iris_Classification"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" className="project-link">
                View on GitHub
              </a>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;