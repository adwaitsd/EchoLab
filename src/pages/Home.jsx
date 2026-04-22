import React from 'react';
import Hero from '../components/Hero';
import SpecialPromotions from '../components/SpecialPromotions';
import Products from '../components/Products';

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Products />
      <SpecialPromotions />
    </div>
  );
};

export default Home;
