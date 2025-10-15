
import React, { useState,useEffect } from "react";

import { Carousel } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
function Navbar() {
   const reasons = [
    {
      icon: "🛍️",
      title: "Exclusive Festival Offers",
      desc: "Special deals and discounts from Tirunelveli’s local shops.",
    },
    {
      icon: "🚚",
      title: "Same-Day Delivery",
      desc: "Enjoy fast delivery and easy store pickup options.",
    },
    {
      icon: "🎁",
      title: "Free Gift with Every Order",
      desc: "Celebrate with a surprise gift on every purchase.",
    },
    {
      icon: "🎉",
      title: "Daily Lucky Draw",
      desc: "Win Gold, Silver, Mobiles & more exciting prizes!",
    },
  ];
  const [activeTab, setActiveTab] = useState("customers");
  
    const customerSteps = [
      "🛍️ Browse Mega Mela Offers",
      "📦 Order Online or Choose Pickup",
      "🚚 Get Same-day Delivery",
      "🎁 Receive Free Gift & Enter Lucky Draw",
    ];
  
    const vendorSteps = [
      "📝 Share Your Product/Offer List",
      "📲 WoowLocal Uploads into Platform",
      "🛍️ Customers Shop During Oct 11–15",
      "📩 Get Leads/Orders Direct to WhatsApp",
    ];
  
   const targetDate = new Date("2025-10-11T00:00:00").getTime();
  useEffect(()=>{
  //  Aos.init({duration:2000});
  },[])
    const [timeLeft, setTimeLeft] = useState({
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    });
  
    useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
  
        if (distance <= 0) {
          clearInterval(timer);
          setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        } else {
          const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
          const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
          const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
          const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");
  
          setTimeLeft({ days, hours, minutes, seconds });
        }
      }, 1000);
  
      return () => clearInterval(timer);
    }, [targetDate]);
  
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
       
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
   <div className=" header">
