import React, { useState } from "react";
import Footer from "../components/sections/landing/Footer";

const phonesData = {
  iPhone: [
    { name: "iPhone 11", price: 699, img: "iphone11.jpg" },
    { name: "iPhone 11 Pro", price: 799, img: "iphone11pro.webp" },
    { name: "iPhone 11 Pro-Max", price: 999, img: "iphone11max.png" },
    { name: "iPhone 12", price: 1199, img: "iphone12.png" },
    { name: "iPhone 12 Pro", price: 699, img: "iphone12pro.jpg" },
    { name: "iPhone 12 Pro-Max", price: 799, img: "iphone12max.webp" },
    { name: "iPhone 13", price: 999, img: "iphone13.jpg" },
    { name: "iPhone 13 Pro", price: 1199, img: "iphone13pro.jpeg" },
     { name: "iPhone 13 Pro-Max", price: 1199, img: "iphone12.png" },
    { name: "iPhone 14", price: 699, img: "iphone14.jpg" },
    { name: "iPhone 14 Pro", price: 799, img: "iphone14pro.jpg" },
     { name: "iPhone 14 Pro-Max", price: 799, img: "iphone14max.jpg" },
    { name: "iPhone 15", price: 999, img: "iphone15.webp" },
    { name: "iPhone 15 Pro", price: 1199, img: "iphone15pro.jpg" },
     { name: "iPhone 15 Pro-Max", price: 1199, img: "iphone15max.jpeg" },
      { name: "iPhone 16", price: 999, img: "iphone16.png" },
    { name: "iPhone 16 Pro", price: 1199, img: "iphone16pro.png" },
     { name: "iPhone 16 Pro-Max", price: 1199, img: "iphone16max.webp" },
      { name: "iPhone 17", price: 999, img: "iphone17.webp" },
    { name: "iPhone 17 Pro", price: 1199, img: "iphone17pro.webp" },
     { name: "iPhone 17 Pro-Max", price: 1199, img: "iphone17max.jpg" },
     { name: "iPhone Air", price: 1199, img: "iPhoneair.jpg" },
    
  ],
  Techno: [
    { name: "Techno Camon 40", price: 599, img: "technocamon40.png" },
    { name: "Techno Camon 40-Pro", price: 599, img: "technocamon40pro.png" },
        { name: "Techno Camon 30", price: 599, img: "technocamon30.jpg" },
    { name: "Techno Pop-8", price: 599, img: "technopop8.jpg" },
        { name: "Techno Pop-9", price: 599, img: "technopop9.webp" },
    { name: "Techno Pop-10", price: 599, img: "technopop10.jpg" },
        { name: "Techno Pop-10Pro", price: 599, img: "technopop10pro.png" },
    { name: "Techno Spark 40", price: 599, img: "technospark40.jpg" },
        { name: "Techno Spark 40-Pro", price: 599, img: "technospark40pro.webp" },
  ],
  Samsung: [
    { name: "Samsung Galaxy S25-Ultra", price: 699, img: "samsungs25ultra.webp" },
    { name: "Samsung Galaxy S25-FE", price: 799, img: "samsungs25fe.jpg" },
    { name: "Samsung Galaxy S25+", price: 999, img: "samsungs25+.webp" },
        { name: "Samsung Galaxy S24", price: 699, img: "samsungs24.jpg" },
    { name: "Samsung Galaxy S23", price: 799, img: "samsungs23.avif" },
    { name: "Samsung Galaxy A56", price: 999, img: "samsungA56.jpg" },
        { name: "Samsung Galaxy A55", price: 699, img: "samsungA55.webp" },
    { name: "Samsung Galaxy A36", price: 799, img: "samsungA36.jpg" },
    { name: "Samsung Galaxy A16", price: 999, img: "samsungA16.jpg" },
        { name: "Samsung Galaxy A07", price: 799, img: "samsungA07.webp" },
    { name: "Samsung Galaxy A06", price: 999, img: "samsungA06.jpg" },

  ],
  

  Redmi: [
    { name: "Redmi Note 14Pro+", price: 599, img: "Redmi14Pro+.jpg" },
    { name: "Redmi Note 14Pro", price: 699, img: "Redmi14Pro.jpg" },
    { name: "Redmi   14C", price: 699, img: "redmi14c.jpg" },
     { name: "Redmi  15", price: 599, img: "redmi15.png" },
    { name: "Redmi 15C", price: 699, img: "redmi15c.webp" },
    { name: "Redmi A5", price: 599, img: "redmiA5.jpg" },
    { name: "Redmi A3X", price: 699, img: "redmiA3X.jpg" },
     { name: "Redmi  A3", price: 599, img: "redmiA3pro.jpeg" },
   
  ],
  Itel: [
    { name: "Itel Super 26-Ultra", price: 599, img: "itelsuper26ultra.jpg" },
    { name: "Itel Power 70", price: 699, img: "itelpower70.jpg" },
        { name: "Itel P65", price: 599, img: "itelp65.jpg" },
    { name: "Itel City 100", price: 699, img: "itelcity100.png" },
        { name: "Itel A100-C", price: 599, img: "itelA100c.png" },
    { name: "Itel A100", price: 699, img: "itelA100.jpg" },
        { name: "Itel A90", price: 599, img: "itelA90.jpg" },
    { name: "Itel A06", price: 699, img: "itelA06.jpg" },
  ],

  Infinix: [
    { name: "Infinix Hot 60-Pro+", price: 599, img: "infinixhot60pro+.png" },
    { name: "Infinix Hot 60", price: 699, img: "infinixhot60.jpg" },
    { name: "Infinix Note 50-Pro+", price: 599, img: "InfinixNote50Pro.jpg" },
    { name: "Infinix Note 50-Pro", price: 699, img: "InfinixNote50Pro2.jpg" },
    { name: "Infinix Note 50", price: 599, img: "InfinixNote50.png" },
    { name: "Infinix Hot 50i", price: 699, img: "infinixhot50i.webp" },
    { name: "Infinix Smart 10", price: 699, img: "infinixsmart10.webp" },
    { name: "Infinix Note 50", price: 599, img: "infinixsmart10hd.png" },
    { name: "Infinix Hot 50i", price: 699, img: "infinixsmart10plus.png" }
  ]
};

const Phones = ({ addToCart }) => {
  const brands = Object.keys(phonesData);
  const [activeBrand, setActiveBrand] = useState(brands[0]);

  return (
    <section >
        <div className="phone-section">
             <h2 className="section-title">Popular Phones</h2>

      <div className="brand-tabs">
        {brands.map((brand) => (
          <button
            key={brand}
            className={`brand-tab ${activeBrand === brand ? "active" : ""}`}
            onClick={() => setActiveBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>

      <div className="phone-grid">
        {phonesData[activeBrand].map((phone, idx) => (
          <div className="phone-card" key={idx}>
            <img src={phone.img} alt={phone.name} />
            <h4 className="phone-name">{phone.name}</h4>
            <p className="phone-price">${phone.price.toFixed(2)}</p>
            <button onClick={() => addToCart(phone)} className="add-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
        </div>
     

      <Footer />
    </section>
  );
};

export default Phones;
