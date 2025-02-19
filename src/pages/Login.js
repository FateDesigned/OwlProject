import React from "react";

// styles
import '../pagesStyles/login.css'

// Componentes
import Iniciosesion from "../componentes/Login.jsx";


function login() {
    return (
        <div className="Login">
            <Iniciosesion />
        </div>
    );
}
export default login;