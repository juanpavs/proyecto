import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'bootstrap-icons-react';
import { useNavigate } from 'react-router-dom';
import './styles/Topbar.css';
import './styles/ModoNocturno.css';
import './styles/NotificacionBadge.css';
import { getRecoger } from '../api/contenedor.api.js';

function Topbar() {
  const [state, setState] = useState({
    recoger: ""
  });
  const [menu, setMenu] = useState(false);
  const [contadorNotificaciones, setContadorNotificaciones] = useState(0);
  const [modoNocturno, setModoNocturno] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const manejarClickNotificaciones = async () => {
    try {
      const recogerExito = await getRecoger(1);
      console.log(recogerExito.data);
      if(recogerExito.data){
        setContadorNotificaciones(recogerExito.data);
        alert(`¡Recoge las pilas! Tienes ${contadorNotificaciones} notificaciones para recoger las pilas.`);
      }else{
        console.log("No llego al rango de recolección");
      }
    } catch (error) {
      console.error(error);
    }   
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const toggleModoNocturno = () => {
    setModoNocturno(!modoNocturno);
    if (!modoNocturno) {
      document.body.classList.add('modo-nocturno');
      document.body.classList.remove('modo-claro');
    } else {
      document.body.classList.remove('modo-nocturno');
      document.body.classList.add('modo-claro');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {}, []);

  useEffect(() => {}, [contadorNotificaciones]);

  return (
    <header className={`Topbar ${modoNocturno ? 'modo-nocturno' : ''}`}>
      <button onClick={manejarClickNotificaciones} className='Topbar-button'>
        <span onChange={handleChange} className="notification-badge" onClick={manejarClickNotificaciones}>{contadorNotificaciones}</span>
        <Bell />
      </button>
      
      <button onClick={toggleMenu} className='Topbar-button-b'>
        <svg className="Topbar-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
        </svg> 
      </button>

      <button onClick={toggleMenu} className='Topbar-button-c'>
        <svg className="Topbar-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      </button>

      <nav className={`Topbar-nav.b ${menu ? 'isActive' : ''}`}>
        <ul className='Topbar-ul.b'>
          <li className='Topbar-il.b'>
            <Link to="" className='Topbar-b'>
              Perfil
            </Link>
          </li>
          <li className='Topbar-il.b'>
            <Link to="" className='Topbar-b'>
              Ajustes
            </Link>
          </li>
          <li className='Topbar-il.b'>
            <button className='Topbar-b' onClick={toggleModoNocturno}>
              {modoNocturno ? 'Modo Claro' : 'Modo Nocturno'}
            </button>
          </li>
        </ul> 
      </nav>

      <nav className={`Topbar-nav.c ${menu ? 'isActive' : ''}`}>
        <ul className='Topbar-ul.c'>
        <li className='Topbar-il.c'>
            <Link to="/badges/empresa" className='Topbar-c'>
              Mi Cuenta
            </Link>
          </li>
          <li className='Topbar-il.c'>
              <button onClick={logout} className='Topbar-c'>
                Cerrar Sesión
              </button>
            </li> 
        </ul>
      </nav>
    </header>
  );
}

export default Topbar;
