import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MessageCircle, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="site-footer reveal">
      <div className="footer-top-grid">
        {/* Column 1: Join the Community */}
        <div className="footer-col-community">
          <h2 className="footer-brand-title">Join the<br/>Community</h2>
          <p className="footer-community-desc">
            What it means to be an audiophile. How we choose what we carry. Upcoming events. And the occasional product recommendation we couldn't keep to ourselves.
          </p>
          <div className="footer-email-input">
            <input type="email" placeholder="E-mail" />
            <button className="email-submit-btn">
              <ChevronRight size={16} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Column 2: SHOP */}
        <div className="footer-col-links">
          <h4 className="footer-col-title">SHOP</h4>
          <ul>
            <li><Link to="/shop">In-Ears</Link></li>
            <li><Link to="/shop">Headphones</Link></li>
            <li><Link to="/shop">DACs & Amps</Link></li>
            <li><Link to="/shop">Hi-Res Audio Players</Link></li>
            <li><Link to="/shop">Speakers</Link></li>
            <li><Link to="/shop">Accessories</Link></li>
          </ul>
        </div>

        {/* Column 3: ABOUT */}
        <div className="footer-col-links">
          <h4 className="footer-col-title">ABOUT</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">Meet the Team</Link></li>
            <li><Link to="/about">Artists</Link></li>
            <li><Link to="/about">Careers</Link></li>
            <li><Link to="/about">Terms & Conditions</Link></li>
            <li><Link to="/about">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: HELP */}
        <div className="footer-col-links">
          <h4 className="footer-col-title">HELP</h4>
          <ul>
            <li><Link to="/faq">Help Center</Link></li>
            <li><Link to="/faq">Track Your Order</Link></li>
            <li><Link to="/faq">Shipping & Delivery</Link></li>
            <li><Link to="/faq">Returns & Exchanges</Link></li>
            <li><Link to="/faq">Warranty & Service</Link></li>
            <li><Link to="/contact">Become a Dealer</Link></li>
            <li><Link to="/contact">Dealer Login</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 5: COMMUNITY */}
        <div className="footer-col-links">
          <h4 className="footer-col-title">COMMUNITY</h4>
          <ul>
            <li><Link to="/about">Headphone Connect</Link></li>
            <li><Link to="/about">Visit the Experience Studio</Link></li>
            <li><Link to="/about">The Indian Audiophile Forum</Link></li>
            <li><Link to="/about">The Audiophile Manifesto</Link></li>
            <li><Link to="/faq">Beginner's Guides</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-social-section">
        <a href="#"><Facebook size={22} fill="#333" color="#333" /></a>
        <a href="#"><Twitter size={22} fill="#333" color="#333" /></a>
        <a href="#"><Instagram size={22} color="#333" /></a>
        <a href="#"><Youtube size={22} color="#333" /></a>
        <a href="#"><MessageCircle size={22} color="#333" /></a>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-text">
          <p>© 2026, EchoLab</p>
          <p>Owned, Operated & Funded by Proud Indians.</p>
          <p>Everything on this website has been made with a lot of love and hard work. If you copy anything we will hunt you down. We mean it.</p>
        </div>
        <div className="footer-payment-icons">
          <div className="payment-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" />
          </div>
          <div className="payment-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" />
          </div>
          <div className="payment-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/200px-Rupay-Logo.png" alt="RuPay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
