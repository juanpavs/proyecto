import '../pages/styles/Badges.css';

function TarjetaEmpresa({empresa}){
    <div className='Badges__list'>
        <div className='Badges__container'>
           <div>
                <li>
                    <p>{empresa.nit}</p>
                    <p>{empresa.nombre_empresa}</p>
                    <span>{empresa.contrasenia}</span>
                </li>
                    <button>Editar</button>
                    <button>Eliminar</button>
            </div>
        </div>
    </div>
}

export default TarjetaEmpresa;