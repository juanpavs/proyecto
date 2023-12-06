/*
import { loginSuccess, loginFailure, logoutSuccess, logoutFailure } from '../redux/actions.js';
export const agregarTokenAMiddleware = () => {
  return (dispatch, getState) => {
    // Aquí puedes acceder al estado actual utilizando getState
    const token = getState().auth.token;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

  };
};
export const loginMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      // Aquí manejas la respuesta, por ejemplo, almacenar el token en localStorage
      localStorage.setItem("token", responseData.token);
      dispatch(loginSuccess());
    } else {
      // Manejar el fallo de inicio de sesión
      dispatch(loginFailure());
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    // También podrías dispatch un loginFailure() aquí si hay errores en la solicitud
  }
};

export const cerrarSesionMiddleware = () => {
  return async (dispatch) => {
    try {
      // Realiza la lógica de cierre de sesión aquí (peticiones al servidor, etc.)

      // Elimina el token del almacenamiento local
      localStorage.removeItem('token');

      // Dispatch la acción de cierre de sesión exitoso
      dispatch(logoutSuccess());
    } catch (error) {
      // Maneja errores en la lógica de cierre de sesión y dispatch la acción de fallo
      console.error('Error al cerrar sesión:', error);
      dispatch(logoutFailure(error.message));
    }
  };
};


/*const token = getState().auth.token;
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
};*/

// En middleware.js
/*import { loginSuccess, loginFailure, logoutSuccess, logoutFailure } from '../redux/actions.js';

export const agregarTokenAMiddleware = () => {
  return (dispatch, getState) => {
    // Aquí puedes acceder al estado actual utilizando getState
    const token = getState().auth.token;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    return headers;
  };
};

export const loginMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      // Aquí manejas la respuesta, por ejemplo, almacenar el token en localStorage
      localStorage.setItem("token", responseData.token);
      dispatch(loginSuccess());
    } else {
      // Manejar el fallo de inicio de sesión
      dispatch(loginFailure());
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    // También podrías dispatch un loginFailure() aquí si hay errores en la solicitud
  }
};

export const cerrarSesionMiddleware = () => {
  return async (dispatch) => {
    try {
      // Realiza la lógica de cierre de sesión aquí (peticiones al servidor, etc.)

      // Elimina el token del almacenamiento local
      localStorage.removeItem('token');

      // Dispatch la acción de cierre de sesión exitoso
      dispatch(logoutSuccess());
    } catch (error) {
      // Maneja errores en la lógica de cierre de sesión y dispatch la acción de fallo
      console.error('Error al cerrar sesión:', error);
      dispatch(logoutFailure(error.message));
    }
  };
};*/

// middleware.js

// En middleware.js
export const agregarTokenAMiddleware = () => {
  // ...
};


// Simulación de una función para autenticar al usuario
export const loginMiddleware = async (credenciales) => {
  try {
    // Lógica para autenticar al usuario (puedes hacer una solicitud al servidor aquí)
    // Simulamos una respuesta exitosa
    const respuestaServidor = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credenciales),
    });

    if (respuestaServidor.ok) {
      // Simulamos almacenar el token de autenticación en el estado global o en localStorage
      const data = await respuestaServidor.json();
      localStorage.setItem('token', data.token);

      // Retornamos la acción de autenticación exitosa
      return { tipo: 'LOGIN_EXITOSO', usuario: data.usuario };
    } else {
      // Retornamos la acción de autenticación fallida
      return { tipo: 'LOGIN_FALLIDO', mensaje: 'Credenciales incorrectas' };
    }
  } catch (error) {
    console.error('Error en loginMiddleware:', error);
    // Retornamos la acción de autenticación fallida en caso de error
    return { tipo: 'LOGIN_FALLIDO', mensaje: 'Error en el servidor' };
  }
};

// Simulación de una función para cerrar la sesión del usuario
export const cerrarSesionMiddleware = async () => {
  try {
    // Lógica para cerrar la sesión (puedes hacer una solicitud al servidor aquí)

    // Simulamos limpiar el token almacenado en el estado global o en localStorage
    localStorage.removeItem('token');

    // Retornamos la acción de cierre de sesión exitoso
    return { tipo: 'CERRAR_SESION_EXITOSO' };
  } catch (error) {
    console.error('Error en cerrarSesionMiddleware:', error);
    // Retornamos la acción de cierre de sesión fallido en caso de error
    return { tipo: 'CERRAR_SESION_FALLIDO', mensaje: 'Error en el servidor' };
  }
};

// Simulación de una acción adicional
export const algunaAction = async () => {
  try {
    // Lógica para realizar alguna acción adicional

    // Retornamos la acción exitosa
    return { tipo: 'ALGUNA_ACCION_EXITOSA' };
  } catch (error) {
    console.error('Error en algunaAccion:', error);
    // Retornamos la acción fallida en caso de error
    return { tipo: 'ALGUNA_ACCION_FALLIDA', mensaje: 'Error en la acción' };
  }
};


