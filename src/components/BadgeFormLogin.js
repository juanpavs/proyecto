/*import React, {useEffect, useState} from "react";
import { useParams, useNavigate} from "react-router-dom";
import { useEmpresas } from "../context/EmpresaContext.js";
import {crearEmpresaRequest} from "../api/empresa.api.js";
function BadgeFormLogin(){
    const {getEmpresa} = useEmpresas();
    const { id_empresa } = useParams();
    const [state, setState] = useState({
        nit: "",
        contrasenia: ""
    });
    const navigate = useNavigate();
    //const auth = useAuth();

    /*if(auth.isAuthenticated){
        return //to "/"
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleClick = (e) => {
        console.log("El Inicio de sesion fue exitoso");
        console.log(state);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("El Inicio de sesion fue exitoso");
        console.log(state);
        if(id_empresa !== null && id_empresa !== undefined){
            //await updateEmpresa(id_empresa, state);
            setState({
                nit: "",
                contrasenia: ""
            });
            navigate("/badges/login-empresa");
        }else{
            try {
                const response = await crearEmpresaRequest(state);
                console.log(response);
                setState({
                    nit: "",
                    nombre_empresa: "",
                    contrasenia: "",
                    verifica_contrasenia: ""
                })
            } catch (error) {
                console.error(error);
            }
            navigate("/badges/empresa/new");
        }
    }

    useEffect(() =>{
        const loadEmpresa = async () =>{
            if(id_empresa){
                const empresa = await getEmpresa(id_empresa);
                setState({
                    nit: empresa.nit,
                    contrasenia: empresa.contrasenia
                });
                //console.log(punto);
                //console.log("Cargando datos...")
            }
        }
        loadEmpresa();
    }, []);

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nit</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="number"
                        name="nit"
                        placeholder='Ingrese un nit'
                        value={state.nit}
                    />
                </div>
                <div className='form-group'>
                    <label>Contraseña</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="password"
                        name="contrasenia"
                        placeholder='Ingrese una contraseña'
                        value={state.contrasenia}
                    />
                </div>

                <button onClick={handleClick} className='btn btn-primary'>
                    Iniciar Sesión
                </button>
            </form>
        </div>
    )
}

/*
<Route exact path="/inicio-sesion" element={<BadgeFormLogin/>}/>
*/
//import { Axios } from "axios";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
//import { login } from '../redux/actions.js'; 
import { verificarInicioDeSesionEmpresa } from "../api/empresa.api.js";
import { loginMiddleware, cerrarSesionMiddleware } from '../middleware/middleware.js';

/*const verificarContrasenia = (contrasenia) => {
  // Requisitos básicos: al menos 8 caracteres, una letra mayúscula y un número
  const longitudMinima = contrasenia.length >= 8;
  const tieneMayuscula = /[A-Z]/.test(contrasenia);
  const tieneNumero = /\d/.test(contrasenia);

  return longitudMinima && tieneMayuscula && tieneNumero;
};*/

