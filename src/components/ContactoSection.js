import React, { useState } from 'react';
import './styles/ContactoSection.css';

function ContactoSection({ question, answer }){
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`contacto-section ${isOpen ? 'open' : ''}`}>
      <div className="contacto-question" onClick={toggleSection}>
        {question}
      </div>
      {isOpen && <div className="contacto-answer">{answer}</div>}
    </div>
  );
}

export default ContactoSection;