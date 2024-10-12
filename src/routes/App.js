import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Componentes
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Home from '../pages/Home';
import Perfil from '../pages/perfil';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Registro/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/registro' element={<Registro/>}/>
          <Route exact path='/perfil' element={<Perfil/>}/>
        </Routes>
    </Router>
  );
} 

export default App;
