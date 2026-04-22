import React from 'react';
import { Link } from 'react-router-dom';

const SpecialPromotions = () => {
  return (
    <section className="promotions-section">
      <div className="promotions-container reveal">
        <div className="promotions-bg">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2000&auto=format&fit=crop" 
            alt="Headphones Promotion Background" 
            className="promotions-img"
          />
        </div>
        <div className="promotions-card reveal reveal-delay-2">
          <p className="promotions-subtitle">Special Promotions</p>
          <h2 className="promotions-title">Limited Time<br/>Offers</h2>
          <Link to="/shop" className="btn-primary">Shop Now</Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialPromotions;
