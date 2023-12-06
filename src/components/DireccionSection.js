/*import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/DireccionSection.css';

function DireccionSection({ question, answer, imagePath }){
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`direccion-section ${isOpen ? 'open' : ''}`}>
      <div className="direccion-question" onClick={toggleSection}>
        {question}
      </div>
      {isOpen && (
        <div className="direccion-answer">
          <img src={imagePath} alt="Panorámica UCP" className="direccion-image" />
          <div className="direccion-text">
            <p>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

DireccionSection.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
};

export default DireccionSection;

import React, { useState } from 'react';
import './styles/DireccionSection.css';

function DireccionSection({ question, answer, imagePath }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`direccion-section ${isOpen ? 'open' : ''}`}>
      <div className="direccion-question" onClick={toggleSection}>
        {question}
      </div>
      {isOpen && (
        <div className="direccion-answer">
          <img src={imagePath} alt="Panorámica UCP" className="direccion-image" />
          <div className="direccion-text">
            <p>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DireccionSection;*/

/*
import React, { useState } from 'react';
import './styles/DireccionSection.css';

function DireccionSection({ question, answer, imagePath }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`direccion-section ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <img src={imagePath} alt="Panorámica UCP" className="direccion-image" />
      )}
      <div className="direccion-question" onClick={toggleSection}>
        {question}
      </div>
      <div className={`direccion-text ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default DireccionSection;*/

/*
import React, { useState } from 'react';
import './styles/DireccionSection.css';

function DireccionSection({ question, answer, imagePath }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="direccion-section">
      <div className="direccion-image-container">
        <img src={imagePath} alt="Panorámica UCP" className="direccion-image" />
      </div>
      <div className={`direccion-text ${isOpen ? 'open' : ''}`}>
        <div className="direccion-question" onClick={toggleSection}>
          {question}
        </div>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default DireccionSection;*/

// DireccionSection.js
import React, { useState } from 'react';
import './styles/DireccionSection.css';

function DireccionSection({ question, answer, imagePath }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`direccion-section ${isOpen ? 'open' : ''}`}>
      <div className="direccion-image-container">
        <img src={imagePath} alt="Panorámica UCP" className="direccion-image" />
      </div>
        <div className="direccion-question" onClick={toggleSection}>
          {question}
        {isOpen && <p className="direccion-answer">{answer}</p>}
      </div>
    </div>
  );
}

export default DireccionSection;







