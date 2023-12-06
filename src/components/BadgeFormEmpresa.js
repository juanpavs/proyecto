/*import React, {useEffect, useState} from "react";
import {crearEmpresaRequest, verificarInicioDeSesionEmpresa} from "../api/empresa.api.js";
import { useParams, useNavigate} from "react-router-dom";
import { useEmpresas } from "../context/EmpresaContext.js";
//import { algunaAction, loginMiddleware, cerrarSesionMiddleware } from '../middleware/middleware.js';
//import { algunaAccion } from "./apiActions.js";
import { useDispatch, useSelector } from 'react-redux';
//import { crearEmpresa } from "../redux/empresaActions.js";

function BadgeFormEmpresa() {
    const {getEmpresa, updateEmpresa} = useEmpresas();
    const { id_empresa } = useParams();
    //const history = useHistory();
    const [state, setState] = useState({
        nit: "",
        nombre_empresa: "",
        contrasenia: ""
    });
    const navigate = useNavigate();
    //const dispatch = useDispatch();

    const [redirect, setRedirect] = useState(false); 

    const verificarContrasenia = (contrasenia) => {
        // Requisitos básicos: al menos 8 caracteres, una letra mayúscula y un número
        const longitudMinima = contrasenia.length >= 8;
        const tieneMayuscula = /[A-Z]/.test(contrasenia);
        const tieneNumero = /\d/.test(contrasenia);
    
        return longitudMinima && tieneMayuscula && tieneNumero;
      };
    /*const isUsuarioAutenticado = useSelector(
    (state) => state.auth && state.auth.usuarioAutenticado
  );*/

    //const isUsuarioAutenticado = true; 
    //const isUsuarioAutenticado = useSelector((state) => state.auth.isUsuarioAutenticado);
    //const isUsuarioAutenticado = useSelector((state) => state.auth && state.auth.usuarioAutenticado);
    /*const isUsuarioAutenticado = useSelector((state) => {
        console.log(state); // Agrega esta línea para depurar
        return state.auth && state.auth.usuarioAutenticado;
      });

    /*state ={

    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleClick = (e) => {
        console.log("Empresa creada de manera exitosa");
        console.log(state);
    }

    useEffect(() => {
        if (id_empresa) {
          const loadEmpresa = async () => {
            const empresa = await getEmpresa(id_empresa);
            setState({
              nit: empresa.nit,
              nombre_empresa: empresa.nombre_empresa,
              contrasenia: empresa.contrasenia,
            });
          };
          loadEmpresa();
        }
      }, [id_empresa, getEmpresa]);

    /*if (!isUsuarioAutenticado) {
        navigate('/'); 
        return null; 
    }*/

    /*const handleRedirect = () => {
        navigate('/badges/empresa');
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("El Formulario fue enviado exitosamente");
        console.log(state);

        if (!verificarContrasenia(state.contrasenia)) {
            console.log("La contraseña no cumple con los requisitos");
            // Puedes mostrar un mensaje de error o manejarlo según tus necesidades
            return;
          }
          try {
            const response = id_empresa
              ? await updateEmpresa(id_empresa, state)
              : await crearEmpresaRequest(state);
      
            console.log(response);
      
            setState({
              nit: '',
              nombre_empresa: '',
              contrasenia: ''
            });
      
            // Activamos la redirección
            setRedirect(true);
          } catch (error) {
            console.error(error);
          }
        /*if(id_empresa !== null && id_empresa !== undefined){
            await updateEmpresa(id_empresa, state);
            setState({
                nit: "",
                nombre_empresa: "",
                contrasenia: ""
            });
            //setRedirect(true);

            //navigate("/badges/empresa");
        }else{
            try {
                const response = await crearEmpresaRequest(state);
                console.log('Empresa creada exitosamente');
                console.log(response);
                setState({
                    nit: "",
                    nombre_empresa: "",
                    contrasenia: ""
                });
                //handleRedirect();
            } catch (error) {
                console.error(error);
            }
            //handleRedirect();
            setRedirect(true);
            //navigate("/badges/empresa");
        }

        try {
            await algunaAccion();
            await algunaAction(); 
        } catch (error) {
            console.error('Error al realizar alguna acción:', error);
        }

    }
  
    useEffect(() => {
        if (redirect) {
          navigate('/badges/empresa');
        }
      }, [redirect, navigate]);

    /*useEffect(() => {
        if (!isUsuarioAutenticado) {
          navigate('/');
        }
      }, [isUsuarioAutenticado, navigate]);*/
    /*useEffect(() =>{
        const loadEmpresa = async () =>{
            if(id_empresa){
                const empresa = await getEmpresa(id_empresa);
                setState({
                    nit: empresa.nit,
                    nombre_empresa: empresa.nombre_empresa,
                    contrasenia: empresa.contrasenia
                });
                //console.log(punto);
                //console.log("Cargando datos...")
            }
        }
        loadEmpresa();
    }, [id_empresa, getEmpresa]);

    return (
        <div>
            <h1>{id_empresa ? "Editar Empresa" : "Nueva Empresa" }</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nit</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="number"
                        name="nit"
                        placeholder='Ingrese un nit'
                        value={state.nit}
                    />
                </div>
                <div className='form-group'>
                    <label>Nombre de la Empresa</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                        name="nombre_empresa"
                        placeholder='Ingrese un nombre'
                        value={state.nombre_empresa}
                    />
                </div>

                <div className='form-group'>
                    <label>Contraseña</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="password"
                        name="contrasenia"
                        placeholder='Ingrese una contraseña'
                        value={state.contrasenia}
                    />
                </div>

                <button onClick={handleClick} className='btn btn-primary'>
                    Guardar
                </button>
            </form>
        </div>
    );
}   
export default BadgeFormEmpresa;

import React, { useEffect, useState } from 'react';
import {crearEmpresaRequest, verificarInicioDeSesionEmpresa} from "../api/empresa.api.js";
import { useParams, useNavigate } from 'react-router-dom';
import { useEmpresas } from '../context/EmpresaContext.js';
//import { crearEmpresaRequest } from './apiActions.js';

function BadgeFormEmpresa() {
  const { getEmpresa, updateEmpresa } = useEmpresas();
  const { id_empresa } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    nit: '',
    nombre_empresa: '',
    contrasenia: ''
  });

  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = id_empresa
        ? await updateEmpresa(id_empresa, state)
        : await crearEmpresaRequest(state);

      console.log(response);

      setState({
        nit: '',
        nombre_empresa: '',
        contrasenia: ''
      });

      // Activamos la redirección
      //setRedirect(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (redirect) {
      navigate('/badges/empresa');
    }
  }, [redirect, navigate]);

  return (
    <div>
      <h1>{id_empresa ? 'Editar Empresa' : 'Nueva Empresa'}</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Nit</label>
          <input
            onChange={handleChange}
            className='form-control'
            type='number'
            name='nit'
            placeholder='Ingrese un nit'
            value={state.nit}
          />
        </div>
        <div className='form-group'>
          <label>Nombre de la Empresa</label>
          <input
            onChange={handleChange}
            className='form-control'
            type='text'
            name='nombre_empresa'
            placeholder='Ingrese un nombre'
            value={state.nombre_empresa}
          />
        </div>
        <div className='form-group'>
          <label>Contraseña</label>
          <input
            onChange={handleChange}
            className='form-control'
            type='password'
            name='contrasenia'
            placeholder='Ingrese una contraseña'
            value={state.contrasenia}
          />
        </div>
        <button className='btn btn-primary' type='submit'>
          Guardar
        </button>
      </form>
    </div>
  );
}

export default BadgeFormEmpresa;

import React, { useEffect, useState } from "react";
import {crearEmpresaRequest} from "../api/empresa.api.js";
import { useParams, useNavigate,  useHistory } from "react-router-dom";
import { useEmpresas } from "../context/EmpresaContext.js";
//import { agregarTokenAMiddleware, loginMiddleware, cerrarSesionMiddleware } from '../middleware/middleware.js';
import { algunaAccion } from "./apiActions.js";
import { useSelector } from 'react-redux';

function BadgeFormEmpresa() {
    const {getEmpresa, updateEmpresa} = useEmpresas();
    const { id_empresa } = useParams();
    const history = useHistory();
    const [state, setState] = useState({
        nit: "",
        nombre_empresa: "",
        contrasenia: ""
    });
    const navigate = useNavigate();

    //const isUsuarioAutenticado = true; 
    //const isUsuarioAutenticado = useSelector((state) => state.auth.isUsuarioAutenticado);
    //const isUsuarioAutenticado = useSelector((state) => state.auth && state.auth.usuarioAutenticado);
    /*const isUsuarioAutenticado = useSelector((state) => {
        console.log(state); // Agrega esta línea para depurar
        return state.auth && state.auth.usuarioAutenticado;
      });

    /*state ={

    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleClick = (e) => {
        console.log("Empresa creada de manera exitosa");
        console.log(state);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("El Formulario fue enviado exitosamente");
        console.log(state);
        if(id_empresa !== null && id_empresa !== undefined){
            await updateEmpresa(id_empresa, state);
            setState({
                nit: "",
                nombre_empresa: "",
                contrasenia: ""
            });
            navigate("/badges/empresa");
        }else{
            try {
                const response = await crearEmpresaRequest(state);
                console.log(response);
                setState({
                    nit: "",
                    nombre_empresa: "",
                    contrasenia: ""
                })
            } catch (error) {
                console.error(error);
            }
            navigate("/badges/empresa");
        }

        try {
            await algunaAccion(); 
        } catch (error) {
            console.error('Error al realizar alguna acción:', error);
        }
    /*const credencialesCorrectas = true; // Reemplaza esto con tu lógica real
        if (credencialesCorrectas) {
            //onLogin();
            history.push('/'); // Redirige a la página después del inicio de sesión exitoso
        } else {
            alert('Credenciales incorrectas');
        }
    }*/

    /*useEffect(() => {
        if (!isUsuarioAutenticado) {
          navigate('/');
        }
      }, [isUsuarioAutenticado, navigate]);
    useEffect(() =>{
        const loadEmpresa = async () =>{
            if(id_empresa){
                const empresa = await getEmpresa(id_empresa);
                setState({
                    nit: empresa.nit,
                    nombre_empresa: empresa.nombre_empresa,
                    contrasenia: empresa.contrasenia
                });
                //console.log(punto);
                //console.log("Cargando datos...")
            }
        }
        loadEmpresa();
    }, [id_empresa, getEmpresa]);

    /*if (!isUsuarioAutenticado) {
        navigate('/'); 
        return null; 
      }
    

    return (
        <div>
            <h1>{id_empresa ? "Editar Empresa" : "Nueva Empresa" }</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nit</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="number"
                        name="nit"
                        placeholder='Ingrese un nit'
                        value={state.nit}
                    />
                </div>
                <div className='form-group'>
                    <label>Nombre de la Empresa</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="text"
                        name="nombre_empresa"
                        placeholder='Ingrese un nombre'
                        value={state.nombre_empresa}
                    />
                </div>

                <div className='form-group'>
                    <label>Contraseña</label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        type="password"
                        name="contrasenia"
                        placeholder='Ingrese una contraseña'
                        value={state.contrasenia}
                    />
                </div>

                <button onClick={handleClick} className='btn btn-primary'>
                    Guardar
                </button>
            </form>
        </div>
    );
}
*/
import React, { useEffect, useState } from "react";
import {crearEmpresaRequest} from "../api/empresa.api.js";
import { useParams, useNavigate } from "react-router-dom";
import { useEmpresas } from "../context/EmpresaContext.js";
import { algunaAccion } from "./apiActions.js";

