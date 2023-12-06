import React from 'react';
import ContactoSection from './ContactoSection';
import './styles/Contacto.css';

const Contacto = () => {
    return(
        <div className="contacto">
            <ContactoSection
                question="Medios de Contacto"
                answer="- Telefono Celular: 310 740 4471.
                - Correo: Juanpavs12@gmail.com."
            />
        </div>
    );
}

export default Contacto;