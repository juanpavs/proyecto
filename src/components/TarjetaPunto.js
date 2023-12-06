import '../pages/styles/Badges.css';
//import {Link} from 'react-router-dom';

function TarjetaPunto({punto}){
    <div className='Badges__list'>
        <div className='Badges__container'>
           <div>
                <li>
                    <p>{punto.nombre_punto}</p>
                    <p>{punto.barrio}</p>
                    <p>{punto.direccion}</p>
                    <p>{punto.correo}</p>
                    <p>{punto.telefono}</p>
                    <span>{punto.create_at}</span>
                </li>
                    <button>Editar</button>
                    <button>Eliminar</button>
            </div>
        </div>
    </div>
}

export default TarjetaPunto;