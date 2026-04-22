import React from 'react';
import { useCart } from '../context/CartContext';

const allProducts = [
  {
    id: 1,
    name: 'Comfort Fit In-Ears',
    price: '₹2,499',
    image: '/Product1.jpg',
  },
  {
    id: 2,
    name: 'Wireless High-Fidelity Headphones',
    price: '₹8,999',
    image: '/Product2.jpg',
  },
  {
    id: 3,
    name: 'Noise-Cancelling Headphones',
    price: '₹14,999',
    image: '/Product3.png',
  },
  {
    id: 4,
    name: 'Studio Pro Monitors',
    price: '₹19,999',
    image: 'https://images.unsplash.com/photo-1737885197946-6d9d79dade89?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'EchoBuds Sport Water-Resistant',
    price: '₹3,499',
    image: 'https://images.unsplash.com/photo-1636099362460-5717f3be17cf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Classic Over-Ear Leather',
    price: '₹11,499',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'BassBoost Wireless Earbuds',
    price: '₹4,299',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Audiophile Open-Back',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Gaming Headset Pro',
    price: '₹7,999',
    image: 'https://images.unsplash.com/photo-1610041321327-b794c052db27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    name: 'Minimalist Wireless Pods',
    price: '₹5,999',
    image: 'https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11,
    name: 'DJ Mixing Headphones',
    price: '₹16,499',
    image: 'https://images.unsplash.com/photo-1528148343865-51218c4a13e6?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 12,
    name: 'Kids Safe Volume Earphones',
    price: '₹1,999',
    image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1000&auto=format&fit=crop',
  }
];

const ShopCatalog = () => {
  const { addToCart } = useCart();

  return (
    <section className="shop-catalog-section">
      <div className="shop-header reveal">
        <h1 className="shop-title">Shop All Products</h1>
        <p className="shop-subtitle">Discover our entire collection of premium audio gear.</p>
      </div>

      <div className="products-grid shop-grid">
        {allProducts.map((product, index) => (
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
