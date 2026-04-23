import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MessageCircle, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="site-footer reveal">
      <div className="footer-top-grid">
        {/* Column 1: Join the Community */}
        <div className="footer-col-community">
          <h2 className="footer-brand-title">Join the<br />Community</h2>
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
            <img src="data:image/png;base64,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" alt="Mastercard" />
          </div>
          <div className="payment-icon">
            <img src="data:image/png;base64,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" alt="Visa" />
          </div>
          <div className="payment-icon">
            <img src="data:image/png;base64,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" alt="RuPay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
