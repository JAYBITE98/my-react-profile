import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <h2>Education</h2>
        </div>
        <div className="education-grid">
          <div className="edu-item">
            <div className="edu-year">Present</div>
            <h3>MSc in Public Health Nursing</h3>
            <p className="edu-institution">Near East University, Northern Cyprus</p>
          </div>
          <div className="edu-item">
            <div className="edu-year">Completed</div>
            <h3>BSc in Nursing</h3>
            <p className="edu-institution">University of Kyrenia</p>
          </div>
          <div className="edu-item">
            <div className="edu-year">Present</div>
            <h3>BSc in Data Science and AI</h3>
            <p className="edu-institution">IU International University of Applied Sciences, Germany</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;