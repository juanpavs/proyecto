import { createContext, useContext, useState } from "react";
import { getContenedoresRequest, deleteContenedorRequest, getContenedorRequest, updateContenedorRequest } from '../api/contenedor.api.js';

export const ContenedorContext = createContext();

export const useContenedores = () => {
    const context = useContext(ContenedorContext);
    if(!context){
        throw new Error("El useContenedor deberia estar adentro de un ContenedorContextProvider")
    }
    return context;
}

export const ContenedorContextProvider = ({children}) =>{
    const [contenedores, setContenedores] = useState([]);

    async function loadContenedores(){
        const response = await getContenedoresRequest();
        setContenedores(response.data);
    }

    const handleDelete = async (id_contenedor) => {
        try {
            const response = await deleteContenedorRequest(id_contenedor);
            setContenedores(contenedores.filter(contenedor => contenedor.id_contenedor !== id_contenedor));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        
    }

    const getContenedor = async (id_contenedor) => {
        try {
            const response = await getContenedorRequest(id_contenedor);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const updateContenedor = async (id_contenedor, newCampo) =>{
        try {
            const response = await updateContenedorRequest(id_contenedor, newCampo);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        
    }

    return <ContenedorContext.Provider value={{contenedores, loadContenedores, handleDelete, getContenedor, updateContenedor}}>
        {children}
    </ContenedorContext.Provider>
};