import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
        </div>
        <div className="experience-content">
          <p>
            <strong>Registered Nurse &amp; Nursing Educator</strong> with extensive experience in 
            clinical practice, public health research, and data-driven healthcare solutions.
          </p>
          <ul className="experience-list">
            <li>✅ Developed and maintained infectious disease dashboards for real-time monitoring</li>
            <li>✅ Analyzed mental health trends using statistical methods and data visualization</li>
            <li>✅ Collaborated on data-driven solutions for patient care and public health initiatives</li>
            <li>✅ Designed nursing education programs integrating technology and data science</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;