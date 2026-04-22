import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
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
  }
];

const Products = () => {
  const { addToCart } = useCart();

  return (
    <section id="shop" className="products-section">
      <div className="products-header reveal">
        <p className="products-subtitle">Fresh Sounds</p>
        <h2 className="products-title">New Arrivals</h2>
      </div>
      
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={product.id} className={`product-card-wrapper reveal reveal-delay-${index + 1}`}>
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <button className="add-to-cart-overlay" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
              {index === 2 && (
                <button className="carousel-next-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="black"/>
                    <path d="M10 8L14 12L10 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
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

export default Products;
