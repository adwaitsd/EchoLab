import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee on all our products. If you are not completely satisfied, you can return the product for a full refund."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. Shipping costs and delivery times vary depending on the destination."
  },
  {
    question: "How long is the warranty?",
    answer: "All EchoLab products come with a standard 1-year warranty covering any manufacturing defects."
  },
  {
    question: "Can I try the headphones before buying?",
    answer: "Yes, you can visit our physical store in Navi Mumbai to test out any of our audio gear before making a purchase."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-header reveal">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know about our products and services.</p>
      </div>
      
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item reveal reveal-delay-${(index % 3) + 1}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question-container">
              <h3 className="faq-question">{faq.question}</h3>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <div className="faq-answer-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
