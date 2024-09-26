import React from "react";
import { Link } from "react-router-dom";

// Styles
import '../styles/Login.css'
// IMG
import Logo from '../IMG/LogoOwlSTR.svg';
import TextLogo from '../IMG/Texto_Owl.png'

function Iniciosesion() {
    return (
        <div className="Login-Registro">
            <div className="content">
                {/* Logos-Img */}

                <div className="Flogo" id="FLogo-login-registro">
                    <img className="logo" src={Logo} alt="Logo Owl" />
                </div>
                <div className="tlogo">
                    <img src={TextLogo} alt="TextLogo" className="textlogo" />
                </div>

                {/* <!-- Contenido --> */}

                <h2 className="Tittle" id="LoginTittle">INICIAR SESIÓN</h2>

                {/* <!-- Formulario --> */}
                
                    <form className="formRegistroLogin" id="FormLogin">
                        <input className="inputLogin-Registro" id="UserEmail" type="email" placeholder="Correo o Telefono" required />
                        <input className="inputLogin-Registro" id="UserPasword" type="password" placeholder="Contraseña" required />
                    </form>
                {/* Botones */}
                <div className="botones">
                    <Link to='/'>
                        <button className="btnLoginRegistro" id="RegisterUser-login">Iniciar Sesión</button>
                    </Link>

                    <Link to='/registro'>
                        <button className="btnLoginRegistro" id="LoginUser-login">Registrarme</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
export default Iniciosesion;