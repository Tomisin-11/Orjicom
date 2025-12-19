// Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cartItems = [], setCartItems = () => {} }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  // Clear the cart
  const clearCart = () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      setCartItems([]);
    }
  };

  // Remove a specific item by index
  const removeItem = (indexToRemove) => {
    setCartItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  // Total quantity of items
  const totalItems = cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  // Total price
  const totalPrice = cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2) || "0.00";

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "visible" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <nav className="navbar">
        {/* Hamburger menu */}
        <button className="menu-toggle" onClick={() => setMenuOpen(prev => !prev)}>
          {menuOpen ? "✖" : "☰"}
        </button>

        <div className="logo" onClick={() => navigate("/")}>ORJI COMMUNICATION</div>

        {/* Navigation links */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/phones" onClick={() => setMenuOpen(false)}>Phones</Link></li>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Accessories</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* Cart icon */}
        <div className="cart-wrapper" onClick={() => setCartOpen(prev => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" fill="#ffffffff" viewBox="0 -960 960 960">
            <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/>
          </svg>

          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>

        {/* Cart dropdown */}
        {cartOpen && (
          <div className="cart-dropdown">
            <button className="cart-close-btn" onClick={() => setCartOpen(false)}>✖</button>

            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul className="cart-scroll">
                  {cartItems.map((item, index) => (
                    <li key={index} className="cart-item">
                      <img src={item.img} alt={item.name} className="cart-item-img" />
                      <div className="cart-item-info">
                        <span className="cart-item-name">{item.name}</span>
                        <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                        <span className="cart-item-quantity">Quantity: {item.quantity}</span>
                      </div>
                      <button className="cart-item-remove" onClick={() => removeItem(index)}>🗑️</button>
                    </li>
                  ))}
                </ul>

                <div className="cart-total">
                  <span>Total price:</span>
                  <span>${totalPrice}</span>
                </div>

                <div className="cart-buttons">
                  <button className="checkout-btn">Checkout</button>
                  <button className="goto-cart-btn" onClick={() => navigate("/cart")}>Go to cart</button>
                  <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
                </div>
              </>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
