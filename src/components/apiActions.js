import { agregarTokenAMiddleware} from '../middleware/middleware.js';
import {algunaOtraAccion, errorEnLaAccion} from '../redux/actions.js';

export const algunaAccion = () => async (dispatch, getState) => {
    try {
        const headers = agregarTokenAMiddleware()(dispatch, getState);
  
        // Ahora puedes utilizar headers en tu solicitud
        const response = await fetch("http://localhost:5000/empresas", {
          method: "GET",
          headers: headers,
        });
        
        if (response.ok) {
            const data = await response.json();
            // Realizar acciones adicionales con los datos, por ejemplo, actualizar el estado
            dispatch(algunaOtraAccion(data));
          } else {
            // Manejar errores de la API
            console.error("Error en la solicitud a la API:", response.status);
            dispatch(errorEnLaAccion());
          }
    } catch (error) {
        console.error("Error en la solicitud a la API:", error);
        dispatch(errorEnLaAccion());
    }
  };