import React from 'react';
import { Instagram, Facebook, Twitter, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        {/* Card 1 */}
        <div className="footer-card brand-card reveal reveal-delay-1">
          <h2 className="footer-brand">EchoLab</h2>
          <div className="social-icons">
            <a href="#" className="social-icon"><Instagram size={18} /></a>
            <a href="#" className="social-icon"><Facebook size={18} /></a>
            <a href="#" className="social-icon"><Twitter size={18} /></a>
            <a href="#" className="social-icon"><Music2 size={18} /></a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="footer-card links-card reveal reveal-delay-2">
          <div className="footer-contact">
            <p>XXXXXXXXX</p>
            <p>info@mysite.com</p>
            <div className="address-spacer"></div>
            <p>Vashi, Navi Mumbai.</p>
            <p>Maharashtra, India</p>
          </div>
          <hr className="footer-divider" />
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Accessibility Statement</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Refund Policy</a>
          </div>
          <hr className="footer-divider" />
        </div>

        {/* Card 3 */}
        <div className="footer-card newsletter-card reveal reveal-delay-3">
          <h3 className="newsletter-title">Join our mailing list</h3>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" required />
            </div>

            <div className="checkbox-wrapper">
              <input type="checkbox" id="subscribe" required />
              <label htmlFor="subscribe">Yes, subscribe me to your newsletter. *</label>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-join">Join</button>
            </div>
          </form>

          <div className="footer-bottom-text">
            <p>© 2026 by EchoLab.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
