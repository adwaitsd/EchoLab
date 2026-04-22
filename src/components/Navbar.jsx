import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = ({ onOpenCart }) => {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand" style={{textDecoration: 'none', color: 'inherit'}}>
        EchoLab
      </Link>

      <ul className="nav-links">
        <li><Link to="/shop">Shop All</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-right">
        <div className="cart-icon-wrapper" onClick={onOpenCart}>
          {cartCount}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
