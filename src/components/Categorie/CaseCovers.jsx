import "../Categorie/Styles/CaseCovers.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";

const CaseCovers = ({ addToCart, cartItems, setCartItems }) => {

  // -------------------------
  // Accordion JS for mobile
  // -------------------------
  useEffect(() => {
    const sidebars = document.querySelectorAll(".sidebar");

    sidebars.forEach((sidebar) => {
      const btn = sidebar.querySelector(".accordion-btn");

      if (btn) {
        btn.addEventListener("click", () => {
          sidebar.classList.toggle("active");
        });
      }
    });
  }, []);

  return (
    <section>
     

      <div className="collection-page">

        {/* SIDEBAR */}
        <div className="Aside">

          <aside className="sidebar">
            <h2  >Collections</h2>

            <div className="accordion-content">
              <ul>
                           <li className="Red">Cases & Cover</li>
                            <Link className="None" to="/Cables"><li  >Cables</li> </Link>
 
                
                <li>Mobile chargers</li>
                <li>Pop sockets</li>
                <li>Mobile holders</li>
                <li>Screen Guards</li>
                <li>Selfie sticks</li>
                <li>VR headsets</li>
                <li>Mobile lenses</li>
                <li>Mobile Enhancement</li>
              </ul>
            </div>
          </aside>

          <aside className="sidebar">
            <h2>Product Types</h2>

            <div className="accordion-content">
              <ul>
                <li>Electronic Equipment</li>
                <li>Mobile Accessories</li>
                <li>Mobile Phone Cases</li>
                <li>MP3 Player</li>
                <li>Smartphones</li>
              </ul>
            </div>
          </aside>

          <aside className="sidebar">
            <h2>Product Vendor</h2>

            <div className="accordion-content">
              <ul>
                <li>Nigeria, Lagos, Ikotun</li>
              </ul>
            </div>
          </aside>

        </div>

        {/* PRODUCTS */}
        <main className="products-container">

          <div className="topbar">
            <h1>Cases & Covers</h1>
            <span className="item-count">9 items</span>

            <select className="sort-select">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* PRODUCT GRID 1 */}
          <div className="products-grid">

            {/* 1 */}
            <div className="product-card">
              <div className="badges">
                <span className="badge new">New</span>
                <span className="badge out">Outstock</span>
              </div>

              <div className="image-box">
                <img src="Case1.jpg" alt="" />
                <button
                  className="add-cart"
                  onClick={() =>
                    addToCart({
                      name: "Premium Ring Case",
                      price: 19.99,
                      img: "Case1.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>

              <div className="product-info">
                <p className="title">Premium Ring Case</p>
                <p className="price">$19.99</p>
              </div>
            </div>

            {/* 2 */}
            <div className="product-card">
              <div className="badges">
                <span className="badge sale">-6%</span>
                <span className="badge new">New</span>
              </div>

              <div className="image-box">
                <img src="Case10.jpg" alt="" />
                <button
                  className="add-cart"
                  onClick={() =>
                    addToCart({
                      name: "Matte Pink Case",
                      price: 14.99,
                      img: "Case10.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>

              <div className="product-info">
                <p className="title">Matte Pink Case</p>
                <p className="price">$14.99</p>
              </div>
            </div>

            {/* 3 */}
            <div className="product-card">
              <div className="badges">
                <span className="badge sale">-42%</span>
                <span className="badge new">New</span>
              </div>

              <div className="image-box">
                <img src="Case3.jpg" alt="" />
                <button
                  className="add-cart"
                  onClick={() =>
                    addToCart({
                      name: "Shockproof Clear Case",
                      price: 9.99,
                      img: "Case3.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>

              <div className="product-info">
                <p className="title">Shockproof Clear Case</p>
                <p className="price">$9.99</p>
              </div>
            </div>

          </div>

          {/* --- GRID 2 --- */}
          <div className="products-grid">

            <div className="product-card">
              <div className="badges">
                <span className="badge new">New</span>
                <span className="badge out">Outstock</span>
              </div>

              <div className="image-box">
                <img src="Case6.jpg" alt="" />
                <button
                  className="add-cart"
                  onClick={() =>
                    addToCart({
                      name: "Premium Ring Case 2",
                      price: 19.99,
                      img: "Case6.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>

              <div className="product-info">
                <p className="title">Premium Ring Case</p>
                <p className="price">$19.99</p>
              </div>
            </div>

            <div className="product-card">
              <div className="badges">
                <span className="badge sale">-6%</span>
                <span className="badge new">New</span>
              </div>

              <div className="image-box">
                <img src="Case2.jpg" alt="" />
                <button
                  className="add-cart"
                  onClick={() =>
                    addToCart({
                      name: "Matte Pink Case 2",
                      price: 14.99,
                      img: "Case2.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>

              <div className="product-info">
                <p className="title">Matte Pink Case</p>
                <p className="price">$14.99</p>
              </div>
            </div>

            <div className="product-card">
              <div className="badges">
                <span className="badge sale">-42%</span>
                <span className="badge new">New</span>
              </div>

              <div className="image-box">
                <img src="Case9.jpg" alt="" />
                <button
                  className="add-cart"
                  onClick={() =>
                    addToCart({
                      name: "Shockproof Clear Case 2",
                      price: 9.99,
                      img: "Case9.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>

              <div className="product-info">
                <p className="title">Shockproof Clear Case</p>
                <p className="price">$9.99</p>
              </div>
            </div>

          </div>

          {/* --- GRID 3 --- */}
          <div className="products-grid">

            <div className="product-card">
              <div className="badges">
                <span className="badge new">New</span>
                <span className="badge out">Outstock</span>
              </div>

              <div className="image-box">
                <img src="Case4.jpg" alt="" />
                <button
                  className="add-cart"
                  onClick={() =>
                    addToCart({
                      name: "Premium Ring Case 3",
                      price: 19.99,
                      img: "Case4.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>

              <div className="product-info">
                <p className="title">Premium Ring Case</p>
                <p className="price">$19.99</p>
              </div>
            </div>

            <div className="product-card">
              <div className="badges">
                <span className="badge sale">-6%</span>
                <span className="badge new">New</span>
              </div>

              <div className="image-box">
                <img src="Case5.jpg" alt="" />
                <button
                  className="add-cart"
                  onClick={() =>
                    addToCart({
                      name: "Matte Pink Case 3",
                      price: 14.99,
                      img: "Case5.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>

              <div className="product-info">
                <p className="title">Matte Pink Case</p>
                <p className="price">$14.99</p>
              </div>
            </div>

            <div className="product-card">
              <div className="badges">
                <span className="badge sale">-42%</span>
                <span className="badge new">New</span>
              </div>

              <div className="image-box">
                <img src="Case7.jpg" alt="" />
                <button
                  className="add-cart"
                  onClick={() =>
                    addToCart({
                      name: "Shockproof Clear Case 3",
                      price: 9.99,
                      img: "Case7.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>

              <div className="product-info">
                <p className="title">Shockproof Clear Case</p>
                <p className="price">$9.99</p>
              </div>
            </div>

          </div>

        </main>
      </div>
    </section>
  );
};

export default CaseCovers;
