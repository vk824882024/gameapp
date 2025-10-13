import React from "react";
import "./WhyShopSection.css";

const WhyShopSection = () => {
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

  return (
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
  );
};

export default WhyShopSection;
