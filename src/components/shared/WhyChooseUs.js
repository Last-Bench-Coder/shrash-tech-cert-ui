// src/components/WhyChooseUs.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WhyChooseUs.css";
import { FaShieldAlt, FaClock, FaSmileBeam } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-wrapper">
      <Container>
        <div className="text-center mb-5">
          <h2 className="why-title">Why Choose Us?</h2>
          <p className="why-desc">
            Discover the reasons why thousands trust Certificate Dunia to create, send, and manage their certificates effortlessly.
          </p>
        </div>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <div className="why-card">
              <FaShieldAlt className="why-icon" />
              <h5>Secure & Trusted</h5>
              <p>We prioritize your data security with end-to-end encryption and privacy-first policies.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="why-card">
              <FaClock className="why-icon" />
              <h5>Fast & Efficient</h5>
              <p>Certificates are generated and sent in just seconds with zero downtime.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="why-card">
              <FaSmileBeam className="why-icon" />
              <h5>User Delight</h5>
              <p>From UI to UX, every touchpoint is crafted to offer a delightful experience.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
