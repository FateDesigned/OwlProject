import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Componentes
import Login from '../pages/Login.js';
import Registro from '../pages/Registro.js';
import Home from '../pages/Home.js';
import Perfil from '../pages/Perfil.js';
import Finanzas from '../pages/Finanzas.js';
import Ajustes from '../pages/Ajustes.js'
import HomeN from '../pages/HomeNegocio.js'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    sessionStorage.setItem("loggedIn", loggedIn);
  },[loggedIn])
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
              <Route exact path='/Login' element={<Login />} />
              <Route exact path='/HomeN' element={<HomeN />} />
            </>) : (<>
              <Route exact path='/' element={<Registro setLogueado={setLoggedIn} />} />
              <Route exact path='/Login' element={<Login setLogueado={setLoggedIn} />} />
            </>
          )}

        </Routes>
      </Router>
    </>
  );
}

export default App;
