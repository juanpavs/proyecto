import axios from "axios";

export const getContenedoresRequest = async () =>
    await axios.get("http://localhost:5000/contenedores");

export const crearContenedorRequest = async (contenedor) => 
    await axios.post('http://localhost:5000/contenedores', contenedor);

export const deleteContenedorRequest = async (id_contenedor) =>
    await axios.delete(`http://localhost:5000/contenedores/${id_contenedor}`);

export const getContenedorRequest = async (id_contenedor) => 
    await axios.get(`http://localhost:5000/contenedores/${id_contenedor}`);

export const updateContenedorRequest = async (id_contenedor, recoger, newCampo) => 
    await axios.put(`http://localhost:5000/contenedores/${id_contenedor}/${recoger}`, newCampo);

export const getRecoger = async (recoger) =>{
    try {
        const response = await axios.get(`http://localhost:5000/contenedores/recoger/1`,{
            recoger
        });

        //console.log(response.data); 
        return response.data;
    } catch (error) {
        console.error('Error al obtener la recolección', error);
        return -1;
    }
}
