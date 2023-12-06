import { crearEmpresaRequest } from '../api/empresa.api.js';

// Acción asíncrona creada con Redux Thunk
export const crearEmpresa = (empresaData) => {
  return async (dispatch) => {
    try {
      // Lógica asíncrona
      const response = await crearEmpresaRequest(empresaData);

      // Dispatch de una acción exitosa (puedes ajustar según tus necesidades)
      dispatch({ type: 'CREAR_EMPRESA_EXITO', payload: response });
    } catch (error) {
      // Dispatch de una acción de error (puedes ajustar según tus necesidades)
      dispatch({ type: 'CREAR_EMPRESA_ERROR', payload: error });
    }
  };
};