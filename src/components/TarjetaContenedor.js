import '../pages/styles/Badges.css';

function TarjetaContenedor({contenedor}){
    <div className='Badges__list'>
        <div className='Badges__container'>
           <div>
                <li>
                    <p>{contenedor.nombre_contenedor}</p>
                    <p>{contenedor.direccion_contenedor}</p>
                    <p>{contenedor.id_punto}</p>
                    <span>{contenedor.create_at}</span>
                </li>
                    <button>Editar</button>
                    <button>Eliminar</button>
            </div>
        </div>
    </div>
}

export default TarjetaContenedor;