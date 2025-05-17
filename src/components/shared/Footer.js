import React from "react";
import "./Footer.css";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section logo-section">
          <div className="footer-logo-text">
            Certificate <span className="footer-dunia-text">Dunia</span>
          </div>
          <p>
            Free, instant certificate generation for everyone. Create.
            Download. Email. Anytime.
          </p>
        </div>

        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section privacy-section">
          <h4>Data Privacy</h4>
          <p>
            Your information is safe with us. We don’t share anyone’s
            certificates or personal data with any third-party vendors.
            Your data is 100% secure and private.
          </p>
          <a href="#privacy" className="privacy-link">
            Read our Privacy Policy
          </a>
        </div>

        <div className="footer-section social-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube />
            </a>
            <a href="#" aria-label="GitHub">
              <Github />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Shrash-Tech. All rights
          reserved. Designed and Developed by{" "}
          <Link to="/owner">Chakrapani Upadhyaya</Link>
        </p>
        <div
          className="go-top"
          onClick={scrollToTop}
          title="Go to Top"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && scrollToTop()}
        >
          <ArrowUp size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