function BadgeFormEmpresa() {
  const { getEmpresa, updateEmpresa } = useEmpresas();
  const { id_empresa } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    nit: "",
    nombre_empresa: "",
    contrasenia: ""
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const handleClick = (e) => {
    console.log("Empresa creada de manera exitosa");
    console.log(state);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("El Formulario fue enviado exitosamente");
    console.log(state);

    if(id_empresa !== null && id_empresa !== undefined){
      await updateEmpresa(id_empresa, state);
      setState({
        nit: "",
        nombre_empresa: "",
        contrasenia: ""
      });
      navigate("/badges/empresa");
    } else {
      try {
        const response = await crearEmpresaRequest(state);
        console.log(response);
        setState({
          nit: "",
          nombre_empresa: "",
          contrasenia: ""
        });
      } catch (error) {
        console.error(error);
      }
      navigate("/badges/empresa");
    }

    try {
      await algunaAccion(); 
    } catch (error) {
      console.error('Error al realizar alguna acción:', error);
    }
  }

  useEffect(() => {
    const loadEmpresa = async () => {
      if(id_empresa){
        const empresa = await getEmpresa(id_empresa);
        setState({
          nit: empresa.nit,
          nombre_empresa: empresa.nombre_empresa,
          contrasenia: empresa.contrasenia
        });
      }
    }
    loadEmpresa();
  }, [id_empresa, getEmpresa]);

  return (
    <div>
      <h1>{id_empresa ? "Editar Empresa" : "Nueva Empresa" }</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Nit</label>
          <input
            onChange={handleChange}
            className='form-control'
            type="number"
            name="nit"
            placeholder='Ingrese un nit'
            value={state.nit}
          />
        </div>
        <div className='form-group'>
          <label>Nombre de la Empresa</label>
          <input
            onChange={handleChange}
            className='form-control'
            type="text"
            name="nombre_empresa"
            placeholder='Ingrese un nombre'
            value={state.nombre_empresa}
          />
        </div>

        <div className='form-group'>
          <label>Contraseña</label>
          <input
            onChange={handleChange}
            className='form-control'
            type="password"
            name="contrasenia"
            placeholder='Ingrese una contraseña'
            value={state.contrasenia}
          />
        </div>

        <button onClick={handleClick} className='btn btn-primary'>
          Guardar
        </button>
      </form>
    </div>
  );
}

