import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
return (
<footer className="footer">
<div className="footer-container">
<div className="footer-col">
<h3>ORJI COMMUNICATION</h3>
<p>
Your one‑stop shop for premium phones, accessories, cases and smart
gadgets.
</p>
</div>


<div className="footer-col">
<h4>Shop</h4>
<ul>
<li><Link to="/">Phones</Link></li>
<li><Link to="/case-covers">Cases & Covers</Link></li>
<li><Link to="/cables">Cables</Link></li>
<li><Link to="/">Chargers</Link></li>
</ul>
</div>


<div className="footer-col">
<h4>Support</h4>
<ul>
<li><a href="#">Help Center</a></li>
<li><a href="#">Returns</a></li>
<li><a href="#">Warranty</a></li>
<li><a href="#">Contact Us</a></li>
</ul>
</div>


<div className="footer-col">
<h4>Newsletter</h4>
<p>Subscribe to get special offers & updates</p>
<div className="footer-newsletter">
<input type="email" placeholder="Your email" />
<button>Subscribe</button>
</div>
</div>
</div>


<div className="footer-bottom">
<p>© {new Date().getFullYear()} Z‑Store. All rights reserved.</p>
</div>
</footer>
);
};


export default Footer;