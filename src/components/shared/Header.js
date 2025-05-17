// src/components/Header.js
import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="header-navbar" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="logo-text">
          Certificate <span className="dunia-text">Dunia</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars className="text-white" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/download">Download</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Button className="generate-btn ms-3">Generate Certificate</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
