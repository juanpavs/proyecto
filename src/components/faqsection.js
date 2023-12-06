import React, { useState } from 'react';
import './styles/FAQSection.css';

function FAQSection({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-section ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={toggleSection}>
        {question}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

export default FAQSection;
