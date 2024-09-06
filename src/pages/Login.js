import React from "react";
import Iniciosesion from '../componentes/Login';
import Header from "../componentes/Header";

function Login() {
    return (
        <div className="Login">
            <Iniciosesion />
            <Header/>
            
        </div>
    );
}
export default Login;