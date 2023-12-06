import React from "react";
//import Navbar from "../components/Navbar.js";
import header from "../images/badge-header.svg";
import './styles/BadgeNew.css';
import BadgeFormEmpresa from "../components/BadgeFormEmpresa.js";

class BadgeNewEmpresa extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className='BadgeNew__hero'>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <BadgeFormEmpresa/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNewEmpresa;