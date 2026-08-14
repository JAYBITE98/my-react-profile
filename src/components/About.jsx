import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <p>
            I'm a <strong>Registered Nurse</strong> and nursing educator bridging clinical practice with 
            data science and AI. I'm currently pursuing an <strong>MSc in Public Health Nursing</strong> 
            (Near East University, Northern Cyprus) alongside a <strong>BSc in Data Science and 
            Artificial Intelligence</strong> (IU International University of Applied Sciences, Germany).
          </p>
          <p>
            My work sits at the intersection of healthcare, data, and technology — building tools like 
            infectious disease dashboards and analyzing mental health trends, while continuing to teach 
            the next generation of nurses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;