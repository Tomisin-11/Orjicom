import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Section1 = ({ addToCart }) => {
  const products = [
    { name: "iPhone 11", price: 144.99, img: "iphone11.jpg" },
    { name: "Silicone Case", price: 14.99, img: "Silicon.png" },
    { name: "Cables & Chargers", price: 19.99, img: "Charger.jpg" },
    { name: "Wireless Earbuds", price: 39.99, img: "EarBuds.jpg" },
    { name: "Screen Guard", price: 5.99, img: "ScreenG.jpg" },
    { name: "VR Headsets", price: 15.99, img: "VRHeadsets.png" },
    { name: "Selfie Sticks", price: 15.99, img: "SelfieSticks.jpg" },
    { name: "Combos", price: 50.99, img: "Combo.jpg" }
  ];

  const saleSlides = [
    {
      discount: "-21%",
      img: "ScreenG.jpg",
      name: "Otallee Thin Iphone Xr Ca...",
      price: "$15.00 – $18.00"
    },
    {
      discount: "-7%",
      img: "Techno1.png",
      name: "Sommer Cactus 3 Usb Port...",
      price: "$28.00",
      old: "$30.00"
    },
    {
      discount: "-6%",
      img: "infinix.jpg",
      name: "Infinix x6526 Smart 8",
      price: "$15.00 – $19.00"
    },
    {
      discount: "-12%",
      img: "Techno2.png",
      name: "Tecno Camon 30 Premier",
      price: "$23.00 – $28.00"
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h2>Phone Collections</h2>
          <h1>New Premium Collection</h1>
          <p>Durable. Stylish. Made for protection.</p>
          <button className="shop-btn">Shop Now</button>
        </div>

        <div className="hero-img">
          <img src="Section1i.webp" alt="iPhone Cases" />
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="content-area">
        <div className="sidebar">
          <h3>Categories</h3>
          <ul>
            <Link className="None" to="/case-covers">
              <li>Cases & Covers</li>
            </Link>

            <Link className="None" to="/Cables">
              <li>Cables</li>
            </Link>

            <li>Mobile chargers</li>
            <li>Pop sockets</li>
            <li>Mobile holders</li>
            <li>Screen Guards</li>
            <li>Selfie sticks</li>
            <li>VR headsets</li>
            <li>Mobile lenses</li>
            <li>Mobile Enhancement</li>

           
          </ul> 
          <button className="View">View Accessories</button>
        </div>

        <div className="product-display">
          <h2 className="section-title">Featured Accessories</h2>
          <div className="product-grid">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.img} alt={product.name} />
                <h4>{product.name}</h4>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="categories-section">
        <h2 className="section-title">Popular categories</h2>

        <div className="categories-container">
          <div className="category-card">
            <img src="Phone1.jpg" alt="" />
            <p>Mobile Phone</p>
          </div>

          <div className="category-card">
            <img src="Cables9.jpg" alt="" />
            <p>Cables</p>
          </div>

          <div className="category-card">
            <img src="Charger1.webp" alt="" />
            <p>Mobile Chargers</p>
          </div>

          <div className="category-card">
            <img src="Guard.webp" alt="" />
            <p>Screen Guards</p>
          </div>
        </div>

        <div className="categories-container">
          <div className="category-card">
            <img src="Phone1.jpg" alt="" />
            <p>Mobile Phone</p>
          </div>

          <div className="category-card">
            <img src="Cables9.jpg" alt="" />
            <p>Cables</p>
          </div>

          <div className="category-card">
            <img src="Charger1.webp" alt="" />
            <p>Mobile Chargers</p>
          </div>

          <div className="category-card">
            <img src="Guard.webp" alt="" />
            <p>Screen Guards</p>
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section className="Popular-section">
        <h2 className="Popular-title">Popular Products</h2>

        <div className="Popular-grid">
          {/* CARD 1 */}
          <div className="Popular-card">
            <div className="Popular-badges">
              <span className="badge new">New</span>
            </div>

            <img src="iphone16.png" className="Popular-img" alt="" />

            <button
              className="Popular-add-btn"
              onClick={() =>
                addToCart({
                  name: "Iphone 16 ",
                  price: 23.0,
                  img: "iphone16.png"
                })
              }
            >
              Add to cart
            </button>

            <p className="Popular-name">Iphone 16</p>
            <p className="Popular-price">$23.00 – $28.00</p>
          </div>

          {/* CARD 2 */}
          <div className="Popular-card">
            <div className="Popular-badges">
              <span className="badge-discount">-7%</span>
              <span className="badge new">New</span>
              
            </div>

            <img src="technocamon40pro.png" className="Popular-img" alt="" />

            <button
              className="Popular-add-btn"
              onClick={() =>
                addToCart({
                  name: "Tecno Camon 40 Pro",
                  price: 28.0,
                  img: "Techno2.png"
                })
              }
            >
              Add to cart
            </button>

            <p className="Popular-name">Tecno Camon 40 Pro</p>
            <p className="Popular-price">
              $28.00 <span className="old-price">$30.00</span>
            </p>
          </div>

          {/* CARD 3 */}
          <div className="Popular-card">
            <div className="Popular-badges">
              <span className="badge-discount">-21%</span>
              <span className="badge new">New</span>
              <span className="badge sale">On sale!</span>
            </div>

            <img src="Redmi14Pro+.jpg" className="Popular-img" alt="" />

            <button
              className="Popular-add-btn"
              onClick={() =>
                addToCart({
                  name: "Redmi 14-Pro+",
                  price: 15.0,
                  img: "Redmi14Pro+.jpg"
                })
              }
            >
              Add to cart
            </button>

            <p className="Popular-name">Redmi 14-Pro</p>
            <p className="Popular-price">$15.00 – $18.00</p>
          </div>

          {/* CARD 4 */}
          <div className="Popular-card">
            <div className="Popular-badges">
              <span className="badge-discount">-6%</span>
              <span className="badge new">New</span>
              <span className="badge sale">On sale!</span>
            </div>

            <img src="infinix.jpg" className="Popular-img" alt="" />

            <button
              className="Popular-add-btn"
              onClick={() =>
                addToCart({
                  name: "Infinix x6526 Smart 8",
                  price: 15.0,
                  img: "infinix.jpg"
                })
              }
            >
              Add to cart
            </button>

            <p className="Popular-name">Infinix x6526 Smart 8</p>
            <p className="Popular-price">$15.00 – $19.00</p>
          </div>
        </div>

        <button className="see-all-btn">See all</button>
      </section>

      {/* TRENDING CASES HERO */}
      <section className="center">
        <div className="cases-hero">
          <div className="cases-content">
            <p className="sub">Starting from $9.99</p>
            <h1 className="title">TRENDING CASES & COVERS</h1>
            <a href="#" className="shop-btn">
              Shop now
            </a>
          </div>
        </div>
      </section>

      {/* FINAL SALE SECTION (STATIC 4 ITEMS — NO SLIDER) */}
      <section className="sale-section">
        <h2 className="sale-title">On sale</h2>

        <div className="sale-grid">
          {saleSlides.map((p, index) => (
            <div className="sale-card" key={index}>
              <div className="sale-badges">
                <span className="sale-badge sale-discount">{p.discount}</span>
                <span className="sale-badge sale-new">New</span>
                <span className="sale-badge sale-flash">On sale!</span>
              </div>

              <img src={p.img} className="sale-img" alt={p.name} />
              <h3 className="sale-name">{p.name}</h3>

              <div className="sale-price-box">
                <span className="sale-price-new">{p.price}</span>
                {p.old && <span className="sale-price-old">{p.old}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Section1;
