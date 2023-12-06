/*import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link de React Router
import './styles/Sidebar.css'; // Importa el archivo de estilos CSS

function Sidebar() {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>Tu Sidebar</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;*/

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css';
import faq from './faq.js';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <nav id="sidebar" className={isSidebarOpen ? 'open' : ''}>
        <div className="sidebar-header">
          <h3>Tu Sidebar</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/faq">¿Quienes Somos?</Link>
          </li>
          <li>
            <Link to="/direccion">Dirección</Link>
          </li>
          <li>
            <Link to="/reporte">Reporte</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;*/

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css';
import FAQ from './faq.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
    <div>
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <nav id="sidebar" className={`faq ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Tu Sidebar</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/faq" element={<FAQ/>}>¿Quienes Somos?</Link>
          </li>
          <li>
            <Link to="/direccion">Dirección</Link>
          </li>
          <li>
            <Link to="/reporte">Reporte</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
    </BrowserRouter>
  );
}

export default Sidebar;*/


// Sidebar.js //<Reporte />
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css';

function Sidebar({ isUsuarioAutenticado }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <nav id="sidebar" className={isSidebarOpen ? 'open' : ''}>
        <div className="sidebar-header">
          <h3>Menu de Opciones</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/faq">¿Quienes Somos?</Link>
          </li>
          <li>
            <Link to="/direccion">Dirección</Link>
          </li>
          <li>
              <Link to="/reporte">Reporte</Link>
            </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;




/*
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>

{isUsuarioAutenticado && (
            <li>
              <Link to="/reporte">Reporte</Link>
            </li>
          )}

*/