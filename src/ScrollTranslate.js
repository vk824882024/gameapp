import React, { useEffect, useState } from "react";
import "./ScrollTranslate.css";
import "./App.css";
import Footer from "./Footer";
import WhyShopSection from "./WhyShopSection";
import WhyVendorsSection from "./WhyVendorSection";
import HowItWorks from "./HowItWorks";
import DailyLuckyDraw from "./DailyLuckyDraw";
import ClosingCTABanner from "./ClosingCTABanner";
import {mixColor, motion} from 'framer-motion'
import Navbar from "./Nav";
import Aos from "aos";
import 'aos/dist/aos.css';
const ScrollTranslate = () => {
//     const targetDate = new Date("2025-10-11T00:00:00").getTime();
// useEffect(()=>{
//  Aos.init({duration:2000});
// },[])
//   const [timeLeft, setTimeLeft] = useState({
//     days: "00",
//     hours: "00",
//     minutes: "00",
//     seconds: "00",
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       if (distance <= 0) {
//         clearInterval(timer);
//         setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
//       } else {
//         const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
//         const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
//         const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
//         const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

//         setTimeLeft({ days, hours, minutes, seconds });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [targetDate]);

//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
     
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="scroll-container" data-aos="fade-top">
        
//       <section className="hero display-6" style={{marginTop:100}}>
//     <section className="hero-banner position-relative overflow-hidden">
//       {/* Background Confetti */}
//       <div className="confetti-bg position-absolute top-0 start-0 w-100 h-100"></div>
//       {/* Temple Silhouette */}
//       <div className="temple-bg position-absolute bottom-0 start-0 end-0"></div>

//       <div className="container position-relative py-5">
//         <div className="row align-items-center">
          
//           {/* Left Content */}
//           <div className="col-md-6 text-center text-md-start">
//             <h1 className="display-4 fw-bold ">
//                 <h1>WoowLocal</h1>
//               🎉 Nellai Mega Mela 2025
//             </h1>
//             <p className="fs-5  mb-1">📅 October 11 – 15</p>
//             <p className="fs-5 text-light mb-4">
//               Tirunelveli’s First Digital Shopping Festival – <br />
//               <strong>Same-day Delivery</strong> & Easy Store Pickup
//             </p>

//             {/* Buttons */}
//             <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
//               <button className="btn btn-success btn-lg shadow">
//                 🛍️ Shop Festival Deals
//               </button>
//               <button className="btn  btn-lg border-black">
//                 🏬 Register Your Shop
//               </button>
//             </div>
//           </div>

//           {/* Right Mockup */}
//           <div className="col-md-6 d-flex justify-content-center mt-5 mt-md-0">
//             <div className="mockup-phone border rounded-4 shadow-lg bg-white overflow-hidden">
//               <div className="bg-gradient p-3 text-white fw-bold fs-5">
//                 Mega Mela Offers
//               </div>
//               <div className="p-4">
//                 <div className="offer-box bg-warning bg-opacity-25 p-3 mb-3 rounded shadow-sm">
//                   🎁 50% Off Sarees
//                 </div>
//                 <div className="offer-box bg-success bg-opacity-25 p-3 mb-3 rounded shadow-sm">
//                   🍫 Buy 1 Get 1 Chocolates
//                 </div>
//                 <div className="offer-box bg-danger bg-opacity-25 p-3 mb-3 rounded shadow-sm">
//                   👗 Flat ₹999 Kurtis
//                 </div>
//                 <div className="offer-box bg-primary bg-opacity-25 p-3 rounded shadow-sm">
//                   📱 Mobile Fest Discounts
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//       </section>
    

      
//       <div
//         className="moving-box"
//         style={{
//           transform: `translateY(${scrollY *-1.0}px)`, // <-- translate on scroll
//         }} 
//         data-aos="fade-up"
        
//       >
//        <section className="countdown-section text-center py-5 bg-dark">
//       <div className="container bg-dark">
//         {/* Headline */}
//         <h2 className="fw-bold mb-4 text-light">
//           ⏳ Festival Starts In…
//         </h2>

//         {/* Countdown Timer */}
//         <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
//           <div className="time-box">
//             <span className="time-value">{timeLeft.days}</span>
//             <span className="time-label">Days</span>
//           </div>
//           <div className="time-box">
//             <span className="time-value">{timeLeft.hours}</span>
//             <span className="time-label">Hours</span>
//           </div>
//           <div className="time-box">
//             <span className="time-value">{timeLeft.minutes}</span>
//             <span className="time-label">Min</span>
//           </div>
//           <div className="time-box">
//             <span className="time-value">{timeLeft.seconds}</span>
//             <span className="time-label">Sec</span>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <button className="btn btn-primary btn-lg mb-5">
//           🔔 Notify Me When Mela Starts
//         </button>

//         {/* Categories List */}
//         <div className="row justify-content-center">
//           {["Home appliances", "Mobiles", "Electronics", "Furnitures", "Fashion & Apparels"].map((category, index) => (
//             <div key={index} className="col-6 col-md-2 mb-3"> 
//               <div className="category-box p-3 rounded shadow-sm h-100 bg-light text">
//                 {category}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//      <div className="container-fluid">
       
//          <section>
//      <WhyShopSection/>
//      <HowItWorks/>
//      <DailyLuckyDraw/>
//       <Footer/>
//       </section>
//       </div>
//       </div>
     <div>
    <Navbar/>
    </div>
};

export default ScrollTranslate;
