import React from "react";
//import Navbar from "../components/Navbar.js";
import header from "../images/badge-header.svg";
import './styles/BadgeNew.css';
//import Badge from "../components/Badge.js";
import BadgeFormPunto from "../components/BadgeFormPunto.js";
class BadgeNewPunto extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className='BadgeNew__hero'>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <BadgeFormPunto/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNewPunto;


/*
<div className="col-6">
    <Badge
        firstName="Juan Pablo" 
        lastName="Vanegas" 
        avatar="https://www.gravatar.com/avatar?d=identicon"
        jobTitle="Desarrollador" 
        twitter="917485"
         />
    </div>
*/