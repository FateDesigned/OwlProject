import React from "react";
import '../styles/Background.css'
import Logo from '../IMG/LogoOwlSTR.svg'
import TextLogo from '../IMG/Texto_Owl.png'
import { Link } from "react-router-dom";

function Fondo() {
    return (
        <div class="content">
            {/* <!-- Logo y TextLogo --> */}

            <div className="Fondologo" id="FontLogo-login-registro">
                <img class="Blogo" src={Logo} alt="Logo Owl" className="logo" />
            </div>

            <div className="tlogo">
                <img src={TextLogo} alt="TextLogo" class="textlogo" />

            </div>

            <div className="botones-login" id="btnRectLogin">
                <Link To='/registro'>
                    <button className="btnLogin" id="RegisterUser"> Registrarse </button>
                </Link>

                <Link To='/login'>
                    <button className="btnLogin"id="LoginUser"> Inicia Sesion </button>
                </Link>
            </div>


        </div>
    )
}
export default Fondo;
