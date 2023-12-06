import React, { useEffect, useState } from 'react';
//import Navbar from "../components/Navbar.js";
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg';
import {Link, useNavigate, useParams} from 'react-router-dom';
//import {getContenedoresRequest} from '../api/contenedor.api.js';
import { useContenedores } from '../context/ContenedorContext.js';
function ContenedoresPage(){

    const {contenedores, loadContenedores, handleDelete} = useContenedores();
    const navigate = useNavigate();

    const params = useParams();
    console.log(params);

    /*useEffect(() =>{
        async function loadContenedores() {
            const response = await getContenedoresRequest();
            //console.log(response.data);
            setContenedores(response.data); 
        }
        loadContenedores()
    }, [])*/

    useEffect(() =>{  
        loadContenedores();
    }, []);

    function renderMain(){

        if(contenedores.length === 0) return <h1>Sin Contenedores Registrados</h1>
        return contenedores.map(contenedor => (
            /*<TarjetaPunto punto={punto} key={punto.id_punto}/>*/
            <div className='Badges__list'>
                <div className='Badges__container'>
                    <div>
                        <li key={contenedor.id_contenedor}>
                            <p>{contenedor.nombre_contenedor}</p>
                            <p>{contenedor.direccion_contenedor}</p>
                            <p>{contenedor.correo}</p>
                            <p>{contenedor.id_punto}</p>
                            <span>{contenedor.create_at}</span>
                        </li>
                        <button onClick={() => handleDelete(contenedor.id_contenedor)}>Eliminar</button>
                        <button onClick={() => navigate(`/badges/contenedor/edit/${contenedor.id_contenedor}`)}>Editar</button>
                    </div>
                </div>
            </div>
        ))
    }

    return(
        <React.Fragment>
        <div>
                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>

                        </div>
                    </div>
                </div>

                <div className='Badge__container'>
                    <div className='Badges__buttons'>
                        <Link to="/badges/contenedor/new" className='btn btn-primary'>
                            Nuevo Contenedor
                        </Link>
                    </div>
                </div>
                <h1>Contenedores</h1>

                {renderMain()}
        </div>
        </React.Fragment>
    )
}

export default ContenedoresPage;

/*class BadgesContenedor extends React.Component {

    state ={}
    render(){
        return(
            <div>
                <Navbar/>

                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                        <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
                        </div>
                    </div>
                </div>

                <div className='Badge__container'>
                    <div className='Badges__buttons'>
                        <Link to="/badges/contenedor/new" className='btn btn-primary'>
                            Nuevo Contenedor
                        </Link>
                    </div>
                </div>

                <div className='Badges__list'>
                    <div className='Badges__container'>

                    </div>
                </div>
            </div>
        )
    }
}

export default BadgesContenedor;

//codigo b
{
                contenedores.map(contenedor => (
                    <div className='Badges__list'>
                        <div className='Badges__container'>
                            <div>
                                <h2>{contenedor.nombre_contenedor}</h2>
                                <p>{contenedor.direccion_contenedor}</p>
                                <p>{contenedor.correo}</p>
                                <p>{contenedor.id_punto}</p>
                                <span>{contenedor.create_at}</span>
                            </div>
                        </div>
                    </div>
                    
                ))
            }





*/