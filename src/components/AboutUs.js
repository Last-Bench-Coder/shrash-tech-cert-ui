// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-container">
        <h1 className="about-title">About Certificate Dunia</h1>
        <p className="about-intro">
          Welcome to <strong>Certificate Dunia</strong> — your one-stop platform for fast, secure, and beautiful certificate generation.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To empower individuals, educators, and organizations with a seamless way to create and share digital certificates—anytime, anywhere.
            </p>
          </div>
          <div className="about-card">
            <h3>💡 Why We Exist</h3>
            <p>
              Traditional certificate creation is time-consuming and outdated. Certificate Dunia brings simplicity, automation, and design together to make this process delightful.
            </p>
          </div>
          <div className="about-card">
            <h3>🔒 Privacy Focused</h3>
            <p>
              We take your data seriously. Certificate Dunia never shares your personal or certificate data with third parties. Everything stays private and secure.
            </p>
          </div>
          <div className="about-card">
            <h3>🚀 Built for Everyone</h3>
            <p>
              Whether you're a teacher, business owner, or event organizer, our platform is designed to support your needs — from classroom to corporate.
            </p>
          </div>
        </div>

        <p className="about-outro">
          Thank you for choosing Certificate Dunia. We're committed to simplifying your certificate experience, one click at a time.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
