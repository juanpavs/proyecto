/*import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/TopBarButton.css';

function TopBarButton({ icon, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`top-bar-button ${isOpen ? 'open' : ''}`}>
      <div className="button" onClick={toggleContent}>
        <FontAwesomeIcon icon={icon} size="lg" />
        <span>{title}</span>
      </div>
      {isOpen && <div className="button-content left">{content}</div>}
    </div>
  );
}

export default TopBarButton;*/

/*import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/TopBarButton.css';

function TopBarButton({ icon, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`top-bar-button ${isOpen ? 'open' : ''}`}>
      <div className="button" onClick={toggleContent}>
        <FontAwesomeIcon icon={icon} size="lg" />
        <span>{title}</span>
      </div>
      {isOpen && <div className="button-content left">{content}</div>}
    </div>
  );
}

export default TopBarButton;*/

/*import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
//import './TopBarButton.css';
import './styles/TopBarButton.css';

const TopBarButton = ({ icon, contents }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topbar-button">
      <button onClick={toggleDropdown}>
        <FontAwesomeIcon icon={icon} size="lg" />
        <FontAwesomeIcon icon={faAngleDown} className="arrow-icon" />
      </button>
      {isOpen && (
        <div className="dropdown">
          {contents.map((content, index) => (
            <div key={index} className="dropdown-item">
              {content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

TopBarButton.propTypes = {
  icon: PropTypes.object.isRequired, 
  contents: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TopBarButton;*/


/*

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './styles/TopBarButton.css';

function TopBarButton({ icon, content, options }) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <div className="top-bar-button">
      <button onClick={toggleOptions}>
      <FontAwesomeIcon icon={icon} size="lg" />
      <FontAwesomeIcon icon={faAngleDown} className="arrow-icon" />
        {content}
      </button>
      {isOptionsOpen && (
        <div className="options">
          {options.map((option, index) => (
            <div key={index} onClick={option.onClick}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopBarButton;*/

/*

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import BadgesEmpresa from "../pages/BadgesEmpresa.js";

function TopBarButton({ icon, content, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="top-bar-button">
      <div className="button" onClick={toggleOptions}>
      <FontAwesomeIcon icon={icon} size="lg" />
        {icon}
        <span>{content}</span>
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option, index) => (
            /*<Link key={index} to={"/badges/empresa"}>
              {option.label}
            </Link>
            <Link key={index} to={"/badges/empresa"}>
            <div className="top-bar-option">
              <FontAwesomeIcon icon={option.icon} size="lg" />
              <span className="top-bar-option-title">{option.title}</span>
            </div>
          </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopBarButton;*/

/*import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function TopBarButton({ icon, title, to }) {
  return (
    <Link to={to}>
      <div className="top-bar-option">
        <FontAwesomeIcon icon={icon} size="lg" />
      </div>
    </Link>
  );
}

export default TopBarButton;*/

/*import React, { useState } from 'react';
import './styles/TopBarButton.css';

function TopBarButton({ icon, options, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`top-bar-button ${isOpen ? 'open' : ''}`} onClick={toggleButton}>
      <div className="button-icon">
        {icon}
      </div>
      {isOpen && <div className="button-content">{content}</div>}
    </div>
  );
}

export default TopBarButton;*/

/*
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TopBarButton({ icon, contents, onClick }) {
  return (
    <div className="top-bar-button" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <div className="dropdown">
        {contents.map((content, index) => (
          <div key={index}>{content}</div>
        ))}
      </div>
    </div>
  );
}

export default TopBarButton;*/

/*
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TopBarButton({ icon, contents, onClick }) {
  return (
    <div className="top-bar-button" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <div className="dropdown">
        {contents.map((content, index) => (
          <div key={index}>{content}</div>
        ))}
      </div>
    </div>
  );
}

export default TopBarButton;*/


// TopBarButton.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TopBarButton({ icon, contents }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="top-bar-button" onClick={handleButtonClick}>
      <FontAwesomeIcon icon={icon} />
      {isDropdownOpen && (
        <div className="dropdown">
          {contents.map((content, index) => (
            <div key={index}>{content}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopBarButton;

