// src/components/Category.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Category.css";
import { FaBolt, FaGift, FaEnvelopeOpen } from "react-icons/fa";

const categories = [
  {
    icon: <FaBolt />,
    title: "Instant Create",
    description: "With just a few clicks, generate high-quality certificates instantly. No technical skills required.",
  },
  {
    icon: <FaGift />,
    title: "Free Forever",
    description: "Our certificate generation service is completely free – now and always. Unlimited usage guaranteed.",
  },
  {
    icon: <FaEnvelopeOpen />,
    title: "Download & Mail Support",
    description: "Download your certificate or email it to anyone instantly. Share your achievements with ease.",
  },
];

const Category = () => {
  return (
    <section className="category-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="category-title">Empower Your Certification Journey</h2>
          <p className="category-subtitle">
            Discover the powerful features that make <strong>Certificate Dunia</strong> your go-to tool for fast, reliable, and elegant certificate generation.
          </p>
        </div>
        <Row>
          {categories.map((cat, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <Card className="category-card text-center h-100">
                <div className="category-icon">{cat.icon}</div>
                <Card.Body>
                  <Card.Title>{cat.title}</Card.Title>
                  <Card.Text>{cat.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Category;
