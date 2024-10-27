import React from "react";
// styles
import '../pagesStyles/Login.css'
// Componentes
import Register from '../componentes/Registro.jsx';

function Registro(props) {
    const { setLogueado } = props
    return (
        <div className="Login">
            <Register setLogueado={setLogueado} />
        </div>
    );
}
export default Registro;