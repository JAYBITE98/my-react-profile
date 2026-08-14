import React from 'react';
import './Header.css';
// Import your image - CHANGE THE EXTENSION if needed (.jpg, .png, etc.)
import profileImage from '../images/julius-falana.jpg';

const Header = () => {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="profile-image-wrapper">
            <img 
              src={profileImage}
              alt="Julius Folorunso Falana" 
              className="profile-image"
            />
          </div>
          <h1>Julius Folorunso Falana</h1>
          <p className="hero-subtitle">
            <span className="highlight">Registered Nurse</span> · 
            <span className="highlight">Data Scientist</span> · 
            <span className="highlight">AI Enthusiast</span>
          </p>
          <p className="hero-description">
            Bridging clinical practice with data science and AI to transform healthcare delivery
          </p>
          <div className="social-icons">
            <a href="mailto:juliusfolorunsofalana@gmail.com">📧</a>
            <a href="https://www.linkedin.com/in/julius-folorunso-falana" target="_blank">💼</a>
            <a href="https://github.com/JAYBITE98" target="_blank">🐙</a>
            <a href="tel:+905338326462">📱</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;