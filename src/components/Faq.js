// src/pages/Faq.js
import React, { useState } from 'react';
import './Faq.css';

const faqs = [
  {
    question: 'What is Certificate Dunia?',
    answer:
      'Certificate Dunia is an online platform that allows you to create, download, and email professional certificates instantly—for free.',
  },
  {
    question: 'Is Certificate Dunia really free?',
    answer:
      'Yes! Our basic certificate creation features are completely free to use. No hidden charges.',
  },
  {
    question: 'Can I customize the certificate design?',
    answer:
      'Absolutely. You can choose templates, edit details, and personalize your certificates to fit your branding or event.',
  },
  {
    question: 'Do you store my certificate data?',
    answer:
      'We respect your privacy. Your certificate data is securely processed and not shared with third parties.',
  },
  {
    question: 'How can I contact support?',
    answer:
      'You can reach out to us using the contact form on our website. We typically respond within 24 hours.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Your queries, answered.</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{faq.question}</div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
