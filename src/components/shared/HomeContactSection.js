import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./HomeContactSection.css";

const HomeContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      phone: "",
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("https://shrashcert.bsite.net/api/ContactUs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000); // auto-hide alert
      }
    } catch {
      alert("Failed to submit the form.");
    }
  };

  return (
    <section className="home-contact-section" id="contact">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-desc">
              Have questions or feedback? Reach out to us and we’ll respond promptly.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            {submitted && (
              <Alert variant="success" className="submit-alert">
                Thanks! We'll get back to you soon.
              </Alert>
            )}
            <Form onSubmit={handleSubmit} className="home-contact-form p-4 shadow-sm rounded">
              <Row className="mb-3">
                <Col md={6} className="mb-3 mb-md-0">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your Message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="form-input textarea-input"
                />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="contact-submit-btn shadow-sm">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeContactSection;
