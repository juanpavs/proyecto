import React, {Component} from "react";
import { Link } from 'react-router-dom';
import './styles/Home.css';

export default class Home extends Component{
    render(){
        return(
            <div className="Home">
              <div className="container">
                <div className="row">
                    <div className="Home__col col-12 col-md-4">
                        <h1>Sistema de Recoleccion de Pilas</h1>
                        <Link className="btn btn-primary" to="/badges">
                            Menu Principal
                        </Link>

                            <div className="Home__col d-none d-md-block col-md-8"></div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}
