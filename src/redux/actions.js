
/*export const login = ({ username, password }) => ({
    type: 'LOGIN_REQUEST',
    payload: { username, password },
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });

  //dispatch(loginSuccess({ token: data.token }));

  export const login = (credentials) => {
    return async (dispatch) => {
      try {
        // Realiza la lógica de inicio de sesión aquí (peticiones al servidor, etc.)
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
  
        if (response.ok) {
          const data = await response.json();
          // Dispatch la acción de éxito con el token
          dispatch(loginSuccess({ token: data.token }));
        } else {
          // Si hay un error, dispatch la acción de fallo con el mensaje de error
          const errorData = await response.json();
          dispatch(loginFailure(errorData.message));
        }
      } catch (error) {
        // Maneja errores en la lógica de inicio de sesión y dispatch la acción de fallo
        dispatch(loginFailure("Error al iniciar sesión"));
      }
    };
  };*/


  /*
export const loginSuccess = (token) => ({
  type: 'LOGIN_SUCCESS',
  payload: token,
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

export const logoutSuccess = (token) => ({
  type: 'LOGOUT_SUCCESS',
  payload: token,
});

export const logoutFailure = (error) => ({
  type: 'LOGOUT_FAILURE',
  payload: error,
});

export const login = (credentials) => {
  return async (dispatch, getState) => {
    try {
      // Realiza la lógica de inicio de sesión aquí (peticiones al servidor, etc.)
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        // Dispatch la acción de éxito con el token
        dispatch(loginSuccess({ token: data.token }));

        const token = getState().auth.token;
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        };
      } else {
        // Si hay un error, dispatch la acción de fallo con el mensaje de error
        const errorData = await response.json();
        dispatch(loginFailure(errorData.message));
      }
    } catch (error) {
      // Maneja errores en la lógica de inicio de sesión y dispatch la acción de fallo
      dispatch(loginFailure("Error al iniciar sesión"));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      // Realiza la lógica de cierre de sesión aquí (peticiones al servidor, etc.)
      const response = await fetch("http://localhost:5000/logout", {
        method: "POST", // O el método que utilices para cerrar sesión
        headers: {
          "Content-Type": "application/json",
          // Otros encabezados según sea necesario
        },
        // Otros datos de solicitud según sea necesario
      });

      if (response.ok) {
        // Dispatch la acción de éxito para indicar que el cierre de sesión fue exitoso
        dispatch(logoutSuccess());
      } else {
        // Si hay un error, dispatch la acción de fallo con el mensaje de error
        const errorData = await response.json();
        dispatch(logoutFailure(errorData.message));
      }
    } catch (error) {
      // Maneja errores en la lógica de cierre de sesión y dispatch la acción de fallo
      dispatch(logoutFailure("Error al cerrar sesión"));
    }
  };
};


/*export const logout = () => {
  return async (dispatch) => {
    try {
      // Realiza la lógica de cierre de sesión aquí (limpiar token, peticiones al servidor, etc.)
      // Por ejemplo, puedes usar localStorage para limpiar el token.

      // Simula una espera asíncrona para mostrar el proceso de cierre de sesión
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Dispatch la acción de éxito
      dispatch(logoutSuccess({token: data.token}));
    } catch (error) {
      // Maneja errores en la lógica de cierre de sesión y dispatch la acción de fallo
      dispatch(logoutFailure("Error al cerrar sesión"));
    }
  };
};  */

// actions.js

export const loginSuccess = () => ({
  type: 'LOGIN_SUCCESS',
});

export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
});

export const logoutFailure = () => ({
  type: 'LOGOUT_FAILURE',
});

export const algunaOtraAccion = (data) => ({
  type: 'ALGUNA_OTRA_ACCION',
  payload: data,
});

export const errorEnLaAccion = () => ({
  type: 'ERROR_EN_LA_ACCION',
});
