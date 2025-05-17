// src/components/Hero.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <Container className="hero-content text-center">
        <h1 className="hero-title">Design, Generate & Share Professional Certificates</h1>
        <p className="hero-subtitle">
          Create stunning certificates for your events, courses, and achievements in just a few clicks.
        </p>
        <Button className="hero-button">Generate Certificate</Button>
      </Container>
    </section>
  );
};

export default Hero;