export default BadgeFormEmpresa;




/*class BadgeFormEmpresa extends React.Component{

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
            const response = await crearEmpresaRequest(this.state);
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
                        <label>Nit</label>
                        <input 
                        onChange={this.handleChange} 
                        className='form-control' 
                        type="number" name="nit" 
                        placeholder='Ingrese un nit' 
                        value=/*{this.props.formValues.nombrePunto} {this.state.nit} />
                    </div>

                    <div className='form-group'>
                        <label>Nombre de la Empresa</label>
                        <input 
                        onChange={this.handleChange} 
                        className='form-control' 
                        type="text" name="nombre_empresa" 
                        placeholder='Ingrese un nombre' 
                        value=/*{this.props.formValues.nombrePunto} {this.state.nombre_empresa} />
                    </div>

                    <div className='form-group'>
                        <label>Contraseña</label>
                        <input 
                        onChange={this.handleChange} 
                        className='form-control' 
                        type="text" name="contrasenia" 
                        placeholder='Ingrese una contraseña' 
                        value=/*{this.props.formValues.nombrePunto} {this.state.contrasenia} />
                    </div>

                    <button onClick={this.handleClick} className='btn btn-primary'>Crear Empresa</button>
                </form>
            </div>
        )
    }
}

export default BadgeFormEmpresa;*/