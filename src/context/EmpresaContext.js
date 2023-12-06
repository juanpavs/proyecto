import { createContext, useContext, useState } from "react";
import { getEmpresasRequest, deleteEmpresaRequest, getEmpresaRequest, updateEmpresaRequest } from '../api/empresa.api.js';

export const EmpresaContext = createContext();
export const useEmpresas = () => {
    const context = useContext(EmpresaContext);
    if(!context){
        throw new Error("El useEmpresas deberia estar adentro de un EmpresaContextProvider")
    }
    return context;
}

export const EmpresaContextProvider = ({children}) =>{
    const [empresas, setEmpresas] = useState([]);

    async function loadEmpresas(){
        const response = await getEmpresasRequest();
        setEmpresas(response.data);
    }

    const handleDelete = async (id_empresa) => {
        try {
            const response = await deleteEmpresaRequest(id_empresa);
            setEmpresas(empresas.filter(empresa => empresa.id_empresa !== id_empresa));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    const getEmpresa = async (id_empresa) => {
        try {
            const response = await getEmpresaRequest(id_empresa);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const updateEmpresa = async (id_empresa, nuevoCampo) =>{
        try {
            const response = await updateEmpresaRequest(id_empresa, nuevoCampo);
            console.log(response);
        } catch (error) {
            console.error(error);
        }   
    }

    return <EmpresaContext.Provider value={{empresas, loadEmpresas, handleDelete, getEmpresa, updateEmpresa}}>
        {children}
    </EmpresaContext.Provider>
};