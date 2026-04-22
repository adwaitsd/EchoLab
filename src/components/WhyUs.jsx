import React from 'react';
import { Sparkles, Activity, Lightbulb } from 'lucide-react';

const offerings = [
  {
    id: 1,
    icon: <Sparkles size={32} color="#ffffff" strokeWidth={1} />,
    title: 'Wide Product Range',
    description: 'Explore a diverse selection of noise-cancelling headphones, premium in-ear monitors, and Bluetooth speakers.'
  },
  {
    id: 2,
    icon: <Activity size={32} color="#ffffff" strokeWidth={1} />,
    title: 'Hands-On Experience',
    description: 'Engage in sound demos and hands-on testing to find the perfect audio gear for your preferences.'
  },
  {
    id: 3,
    icon: <Lightbulb size={32} color="#ffffff" strokeWidth={1} />,
    title: 'Expert Guidance',
    description: 'Our knowledgeable staff provides detailed insights into audio technology, ensuring you make an informed choice.'
  }
];

const WhyUs = () => {
  return (
    <section id="about" className="whyus-section">
      <div className="whyus-header reveal">
        <p className="whyus-subtitle">Our Offerings</p>
        <h2 className="whyus-title">Why Us?</h2>
        <p className="whyus-desc">We stand out for our commitment to quality and innovation.</p>
      </div>
      
      <div className="whyus-cards">
        {offerings.map((item, index) => (
          <div key={item.id} className={`whyus-card reveal reveal-delay-${index + 1}`}>
            <div className="whyus-icon">
              {item.icon}
            </div>
            <div className="whyus-card-content">
              <h3 className="whyus-card-title">{item.title}</h3>
              <p className="whyus-card-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
