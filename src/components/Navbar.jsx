import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onOpenCart }) => {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-brand" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMobileMenu}>
          EchoLab
        </Link>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <li><Link to="/shop" onClick={closeMobileMenu}>Shop All</Link></li>
        <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
        <li><Link to="/faq" onClick={closeMobileMenu}>FAQ</Link></li>
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
      </ul>

      <div className="nav-right">
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} color="#000" /> : <Menu size={24} color="#000" />}
        </button>
        <div className="cart-icon-wrapper" onClick={() => { onOpenCart(); closeMobileMenu(); }}>
          {cartCount}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
