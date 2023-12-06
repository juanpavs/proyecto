import React, { useEffect, useState } from 'react';
//import Navbar from "../components/Navbar.js";
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import {Link, useNavigate, useParams} from 'react-router-dom';
//import { getPuntosRequest } from '../api/punto.api.js';
//import TarjetaPunto from '../components/TarjetaPunto.js';
//import { deletePuntoRequest } from '../api/punto.api.js';
import { usePuntos } from '../context/PuntoContext.js';

function PuntosPage(){

    const {puntos, loadPuntos, handleDelete} = usePuntos();
    const navigate = useNavigate();

    const params = useParams();
    console.log(params);

    /*const handleDelete = async (id_punto) => {
        try {
            const response = await deletePuntoRequest(id_punto);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        
    }*/

    //const [puntos, setPuntos] = useState([]);

    useEffect(() =>{  
        loadPuntos();
    }, []);

    function renderMain(){

        if(puntos.length === 0) return <h1>Sin Puntos Registrados</h1>
        return puntos.map(punto => (
            /*<TarjetaPunto punto={punto} key={punto.id_punto}/>*/
            <div className='Badges__list'>
                <div className='Badges__container'>
                    <div>
                        <li key={punto.id_punto}>
                            <p>{punto.nombre_punto}</p>
                            <p>{punto.barrio}</p>
                            <p>{punto.direccion}</p>
                            <p>{punto.correo}</p>
                            <p>{punto.telefono}</p>
                            <span>{punto.create_at}</span>
                        </li>
                        <button onClick={() => handleDelete(punto.id_punto)}>Eliminar</button>
                        <button onClick={() => navigate(`/badges/punto/edit/${punto.id_punto}`)}>Editar</button>
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

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/punto/new" className='btn btn-primary'>
                            Nuevo Punto
                        </Link>
                    </div>
                </div>
                <h1>Puntos</h1>

                {renderMain()}
            </div>
        </React.Fragment>
    )
}

export default PuntosPage;

/* { puntos.map(puntos)
                            } */

/*class BadgesPunto extends React.Component {

    state ={
        data:[
           //const response: await getPuntosRequest(),
           //console.log(),
           getPuntosRequest(),
        ]
    }
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
                        <Link to="/badges/punto/new" className='btn btn-primary'>
                            Nuevo Punto
                        </Link>
                    </div>
                </div>

                <div className='Badges__list'>
                    <div className='Badges__container'>
                        <ul className='list-unstyled'>
                            {this.state.data.map((BadgeFormPunto) =>{
                                return(
                                    <li key={BadgeFormPunto.id_punto}>
                                        <h2>{BadgeFormPunto.nombre_punto}</h2>
                                        <h3>{BadgeFormPunto.barrio}</h3>
                                        <p>{BadgeFormPunto.direccion}</p>
                                        <p>{BadgeFormPunto.correo}</p>
                                        <p>{BadgeFormPunto.telefono}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default BadgesPunto;*/