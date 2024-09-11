import React from "react";
import '../styles/Login-Register.css';
import { Link } from "react-router-dom";
import Logo from '../IMG/LogoOwlSTR.svg';

function Iniciosesion() {
    return (
        <div className="Iniciosesion">
            <div class="content">
                <div class="Flogo" id="FLogo-login-registro">
                    <img class="logo" src={Logo} alt="Logo Owl" />
                </div>
                <div class="tlogo">
                    <img src="./IMG/Texto_Owl.png" alt="TextLogo" class="textlogo" />
                </div>
                {/* <!-- Contenido --> */}

                <h2 class="Tittle" id="LoginTittle">INICIAR SESIÓN</h2>

                {/* <!-- Formulario --> */}
                <div class="formRegistro-Login" id="FormLogin">
                    <form>
                        <input id="UserEmail" type="email" placeholder="Correo o Telefono" required />
                        <input id="UserPasword" type="password" placeholder="Contraseña" required />
                    </form>
                </div>
                <div class="botones">
                    <Link to="/">
                        <button class="UserLogin" id="RegisterUser">Iniciar Sesión</button>
                    </Link>
                    <Link to="/registro">
                        <button class="UserRegister" id="LoginUser">Registrarme</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Iniciosesion;