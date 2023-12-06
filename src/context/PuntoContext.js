import { createContext, useContext, useState } from "react";
import { getPuntosRequest, deletePuntoRequest, getPuntoRequest, updatePuntoRequest } from '../api/punto.api.js';

export const PuntoContext = createContext();

export const usePuntos = () => {
    const context = useContext(PuntoContext);
    if(!context){
        throw new Error("El usePuntos deberia estar adentro de un PuntoContextProvider")
    }
    return context;
}

export const PuntoContextProvider = ({children}) =>{

    const [puntos, setPuntos] = useState([]);

    async function loadPuntos() {
        const response = await getPuntosRequest();
        //console.log(response.data);
        setPuntos(response.data); 
    }

    const handleDelete = async (id_punto) => {
        try {
            const response = await deletePuntoRequest(id_punto);
            setPuntos(puntos.filter(punto => punto.id_punto !== id_punto));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        
    }

    const getPunto = async (id_punto) => {
        try {
            const response = await getPuntoRequest(id_punto);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const updatePunto = async (id_punto, nuevosCampos) =>{
        try {
            const response = await updatePuntoRequest(id_punto, nuevosCampos);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        
    }

    return <PuntoContext.Provider value={{puntos, loadPuntos, handleDelete, getPunto, updatePunto}}>
        {children}
    </PuntoContext.Provider>
};