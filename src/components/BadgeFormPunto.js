import React, {useEffect, useState} from "react";
import {createPuntoRequest} from "../api/punto.api.js";
//import { usePuntos } from "../context/PuntoContext.js"; //, {useContext}
import { useParams, useNavigate} from "react-router-dom";
import { usePuntos } from '../context/PuntoContext.js';

function BadgeFormPunto() {
    const {getPunto, updatePunto} = usePuntos();
    const { id_punto } = useParams();
    const [state, setState] = useState({
        nombre_punto: "",
        barrio: "",
        direccion: "",
        correo: "",
        telefono: "",
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
        console.log("Punto creado de manera exitosa");
        console.log(state);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("El Formulario fue enviado exitosamente");
        console.log(state);
        if(id_punto !== null && id_punto !== undefined){
            await updatePunto(id_punto, state);
            setState({
                nombre_punto: "",
                barrio: "",
                direccion: "",
                correo: "",
                telefono: "",
                create_at: ""
            });
            navigate("/badges/punto");
        }else{
            try {
                const response = await createPuntoRequest(state);
                console.log(response);
                setState({
                    nombre_punto: "",
                    barrio: "",
                    direccion: "",
                    correo: "",
                    telefono: "",
                    create_at: ""
                })
            } catch (error) {
                console.error(error);
            }
            navigate("/badges/punto");
        }
    }

    useEffect(() =>{
        const loadPunto = async () =>{
            if(id_punto){
                const punto = await getPunto(id_punto);
                setState({
                    nombre_punto: punto.nombre_punto,
                    barrio: punto.barrio,
                    direccion: punto.direccion,
                    correo: punto.correo,
                    telefono: punto.telefono,
                    create_at: punto.create_at
                });
                //console.log(punto);
                //console.log("Cargando datos...")
            }
        }
        loadPunto();
    }, []);

    return (
        <div>
            <h1>{id_punto ? "Editar Punto" : "Nuevo Punto" }</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nombre del Punto</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                        name="nombre_punto"
                        placeholder='Ingrese un nombre'
                        value={state.nombre_punto}
                    />
                </div>
                <div className='form-group'>
                    <label>Barrio</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                        name="barrio"
                        placeholder='Ingrese un punto'
                        value={state.barrio}
                    />
                </div>

                <div className='form-group'>
                    <label>Dirección</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                        name="direccion"
                        placeholder='Ingrese una dirección'
                        value={state.direccion}
                    />
                </div>

                <div className='form-group'>
                    <label>Correo</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="email"
                        name="correo"
                        placeholder='Ingrese un correo'
                        value={state.correo}
                    />
                </div>

                <div className='form-group'>
                    <label>Celular</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="number"
                        name="telefono"
                        placeholder='Ingrese un celular'
                        value={state.telefono}
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

export default BadgeFormPunto;


/*function PuntosForm(){
    const params = useParams();
}*/

/*const params = {
    useParams();
}*/

/*class BadgeFormPunto extends React.Component{

    params = useParams();
    

    state = {
        //nombre_punto: ""
    }

    /*useEffect(() =>){
        if(id_punto){

        }
    }

    componentWillReceiveProps = (params) =>{
        if(params.id_punto){
            console.log("Cargando Datos...");
        }
        
    }

    handleChange = (e) => {
        // console.log({
          //   name: e.target.name,
           //  value: e.target.value });
         this.setState({
            [e.target.name]:  e.target.value 
         })
     }

    handleClick = (e) => {
        console.log("Punto creado de manera exitosa");
    }

    /*actions = (nombre_punto) =>{
        this.state.nombre_punto = "";
    }

    handleSubmit = async (e, actions) => {
        e.preventDefault();
        console.log("El Formulario fue enviado exitosamente");
        console.log(this.state);
        try {
            const response = await createPuntoRequest(this.state);
            console.log(response);
            //actions.resetForm();
        } catch (error) {
            console.error(error);
        }
    }
    render(){
        return(
            <div>
                <h1>{/*params.id_punto ? "Editar Punto" : "Nuevo Punto"}</h1>
                <form onSubmit={/*this.props.onSubmit this.handleSubmit}>
                    <div className='form-group'>
                        <label>Nombre del Punto</label>
                        <input onChange={this.handleChange} className='form-control' type="text" name="nombre_punto" placeholder='Ingrese un nombre' value=/*{this.props.formValues.nombrePunto} {this.state.nombre_punto} />
                    </div>
                    <div className='form-group'>
                        <label>Barrio</label>
                        <input onChange={this.handleChange} className='form-control' type="text" name="barrio" placeholder='Ingrese un punto' value=/*{this.props.formValues.barrio} {this.state.barrio}/>
                    </div>

                    <div className='form-group'>
                        <label>Dirección</label>
                        <input onChange={this.handleChange} className='form-control' type="text" name="direccion" placeholder='Ingrese una direccion' value=/*{this.props.formValues.direccion} {this.state.direccion }/>
                    </div>

                    <div className='form-group'>
                        <label>Correo</label>
                        <input onChange={this.handleChange} className='form-control' type="email" name="correo" placeholder='Ingrese un correo' value=/*{this.props.formValues.correo} {this.state.correo}/>
                    </div>

                    <div className='form-group'>
                        <label>Celular</label>
                        <input onChange={this.handleChange} className='form-control' type="number" name="telefono" placeholder='Ingrese un celular' value=/*{this.props.formValues.celular} {this.state.telefono}/>
                    </div>

                    <div className='form-group'>
                        <label>Fecha y Hora</label>
                        <input onChange={this.handleChange} className='form-control' type="datetime" name="create_at" placeholder='Ingrese una fecha y hora' value=/*{this.props.formValues.celular} {this.state.create_at}/>
                    </div>

                    <button onClick={this.handleClick} className='btn btn-primary'>
                        Crear Punto</button>
                </form>
            </div>
            
        )
    }
}

export default BadgeFormPunto;*/

/* como limpiar datos de un formulario y como cargar el boton, sin crear alguno nuevo al mismo tiempo */