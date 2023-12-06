import React from 'react';
import './styles/Badges.css'
import {Link} from 'react-router-dom';

class Badges extends React.Component {
    render(){
        return(
            <div>
                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>

                        </div>
                    </div>
                </div>

                <div className='Badge__container'>
                    <div className='Badges__buttons'>
                        <Link to="/badges/contenedor" className='btn btn-primary'>
                            Contenedores
                        </Link>
                    </div>
                </div>

                <div className='Badge__container'>
                    <div className='Badges__buttons'>
                        <Link to="/badges/empresa" className='btn btn-primary'>
                            Empresas
                        </Link>
                    </div>
                </div>

                <div className='Badge__container'>
                    <div className='Badges__buttons'>
                        <Link to="/badges/punto" className='btn btn-primary'>
                            Puntos
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badges;