import axios from "axios";

export const getPuntosRequest = async () =>
    await axios.get("http://localhost:5000/puntos");

export const createPuntoRequest = async (punto) =>
    await axios.post("http://localhost:5000/puntos", punto);

export const deletePuntoRequest = async (id_punto) =>
    await axios.delete(`http://localhost:5000/puntos/${id_punto}`);

export const getPuntoRequest = async (id_punto) =>
    await axios.get(`http://localhost:5000/puntos/${id_punto}`);

export const updatePuntoRequest = async (id_punto, nuevosCampos) =>
    await axios.put(`http://localhost:5000/puntos/${id_punto}`, nuevosCampos);


//import {getPuntosRequest} from "../api/punto.api.js";