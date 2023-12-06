import React from 'react';
import DireccionSection from './DireccionSection';
import './styles/Direccion.css';
import panoramicaImage from'../assets/panoramicaUCP.jpg'

const Direccion = () => {
    return(
        <div className="direccion">
            <DireccionSection
                question="Lugar de Ubicación"
                answer="Carrera 21 No. 49-95 Av. de las Américas Pereira, Colombia."
                imagePath={panoramicaImage}
            />
        </div>
  );
}

export default Direccion;