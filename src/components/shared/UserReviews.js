// src/components/landing/UserReviews.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./UserReviews.css";

const reviews = [
  {
    name: "Anjali Mehta",
    role: "Teacher, India",
    feedback: "Certificate Dunia made it so easy to create and send certificates to my students. Absolutely love the design and simplicity!",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "David Kim",
    role: "Event Organizer, USA",
    feedback: "Great tool for managing event certificates. The instant download and email support are fantastic features.",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Fatima Al Zahra",
    role: "Trainer, UAE",
    feedback: "Very smooth experience. Created 100+ certificates in minutes! Beautiful layouts and totally free. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=7"
  }
];

const UserReviews = () => {
  return (
    <section className="user-reviews-section" id="reviews">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="reviews-title">What Our Users Say</h2>
            <p className="reviews-subtitle">Real feedback from our happy users around the world</p>
          </Col>
        </Row>
        <Row>
          {reviews.map((review, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="review-card">
                <Card.Img variant="top" src={review.image} className="review-avatar" />
                <Card.Body>
                  <Card.Title className="review-name">{review.name}</Card.Title>
                  <Card.Subtitle className="review-role mb-2">{review.role}</Card.Subtitle>
                  <Card.Text className="review-text">“{review.feedback}”</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default UserReviews;
