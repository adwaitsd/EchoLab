import React from 'react';

const About = () => {
  return (
    <div className="page-container" style={{backgroundColor: '#050505', color: '#fff'}}>
      
      <section className="about-hero">
        <div className="about-hero-content reveal">
          <h1 className="about-title">The Story<br/>Behind the Sound</h1>
          <p className="about-subtitle">We don't just make headphones. We craft experiences.</p>
        </div>
      </section>

      <section className="about-story-section">
        <div className="about-story-grid">
          <div className="about-story-image-wrapper reveal">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop" 
              alt="Studio Engineers" 
              className="about-story-image"
            />
          </div>
          <div className="about-story-text reveal reveal-delay-1">
            <h2>Born in a Basement. <br/>Built for the World.</h2>
            <p>
              It all started in 2015 when two audio engineers, frustrated by the lack of affordable high-fidelity gear, decided to take matters into their own hands. Armed with soldering irons and a relentless obsession with perfect acoustics, they began building prototypes in a cramped basement.
            </p>
            <p>
              Our philosophy was simple: uncompromised sound should not be a luxury. We stripped away the gimmicks, focused heavily on custom driver technology, and sourced premium materials to create our first pair of studio monitors. The response from the audiophile community was overwhelming.
            </p>
            <p>
              Today, EchoLab is recognized globally as a pioneer in acoustic engineering. Whether you are a multi-platinum producer or a daily commuter, our mission remains the same: to bring you closer to your music.
            </p>
          </div>
        </div>
      </section>

      <section className="about-vision-section reveal">
        <div className="vision-grid">
          <div className="vision-card">
            <h3>Our Mission</h3>
            <p>To democratize high-fidelity sound through innovative engineering.</p>
          </div>
          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>A world where every beat and lyric is felt exactly as the artist intended.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
