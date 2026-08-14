import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2>My Skills</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">❤️</div>
            <h3>Clinical &amp; Public Health</h3>
            <ul>
              <li>Nursing practice &amp; patient care</li>
              <li>Health communication &amp; risk communication</li>
              <li>Public health research (MBI-SS, DASS-21, MSPSS)</li>
              <li>Nursing education &amp; curriculum delivery</li>
            </ul>
          </div>
          <div className="skill-card">
            <div className="skill-icon">💻</div>
            <h3>Technical Skills</h3>
            <ul>
              <li>🐍 Python, R, SQL</li>
              <li>🌐 HTML, CSS, JavaScript</li>
              <li>⚛️ React.js, Node.js</li>
              <li>🧠 Machine learning &amp; AI</li>
            </ul>
          </div>
        </div>
        <div className="salary-highlight">
          <p>
            My former salary is <del>$2,000</del>, but I am aiming for 
            <span className="target-salary"> $7,000</span> 
            <span className="badge">Goal</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;