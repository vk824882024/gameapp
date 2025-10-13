import React from "react";
import "./App.css";
import { useEffect,useState } from "react";
const WhyVendorsSection = () => {
  const reasons = [
    "🚀 Reach 1,000s of Nellai Customers",
    "💸 Free Listing in Mega Mela",
    "📲 Orders & Leads sent to WhatsApp",
    "🎯 No Pamphlets – 100% Digital Reach",
  ];
   const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
     const handleScroll = () => {
       setScrollY(window.scrollY);
      
     };
 
     window.addEventListener("scroll", handleScroll);
 
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
  return (
    <section className="why-vendors-section py-5 bg-light moving-box" style={{ transform: `translateY(${scrollY *-1.0}px)`, }}>
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* Left Illustration */}
          <div className="col-md-6 text-center">
            <img
              src="/images/vendor-illustration.png"
              alt="Vendors Illustration"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">Why Vendors Should Join?</h2>
            
            <ul className="list-unstyled fs-5 mb-4">
              {reasons.map((reason, index) => (
                <li key={index} className="mb-3 d-flex align-items-start">
                  <span className="me-2">{reason}</span>
                </li>
              ))}
            </ul>

            <button className="btn btn-outline-success btn-lg shadow">
              👉 Register Your Shop Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVendorsSection;
