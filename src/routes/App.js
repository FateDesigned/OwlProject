import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Componentes
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Inicio from '../pages/Inicio';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Inicio/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/registro' element={<Registro/>}/>
        </Routes>
      
    </Router>
  );
} 

export default App;
