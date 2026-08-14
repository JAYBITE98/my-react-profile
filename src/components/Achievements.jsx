import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    "Developed and maintained infectious disease dashboards for real-time monitoring and analysis",
    "Analyzed mental health trends using statistical methods and data visualization techniques",
    "Collaborated with healthcare professionals to implement data-driven solutions for patient care",
    "Designed and delivered nursing education programs integrating technology and data science"
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <h2>Achievements</h2>
        </div>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p>{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;