function BadgeFormLogin() {
  const [state, setState] = useState({
    nit: "",
    contrasenia: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUsuarioAutenticado = false;

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Intento de inicio de sesión");
    console.log(state);
    //dispatch(loginMiddleware({ nit: state.nit, contrasenia: state.contrasenia }));

    if (isUsuarioAutenticado) {
      // Si el usuario está autenticado, realiza la lógica de cierre de sesión
      handleLogout();
    } else {
      // Si el usuario no está autenticado, realiza la lógica de inicio de sesión
      handleLogin(state);
    }

    try {
      /*const response = await axios.post('http://localhost:5000/login', {
        nit: state.nit,
        contrasenia: state.contrasenia
      });*/

      console.log('Credenciales:', state.nit, state.contrasenia);
        const response = await axios.post('http://localhost:5000/login', {
        nit: state.nit,
        contrasenia: state.contrasenia,
      });
      /*const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/login',
        data: {
          nit: state.nit,
          contrasenia: state.contrasenia,
        },
      });*/
    
      // Manejar la respuesta exitosa aquí
      console.log('Inicio de sesión exitoso', response.data);
    } catch (error) {
      // Manejar errores de Axios
      if (error.response) {
        // La solicitud fue hecha y el servidor respondió con un código de estado diferente de 2xx
        console.error('Error en la respuesta del servidor:', error.response.data);
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        console.error('No se recibió respuesta del servidor');
      } else {
        // Algo sucedió en la configuración de la solicitud que causó el error
        console.error('Error al configurar la solicitud:', error.message);
      }
    
      // Manejar errores específicos de 401 (No autorizado)
      if (error.response && error.response.status === 401) {
        console.log('Credenciales incorrectas');
      }
    }

    /*try{

    }catch (error){
      console.error('Error al intentar cerrar sesión:', error);
    }*/

    /*const inicioDeSesionExitoso = true;

    if (inicioDeSesionExitoso) {
      if()
      localStorage.setItem("token", responseData.token);
      dispatch(loginMiddleware({ nit: state.nit, contrasenia: state.contrasenia }));

      // Redirigir a la página principal
      navigate('/');
    } else {
      console.log('Inicio de sesión fallido');
    }
  };

  const cierreDeSesionExitoso = true;

  if (cierreDeSesionExitoso){
      localStorage.removeItem('token');
      dispatch(cerrarSesionMiddleware());
      navigate('/');
  }else {
    console.log('Inicio de sesión fallido');
  };

    /*if (!verificarContrasenia(state.contrasenia)) {
      console.log("La contraseña no cumple con los requisitos");
      return;
    }*/

    /*try {
      const inicioDeSesionExitoso = await verificarInicioDeSesionEmpresa(state.nit, state.contrasenia);

      if (inicioDeSesionExitoso) {
        console.log("Inicio de sesión exitoso");
        navigate("/");
      } else {
        console.log("Inicio de sesión fallido");
      }
    } catch (error) {
      console.error("Error al intentar iniciar sesión:", error);
    }*/

    /*try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        const data = await response.json();
        // Aquí puedes manejar la respuesta, por ejemplo, almacenar el token en localStorage
        localStorage.setItem("token", data.token);
        console.log("Inicio de sesión exitoso");
        navigate("/"); // Redirige a la página principal u otra página después del inicio de sesión
      } else {
        console.log("Inicio de sesión fallido");
        // Puedes mostrar un mensaje de error en el formulario si lo necesitas
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }*/
  };

  const handleLogin = async (state) => {
    try {
      // Lógica para iniciar sesión en el backend (usando middleware o servicio de API)
      const inicioDeSesionExitoso = await verificarInicioDeSesionEmpresa(state.nit, state.contrasenia);
  
      if (inicioDeSesionExitoso) {
        // Lógica para almacenar el token en el estado global (usando Redux)
        //dispatch(loginMiddleware({ nit: state.nit, contrasenia: state.contrasenia }));
  
        // Redirige a la página principal
        navigate('/');
      } else {
        console.log('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión (handlelogin): ', error.message);
    }
  };
  

  /*const handleLogin = async (state) => {
    try {
      // Lógica para iniciar sesión en el backend (usando middleware o servicio de API)
      const inicioDeSesionExitoso = await verificarInicioDeSesionEmpresa(state.nit, state.contrasenia);

      if (inicioDeSesionExitoso) {
        // Lógica para almacenar el token en el estado global (usando Redux)
        dispatch(loginMiddleware({ nit: state.nit, contrasenia: state.contrasenia }));

        // Redirige a la página principal
        navigate('/');
      } else {
        console.log('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
    }
  };

  const handleLogout = async () => {
    try{
      await cerrarSesionMiddleware();

    // Lógica para cerrar sesión localmente (limpiar token, etc.)
    localStorage.removeItem('token')
    }catch (error){
      console.error('Error al intentar cerrar sesión:', error);
    }
  }*/

  const handleLogout = async () => {
    try {
      // Despacha la acción correspondiente para manejar el cierre de sesión
      await dispatch(cerrarSesionMiddleware());

      // Lógica para cerrar sesión localmente (limpiar token, etc.)
      localStorage.removeItem('token');

      // Redirige a la página principal o a donde prefieras después del cierre de sesión
      navigate('/');
    } catch (error) {
      console.error('Error al intentar cerrar sesión:', error);
    }
  };

  useEffect(() => {
    return () => {
      // Desconectar el ResizeObserver aquí si es necesario
    };
  }, []);
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nit</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="number"
            name="nit"
            placeholder="Ingrese un nit"
            value={state.nit}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="password"
            name="contrasenia"
            placeholder="Ingrese una contraseña"
            value={state.contrasenia}
          />
        </div>
        {isUsuarioAutenticado ? (
          <button type="button" onClick={handleLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
        ) : (
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        )}
        
      </form>
    </div>
  );
}

export default BadgeFormLogin;

/**
 * 
 * <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>

        <button onClick={handleLogout} className="btn btn-danger">
          Cerrar Sesión
        </button>
 */