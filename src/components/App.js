import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { PuntoContextProvider } from '../context/PuntoContext.js';
import Layout from './Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound.js';
import Badges from "../pages/Badges.js";
import BadgesPunto from "../pages/BadgesPunto.js";
import BadgeNewPunto from "../pages/BadgeNewPunto.js";
import BadgesContenedor from "../pages/BadgesContenedor.js";
import BadgeNewContenedor from "../pages/BadgeNewContenedor.js";
import BadgesEmpresa from "../pages/BadgesEmpresa.js";
import BadgeNewEmpresa from "../pages/BadgeNewEmpresa.js";


function App(){
    return(
            <PuntoContextProvider>
            <React.StrictMode>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={Home}/>
                        <Route exact path="/badges" element={Badges} />
                        <Route exact path="/badges/punto" element={<BadgesPunto/>}/>
                        <Route exact path="/badges/punto/new" element={BadgeNewPunto}/>
                        <Route exact path="/badges/punto/edit/:id_punto" element={BadgeNewPunto}/>
                        <Route exact path="/badges/contenedor" element={<BadgesContenedor/>}/>
                        <Route exact path="/badges/contenedor/new" element={BadgeNewContenedor}/>
                        <Route exact path="/badges/contenedor/edit/:id_contenedor" element={BadgeNewContenedor}/>
                        <Route exact path="/badges/empresa" element={<BadgesEmpresa/>}/>
                        <Route exact path="/badges/empresa/new" element={BadgeNewEmpresa}/>
                        <Route exact path="/badges/empresa/edit/:id_empresa" element={BadgeNewEmpresa}/>
                        <Route exact path="*" element={NotFound} />
                    </Routes>
                </Layout>
                </React.StrictMode>
            </PuntoContextProvider>
    )
}

export default App;