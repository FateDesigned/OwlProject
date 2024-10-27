import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from "js-cookie";


// Componentes
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Finanzas from '../pages/Finanzas';
import Ajustes from '../pages/Ajustes'
import HomeN from '../pages/HomeNegocio'

function App() {
  const [logueado, setLogueado] = useState(true)

  useEffect(() => {
    Cookies.set("logueado", logueado);
  },[logueado])
  return (
    <>
      <Router>
        <Routes>

          {logueado ? (
            <>
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/finanzas' element={<Finanzas />} />
              <Route exact path='/perfil' element={<Perfil />} />
              <Route exact path='/ajustes' element={<Ajustes />} />
              <Route exact path='/' element={<Registro />} />
              <Route exact path='/Login' element={<Login />} />
              <Route exact path='/HomeN' element={<HomeN />} />
            </>) : (<>
              <Route exact path='/' element={<Registro setLogueado={setLogueado} />} />
              <Route exact path='/Login' element={<Login setLogueado={setLogueado} />} />
            </>
          )}

        </Routes>
      </Router>
    </>
  );
}

export default App;
