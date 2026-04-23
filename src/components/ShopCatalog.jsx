import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const allProducts = [
  { id: 1, name: 'High-Fidelity Headphones', price: '₹2,499', image: '/Product1.jpg', category: 'Headphones' },
  { id: 2, name: 'Comfort Fit In-Ears', price: '₹8,999', image: '/Product2.jpg', category: 'In-Ears' },
  { id: 3, name: 'Noise-Cancelling Headphones', price: '₹14,999', image: '/Product3.png', category: 'Headphones' },
  { id: 4, name: 'Studio Pro Monitors', price: '₹19,999', image: 'https://images.unsplash.com/photo-1737885197946-6d9d79dade89?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Headphones' },
  { id: 5, name: 'EchoBuds Sport Water-Resistant', price: '₹3,499', image: 'https://images.unsplash.com/photo-1636099362460-5717f3be17cf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'In-Ears' },
  { id: 6, name: 'Classic Over-Ear Leather', price: '₹11,499', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop', category: 'Headphones' },
  { id: 7, name: 'BassBoost Wireless Earbuds', price: '₹4,299', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop', category: 'In-Ears' },
  { id: 8, name: 'Audiophile Open-Back', price: '₹24,999', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop', category: 'Headphones' },
  { id: 9, name: 'Gaming Headset Pro', price: '₹7,999', image: 'https://images.unsplash.com/photo-1610041321327-b794c052db27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Headphones' },
  { id: 10, name: 'Minimalist Wireless Pods', price: '₹5,999', image: 'https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'In-Ears' },

  // New Categories Added Below
  { id: 11, name: 'Desktop Tube Amplifier (DAC)', price: '₹18,499', image: 'https://images.unsplash.com/photo-1762941742630-fd0776b689b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERlc2t0b3AlMjBUdWJlJTIwQW1wbGlmaWVyJTIwKERBQyl8ZW58MHx8MHx8fDA%3D', category: 'DACs & Amps' },
  { id: 12, name: 'Portable Mini DAC', price: '₹4,999', image: 'https://images.unsplash.com/photo-1549822531-d99bcfebc360?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBvcnRhYmxlJTIwTWluaSUyMERBQ3xlbnwwfHwwfHx8MA%3D%3D', category: 'DACs & Amps' },

  { id: 13, name: 'Echo FLAC Audio Player', price: '₹22,999', image: 'https://images.unsplash.com/photo-1687166456279-022bf8d3ae6b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEF1ZGlvJTIwUGxheWVyfGVufDB8fDB8fHww', category: 'Hi-Res Audio Players' },
  { id: 14, name: 'Pocket Hi-Res DAP', price: '₹12,499', image: 'https://images.unsplash.com/photo-1632843184665-1ee10c03d606?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEF1ZGlvJTIwUGxheWVyfGVufDB8fDB8fHww', category: 'Hi-Res Audio Players' },

  { id: 15, name: 'Bookshelf Stereo Speakers', price: '₹29,999', image: 'https://plus.unsplash.com/premium_photo-1683141496040-eeef9702269f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFN0ZXJlbyUyMFNwZWFrZXJzfGVufDB8fDB8fHww', category: 'Speakers' },
  { id: 16, name: 'Portable Bluetooth Speaker', price: '₹5,499', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop', category: 'Speakers' },

  { id: 17, name: 'Premium Braided Cable', price: '₹1,299', image: 'https://images.unsplash.com/photo-1592474339880-1de54f6dd765?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fEJyYWlkZWQlMjBDYWJsZXxlbnwwfHwwfHx8MA%3D%3D', category: 'Accessories' },
  { id: 18, name: 'Memory Foam Earpads', price: '₹999', image: 'https://plus.unsplash.com/premium_photo-1732485719767-172940ca7e00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxNZW1vcnklMjBGb2FtJTIwRWFycGFkc3xlbnwwfHwwfHx8MA%3D%3D', category: 'Accessories' },
  { id: 19, name: 'Headphone Display Stand', price: '₹2,499', image: 'https://images.unsplash.com/photo-1646771032150-6243ff3aea4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGVhZHBob25lJTIwU3RhbmR8ZW58MHx8MHx8fDA%3D', category: 'Accessories' },
];

const CATEGORIES = ['All', 'In-Ears', 'Headphones', 'DACs & Amps', 'Hi-Res Audio Players', 'Speakers', 'Accessories'];

const ShopCatalog = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Give React a tick to render the new DOM elements before observing them
    setTimeout(() => {
      document.querySelectorAll('.shop-grid .reveal').forEach(el => {
        // Remove 'visible' so it re-animates every time you switch category
        el.classList.remove('visible');
        observer.observe(el);
      });
    }, 50);

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section className="shop-catalog-section">
      <div className="shop-header reveal">
        <h1 className="shop-title">Shop All Products</h1>
        <p className="shop-subtitle">Discover our entire collection of premium audio gear.</p>
      </div>

      <div className="shop-filter-bar reveal">
        {CATEGORIES.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid shop-grid">
        {filteredProducts.map((product, index) => (
          <div key={product.id} className={`product-card-wrapper reveal reveal-delay-${(index % 3) + 1}`}>
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <button className="add-to-cart-overlay" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopCatalog;
