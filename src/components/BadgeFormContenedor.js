import React, {useEffect, useState} from "react";
import {crearContenedorRequest} from '../api/contenedor.api.js';
import { useParams, useNavigate} from "react-router-dom";
import {useContenedores} from "../context/ContenedorContext.js";

function BadgeFormContenedor() {
    const {getContenedor, updateContenedor} = useContenedores();
    const { id_contenedor } = useParams();
    const [state, setState] = useState({
        nombre_contenedor: "",
        direccion_contenedor: "",
        id_punto: "",
        create_at: ""
    });
    const navigate = useNavigate();

    /*state ={

    }*/

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleClick = (e) => {
        console.log("Contenedor creado de manera exitosa");
        console.log(state);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("El Formulario fue enviado exitosamente");
        console.log(state);
        if(id_contenedor !== null && id_contenedor !== undefined){
            await updateContenedor(id_contenedor, state);
            setState({
                nombre_contenedor: "",
                direccion_contenedor: "",
                id_punto: "",
                create_at: ""
            });
            navigate("/badges/contenedor");
        }else{
            try {
                const response = await crearContenedorRequest(state);
                console.log(response);
                setState({
                    nombre_contenedor: "",
                    direccion_contenedor: "",
                    id_punto: "",
                    create_at: ""
                })
            } catch (error) {
                console.error(error);
            }
            navigate("/badges/contenedor");
        }
    }

    useEffect(() =>{
        const loadContenedor = async () =>{
            if(id_contenedor){
                const contenedor = await getContenedor(id_contenedor);
                setState({
                    nombre_contenedor: contenedor.nombre_contenedor,
                    direccion_contenedor: contenedor.direccion_contenedor,
                    id_punto: contenedor.id_punto,
                    create_at: contenedor.create_at
                });
                //console.log(punto);
                //console.log("Cargando datos...")
            }
        }
        loadContenedor();
    }, []);

    return (
        <div>
            <h1>{id_contenedor ? "Editar Contenedor" : "Nuevo Contenedor" }</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nombre del Contenedor</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                        name="nombre_contenedor"
                        placeholder='Ingrese un nombre'
                        value={state.nombre_contenedor}
                    />
                </div>
                <div className='form-group'>
                    <label>Direccion del Contenedor</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                        name="direccion_contenedor"
                        placeholder='Ingrese una dirección'
                        value={state.direccion_contenedor}
                    />
                </div>
                <div className='form-group'>
                    <label>ID del Punto</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="number"
                        name="id_punto"
                        placeholder='Ingrese un número'
                        value={state.id_punto}
                    />
                </div>
                <div className='form-group'>
                    <label>Fecha y Hora</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="datetime"
                        name="create_at"
                        placeholder='Ingrese una fecha y hora'
                        value={state.create_at}
                    />
                </div>

                <button onClick={handleClick} className='btn btn-primary'>
                    Guardar
                </button>
            </form>
        </div>
    );
}

/*class BadgeFormContenedor extends React.Component{
    state = {}

    handleChange = (e) => {
        // console.log({
          //   name: e.target.name,
           //  value: e.target.value });
         this.setState({
            [e.target.name]:  e.target.value 
         })
     }

    handleClick = (e) => {
        console.log("Empresa creada de manera exitosa");
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log("El Formulario fue enviado exitosamente");
        console.log(this.state);
        try {
            const response = await crearContenedorRequest(this.state);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={/*this.props.onSubmit this.handleSubmit}>
                    <div className='form-group'>
                        <label>Nombre del Contenedor</label>
                        <input 
                        onChange={this.handleChange} 
                        className='form-control' 
                        type="text" name="nombre_contenedor" 
                        placeholder='Ingrese un nombre' 
                        value=/*{this.props.formValues.nombrePunto} {this.state.nombre_contenedor} />
                    </div>

                    <div className='form-group'>
                        <label>Direccion del Contenedor</label>
                        <input onChange={this.handleChange} 
                        className='form-control' type="text" name="direccion_contenedor" 
                        placeholder='Ingrese una dirección' 
                        value=/*{this.props.formValues.nombrePunto} {this.state.direccion_contenedor} />
                    </div>


                    <div className='form-group'>
                        <label>ID del Punto</label>
                        <input 
                        onChange={this.handleChange} 
                        className='form-control' type="number" name="id_punto" 
                        placeholder='Ingrese un número' 
                        value=/*{this.props.formValues.nombrePunto} {this.state.id_punto} />
                    </div>

                    <div className='form-group'>
                        <label>Fecha y Hora</label>
                        <input onChange={this.handleChange} className='form-control' type="datetime" 
                        name="create_at" placeholder='Ingrese una fecha y hora' 
                        value=/*{this.props.formValues.celular} {this.state.create_at}/>
                    </div>

                    <button onClick={this.handleClick} className='btn btn-primary'>Crear Contenedor</button>
                </form>
            </div>
        )
    }
}*/

export default BadgeFormContenedor;