import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import Login from '../pages/Login.js';
import Registro from '../pages/Registro.js';
import Home from '../pages/Home.js';
import Perfil from '../pages/perfil.js';
import Finanzas from '../pages/Finanzas.js';
import Ajustes from '../pages/Ajustes.js'
import HomeN from '../pages/HomeNegocio.js'
import Inventario from "../pages/Contabilidad.js";


function App() {
  
  let [loggedIn, setLoggedIn] = useState(true);
  
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      // Verificar token en el servidor o localmente si es necesario
      setLoggedIn(true);
    }else{
      setLoggedIn(false);
    }
  }, []);
  return (
    <>
      <Router>
        <Routes>

          {loggedIn ? (
            <>
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/finanzas' element={<Finanzas />} />
              <Route exact path='/Perfil' element={<Perfil />} />
              <Route exact path='/ajustes' element={<Ajustes />} />
              <Route exact path='/' element={<Registro />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/homeN' element={<HomeN />} />
              <Route exact path='/inventario' element={<Inventario />} />
            </>) : (<>
              <Route exact path='/' element={<Registro setLogueado={setLoggedIn} />} />
              <Route exact path='/login' element={<Login setLogueado={setLoggedIn} />} />
            </>
          )}

        </Routes>
      </Router>
    </>
  );
}

export default App;
