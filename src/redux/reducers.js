
/*const initialState = {
    usuarioAutenticado: false
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          usuarioAutenticado: true,

        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          usuarioAutenticado: false,

        };
        case 'LOGOUT_SUCCESS':
        return {
          ...state,
          usuarioAutenticado: false,

        };
      case 'LOGOUT_FAILURE':
        return {
            ...state,
            usuarioAutenticado: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;*/

  // reducers.js

const initialState = {
  usuarioAutenticado: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        usuarioAutenticado: true,
      };
    case 'LOGIN_FAILURE':
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        usuarioAutenticado: false,
      };
      case 'ALGUNA_OTRA_ACCION':
      return {
        ...state,
        data: action.payload,
        error: null, // Reiniciar el error en caso de éxito
      };
    case 'ERROR_EN_LA_ACCION':
      return {
        ...state,
        data: null, // Reiniciar los datos en caso de error
        error: 'Hubo un error en la acción.',
      };
    default:
      return state;
  }
};

export default authReducer;

  