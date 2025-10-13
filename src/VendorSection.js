import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
// You will need an image file for the illustration, e.g., 'vendor-illustration.svg'
import vendorIllustration from './vendor.jpg'; 
import './VendorSection.css'; // Custom CSS file for additional styling

const benefits = [
  { icon: '🚀', text: 'Reach 1,000s of Nellai Customers' },
  { icon: '💸', text: 'Free Listing in Mega Mela' },
  { icon: '📲', text: 'Orders & Leads sent to WhatsApp' },
  { icon: '🎯', text: 'No Pamphlets – 100% Digital Reach' },
];
    
const VendorSection = () => {
  return (
    <Container className="my-5 py-4 vendor-section">
      <Row className="align-items-center">
        {/* Left Column for Illustration */}
        <Col md={6} className="text-center mb-4 mb-md-0">
          <Image src={vendorIllustration} alt="Shop and App illustration" fluid className="vendor-illustration" />
        </Col>

        {/* Right Column for Bullets and CTA */}
        <Col md={6}>
          <h2 className="mb-4 text-primary">Why Vendors Should Join?</h2>
          <ul className="list-unstyled vendor-list">
            {benefits.map((benefit, index) => (
              <li key={index} className="mb-3 d-flex align-items-start">
                <span className="benefit-icon me-3" role="img" aria-label="icon">
                  {benefit.icon}
                </span>
                <p className="flex-grow-1 mb-0">{benefit.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Button variant="warning" size="lg" className="register-btn" href="#">
              Register Your Shop Today
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VendorSection;
