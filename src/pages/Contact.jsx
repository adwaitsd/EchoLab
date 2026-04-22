import React from 'react';

const Contact = () => {
  return (
    <div className="page-container" style={{backgroundColor: '#000', color: '#fff'}}>
      <section className="contact-page-section">
        <div className="contact-form-container reveal">
          <div className="contact-form-bg">
            <img 
              src="https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2000&auto=format&fit=crop" 
              alt="Abstract Audio Waves" 
            />
            <div className="contact-form-overlay"></div>
          </div>
          
          <div className="contact-content-wrapper">
            <div className="contact-left">
              <p className="contact-form-subtitle">Get in Touch</p>
              <h2 className="contact-form-title">Reach Out to<br/>Us Today</h2>
              
              <div className="contact-abstract-icon">
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="3" fill="white"/>
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                    <g key={i} transform={`rotate(${angle} 50 50)`}>
                      <line x1="50" y1="45" x2="50" y2="15" stroke="white" strokeWidth="1" strokeOpacity="0.4"/>
                      <circle cx="50" cy="12" r="2.5" fill="white"/>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
            
            <div className="contact-right">
              <form className="contact-form-form" onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="1"></textarea>
                </div>
                <button type="submit" className="btn-primary form-submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