<nav class="navbar  navbar-expand-lg fixed-top" style={{backgroundColor:"#6A0DAD"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="woowlocal.png" width={100} style={{backgroundColor:"white"}}></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse text-white" id="navbarNav">
      <ul class="navbar-nav  ms-auto">
        <li class="nav-item">
          <a class="nav-link active fw-bolder text-white" aria-current="page" href="#categories">Categories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder text-white" href="#whyshop">Why Shop?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#howitworks">How it Works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#DailyDraw">Daily Draw</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 <div>
   <div className="scroll-container" id="categories">
        
      <section className="hero display-6" style={{marginTop:100}}>
    <section className="hero-banner position-relative overflow-hidden">
      {/* Background Confetti */}
      <div className="confetti-bg position-absolute top-0 start-0 w-100 h-100"></div>
      {/* Temple Silhouette */}
      <div className="temple-bg position-absolute bottom-0 start-0 end-0"></div>

      <div className="container position-relative py-5">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold ">
                <h1>WoowLocal</h1>
              🎉 Nellai Mega Mela 2025
            </h1>
            <p className="fs-5  mb-1">📅 October 11 – 15</p>
            <p className="fs-5 text-light mb-4">
              Tirunelveli’s First Digital Shopping Festival – <br />
              <strong>Same-day Delivery</strong> & Easy Store Pickup
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
              <button className="btn btn-success btn-lg shadow">
                🛍️ Shop Festival Deals
              </button>
              <button className="btn  btn-lg border-black">
                🏬 Register Your Shop
              </button>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="col-md-6 d-flex justify-content-center mt-5 mt-md-0">
            <div className="mockup-phone border rounded-4 shadow-lg bg-white overflow-hidden">
              <div className="bg-gradient p-3 text-white fw-bold fs-5">
                Mega Mela Offers
              </div>
              <div className="p-4">
                <div className="offer-box bg-warning bg-opacity-25 p-3 mb-3 rounded shadow-sm">
                  🎁 50% Off Sarees
                </div>
                <div className="offer-box bg-success bg-opacity-25 p-3 mb-3 rounded shadow-sm">
                  🍫 Buy 1 Get 1 Chocolates
                </div>
                <div className="offer-box bg-danger bg-opacity-25 p-3 mb-3 rounded shadow-sm">
                  👗 Flat ₹999 Kurtis
                </div>
                <div className="offer-box bg-primary bg-opacity-25 p-3 rounded shadow-sm">
                  📱 Mobile Fest Discounts
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
      </section>
    

      
      <div
       id="whyshop"
        className="moving-box"
        style={{
          transform: `translateY(${scrollY *-1.0}px)`, // <-- translate on scroll
        }} 
        
      >
       <section className="countdown-section text-center py-5 bg-dark">
      <div className="container bg-dark">
        {/* Headline */}
        <h2 className="fw-bold mb-4 text-light">
          ⏳ Festival Starts In…
        </h2>

        {/* Countdown Timer */}
        <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
          <div className="time-box">
            <span className="time-value">{timeLeft.days}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.hours}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.minutes}</span>
            <span className="time-label">Min</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.seconds}</span>
            <span className="time-label">Sec</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="btn btn-primary btn-lg mb-5">
          🔔 Notify Me When Mela Starts
        </button>

        {/* Categories List */}
        <div className="row justify-content-center">
          {["Home appliances", "Mobiles", "Electronics", "Furnitures", "Fashion & Apparels"].map((category, index) => (
            <div key={index} className="col-6 col-md-2 mb-3"> 
              <div className="category-box p-3 rounded shadow-sm h-100 bg-light text">
                {category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <div className="container-fluid">
       
         <section>

     <section className="why-shop-section py-5 bg-white">
      <div className="container text-center">
        {/* Section Title */}
        <h2 className="fw-bold mb-5">
          3️⃣ Why Shop in Nellai Mega Mela?
        </h2>

        {/* Grid of Cards */}
        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="icon fs-1 mb-3">{reason.icon}</div>
                <h5 className="fw-bold mb-2">{reason.title}</h5>
                <p className="text-muted">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-5">
          <button className="btn btn-success btn-lg shadow">
            👉 Shop Mega Mela Deals
          </button>
        </div>
      </div>
    </section>
      <section className="how-it-works py-5 bg-white" >
      <div className="container text-center">
        <h2 className="fw-bold mb-4" id="howitworks">How It Works</h2>

        {/* Tabs */}
        <ul className="nav nav-pills justify-content-center mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "customers" ? "active" : ""}`}
              onClick={() => setActiveTab("customers")}
            >
              👩‍🛍️ Customers
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "vendors" ? "active" : ""}`}
              onClick={() => setActiveTab("vendors")}
            >
              🏬 Vendors
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="row justify-content-center">
          {(activeTab === "customers" ? customerSteps : vendorSteps).map(
            (step, index) => (
              <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card h-100 shadow-sm border-0 p-4 step-card">
                  <h5 className="fw-bold mb-2">Step {index + 1}</h5>
                  <p className="text-muted">{step}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
    <section className="daily-lucky-draw py-5 bg-light text-center" id="DailyDraw">
      <div className="container">
        <h2 className="fw-bold mb-4">🎁 Win Big Every Day!</h2>

        {/* Bootstrap Carousel */}
        <Carousel className="mb-4">
          <Carousel.Item>
            <div className="prize-card">
              <span className="prize-icon">🪙</span>
              <h4 className="fw-bold mt-3">Gold Coin</h4>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="prize-card">
              <span className="prize-icon">🪙</span>
              <h4 className="fw-bold mt-3">Silver Coin</h4>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="prize-card">
              <span className="prize-icon">📱</span>
              <h4 className="fw-bold mt-3">Mobile Phone</h4>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="prize-card">
              <span className="prize-icon">🎧</span>
              <h4 className="fw-bold mt-3">Headphones</h4>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* CTA Button */}
        <button className="btn btn-success btn-lg px-4 py-2 fw-semibold shadow">
          👉 Start Shopping & Win
        </button>
      </div>
    </section>
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
      </section>
      </div>
      </div>
     
    
    </div>
 </div>
    </div>
   

  );
}

export default Navbar;

