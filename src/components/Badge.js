import React from 'react';
import confLogo from '../images/badge-header.svg';
import "./styles/Badge.css";

class Badge extends React.Component{
    render(){
        return(
          <div className="Badge">
            <div className='Badge__header'>
                <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={this.props.avatar} alt="Avatar" />
                <h1>
                    {this.props.nombre_punto}
                </h1>
                <div>{this.props.barrio}</div>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.direccion}</h3>
                <div>{this.props.correo}</div>
                <div>{this.props.telefono}</div>
            </div>

            <div className="Badge__footer"></div>
          </div>  
        )
    }
}

export default Badge;