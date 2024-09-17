import React from "react";
import { Link } from "react-router-dom";


// Styles
import '../styles/Background.css'
import Logo from '../IMG/LogoOwlSTR.svg'
import TextLogo from '../IMG/Texto_Owl.png'


function Fondo() {
    return (
        <div className="content-Background">
            {/* <!-- Logo de logo--> */}

            <div className="Fondologo" id="Background-Logo">
                <img className="B-logo" src={Logo} alt="Logo Owl"/>
            </div>

            <div className="tlogo">
                <img src={TextLogo} alt="TextLogo" class="textlogo" />

            </div>

            <div className="botones-login" id="btnRectLogin">
                <Link to='/registro'>
                    <button className="btnLogin" id="RegisterUser"> Registrarse </button>
                </Link>

                <Link to='/login'>
                    <button className="btnLogin"id="LoginUser"> Inicia Sesion </button>
                </Link>
            </div>


        </div>
    )
}
export default Fondo;
