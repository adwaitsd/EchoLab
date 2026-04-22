import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
      >
        <source src="/Hero1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Discover True<br />Sound
        </h1>
        <p className="hero-subtitle">
          Discover the leading audio gear tailored for every music lover
        </p>
        <a href="#shop" className="btn-primary">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
