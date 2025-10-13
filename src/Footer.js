import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'; // Add a custom CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-section py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* Contact Details Column */}
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="text-white mb-3">Contact Us</h5>
            <div className="contact-info">
              <a href="tel:7200639100" className="d-block mb-1 text-white text-decoration-none">
                📞 Call/WhatsApp: 7200639100
              </a>
              <a href="https://www.woowlocal.com" target="_blank" rel="noopener noreferrer" className="d-block text-white text-decoration-none">
                🌐 www.woowlocal.com
              </a>
            </div>
          </Col>

          {/* Social Icons Column */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link me-3">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link me-3">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link me-3">
                <FaFacebook size={30} />
              </a>
              <a href="https://wa.me/7200639100" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaWhatsapp size={30} />
              </a>
            </div>
          </Col>

          {/* Copyright Text Column */}
          <Col md={4} className="text-center text-md-end">
            <p className="mb-0 text-white powered-by">
              Powered by WoowLocal Retail Technologies Pvt Ltd
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
