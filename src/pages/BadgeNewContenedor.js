import React from "react";
import './styles/BadgeNew.css';
import BadgeFormContenedor from "../components/BadgeFormContenedor.js";

class BadgeNewContenedor extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className='BadgeNew__hero'>

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <BadgeFormContenedor/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNewContenedor;
