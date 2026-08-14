import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Contact</h2>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>I'm always open to new opportunities and collaborations.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span>📧</span>
                <a href="mailto:juliusfolorunsofalana@gmail.com">
                  juliusfolorunsofalana@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span>📱</span>
                <a href="tel:+905338326462">+90 533 832 6462</a>
              </div>
              <div className="contact-item">
                <span>💼</span>
                <a href="https://www.linkedin.com/in/julius-folorunso-falana" target="_blank">
                  LinkedIn
                </a>
              </div>
              <div className="contact-item">
                <span>🐙</span>
                <a href="https://github.com/JAYBITE98" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;