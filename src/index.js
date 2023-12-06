import React, {StrictMode} from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import BadgesPunto from './pages/BadgesPunto.js';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import BadgeNewPunto from './pages/BadgeNewPunto.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PuntoContextProvider } from './context/PuntoContext.js';
import { ContenedorContextProvider } from './context/ContenedorContext.js';
import { EmpresaContextProvider } from './context/EmpresaContext.js';
import Home from './pages/Home.js';
import Badges from "./pages/Badges.js";
import BadgesContenedor from "./pages/BadgesContenedor.js";
import BadgeNewContenedor from "./pages/BadgeNewContenedor.js";
import BadgesEmpresa from "./pages/BadgesEmpresa.js";
import BadgeNewEmpresa from "./pages/BadgeNewEmpresa.js";
import NotFound from './pages/NotFound.js';
import Layout from './components/Layout.js';
import TopBar from './components/Topbar.js';
import Sidebar from './components/Sidebar.js';
import FAQ from './components/faq.js';
import Direccion from './components/Direccion.js';
import Contacto from './components/Contacto.js';
import Reporte from './components/Reporte.js';
import BadgeFormLogin from './components/BadgeFormLogin.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const container = document.getElementById('app');
const root = createRoot(container);
const isUsuarioAutenticado = true;
const renderizarRegistro = () =>{
    if (isUsuarioAutenticado){
      return <BadgeNewEmpresa to="/badges/empresa/new" />;
    }else{
      return <BadgeFormLogin to="/badges/login"/>;
    }
  }

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PuntoContextProvider>
        <ContenedorContextProvider>
          <EmpresaContextProvider>
            <React.StrictMode>
              <TopBar isUsuarioAutenticado={isUsuarioAutenticado} />
              <Sidebar />
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/faq" element={<FAQ />} />
                        <Route exact path="/direccion" element={<Direccion />} />
                        <Route exact path="/reporte" element={<Reporte/>} />
                        <Route exact path="/contacto" element={<Contacto/>} />
                        <Route exact path="/badges" Component={Badges} />
                        <Route exact path="/badges/punto" element={<BadgesPunto/> }/>
                        <Route exact path="/badges/punto/new" Component={BadgeNewPunto}/>
                        <Route exact path="/badges/punto/edit/:id_punto" Component={{BadgeNewPunto}}/>
                        <Route exact path="/badges/contenedor" element={<BadgesContenedor/>}/>
                        <Route exact path="/badges/contenedor/new" Component={BadgeNewContenedor}/>
                        <Route exact path="/badges/contenedor/edit/:id_contenedor" Component={BadgeNewContenedor}/>
                        <Route exact path="/badges/login" element={<BadgeFormLogin />} />
                        {
                          isUsuarioAutenticado ? (
                            <>
                              <Route exact path="/badges/empresa" element={<BadgesEmpresa/>}/>
                              <Route exact path="/badges/empresa/new" Component={BadgeNewEmpresa}/>
                              <Route exact path="/badges/empresa/edit/:id_empresa" Component={BadgeNewEmpresa}/>
                            </>
                          ) : (
                            <>
                              <Route exact path="/badges/login" element={<BadgeFormLogin />} />
                              <Route exact path="/register" element={renderizarRegistro} />
                            </>
                          )
                        }
                        <Route exact path="*" element={NotFound} />
                      </Routes>
                    </Layout>
                </React.StrictMode>
              </EmpresaContextProvider>
            </ContenedorContextProvider>
          </PuntoContextProvider>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


//ReactDOM.render(<Badge/>, container);
/**
 * <Route exact path="/badges/punto" element={isUsuarioAutenticado ? (<BadgesPunto/> ):(<Navigate to="*"/>)}/>
   <Route exact path="/badges/punto/new" Component={isUsuarioAutenticado ? ({BadgeNewPunto} ):(<Navigate to="*"/>)}/>
   <Route exact path="/badges/punto/edit/:id_punto" Component={isUsuarioAutenticado ? ({BadgeNewPunto} ):(<Navigate to="*"/>)}/>
   <Route exact path="/badges/contenedor" element={isUsuarioAutenticado ? (<BadgesContenedor/> ):(<Navigate to="*"/>)}/>
    <Route exact path="/badges/contenedor/new" Component={isUsuarioAutenticado ? ({BadgeNewContenedor} ):(<Navigate to="*"/>)}/>
 * 
 * 
 * 
 */
/*
<Badge
    firstName="Juan Pablo" 
    lastName="Vanegas" 
    avatar="https://www.gravatar.com/avatar?d=identicon"
    jobTitle="Desarrollador" 
    twitter="917485"
    />

    <PuntoContextProvider>
      <React.StrictMode>
        <BadgesPunto/>
      </React.StrictMode>
    </PuntoContextProvider>

    import React from 'react';
import TopBar from './TopBar'; // Asegúrate de importar el componente

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* Resto de tu aplicación }
      </div>
      );
    }
    
    export default App;
    
*/
