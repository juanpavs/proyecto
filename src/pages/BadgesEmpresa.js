import React, { useEffect, useState } from 'react';
//import Navbar from "../components/Navbar.js";
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg';
import {Link, useNavigate, useParams} from 'react-router-dom';
//import {getEmpresasRequest} from '../api/empresa.api.js';
import { useEmpresas } from '../context/EmpresaContext.js';

function EmpresaPage(){
    //const [empresas, setEmpresas] = useState([]);

    const {empresas, loadEmpresas, handleDelete} = useEmpresas();
    const navigate = useNavigate();

    const params = useParams();
    console.log(params);

    /*useEffect(() =>{
        async function loadEmpresas() {
            const response = await getEmpresasRequest();
            //console.log(response.data);
            setEmpresas(response.data); 
        }
        loadEmpresas()
    }, [])*/

    useEffect(() =>{  
        loadEmpresas();
    }, []);

    function renderMain(){

        if(empresas.length === 0) return <h1>Sin Empresas Registrados</h1>
        return empresas.map(empresa => (
            /*<TarjetaPunto punto={punto} key={punto.id_punto}/>*/
            <div className='Badges__list'>
                <div className='Badges__container'>
                    <div>
                        <li key={empresa.id_empresa}>
                            <p>{empresa.nit}</p>
                            <p>{empresa.nombre_empresa}</p>
                            <p>{empresa.contrasenia}</p>
                        </li>
                        <button onClick={() => handleDelete(empresa.id_empresa)}>Eliminar</button>
                        <button onClick={() => navigate(`/badges/empresa/edit/${empresa.id_empresa}`)}>Editar</button>
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
                        <Link to="/badges/empresa/new" className='btn btn-primary'>
                            Nueva Empresa
                        </Link>
                    </div>
                </div>
                <h1>Empresas</h1>

                {renderMain()}
                
            </div>
        </React.Fragment>
    )
}

export default EmpresaPage;


/*
{
    empresas.map(empresa => (
        <div className='Badges__list'>
            <div className='Badges__container'>
                <div>
                    <h2>{empresa.id_empresa}</h2>
                    <p>{empresa.nit}</p>
                     <p>{empresa.nombre_empresa}</p>
                </div>
            </div>
        </div>
    ))
}

*/

/*class BadgesEmpresa extends React.Component {

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
                        <Link to="/badges/empresa/new" className='btn btn-primary'>
                            Nueva Empresa
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

export default BadgesEmpresa;*/