import React from "react";
import '../styles/Login-Register.css';
import Logo from '../IMG/LogoOwlSTR.svg';
import TextLogo from '../IMG/Texto_Owl.png';
import { Link } from "react-router-dom";

function Register() {
    return (
        <div class="content">
            {/* <!-- Logo y TextLogo --> */}

            <div class="Flogo" id="FontLogo-login-registro">
                <img class="logo" src={Logo} alt="Logo Owl" className="logo" />
            </div>
            <div class="tlogo">
                <img src={TextLogo} alt="TextLogo" class="textlogo" />
            </div>
            {/* <!-- Contenido --> */}

            <h2 class="Tittle" id="RegisterTitle">REGISTRO</h2>
            {/* <!-- Formulario --> */}

            <div class="formRegistroLogin" id="FormRegistro">
                <form className="Registro-Login">

                    <input className="inputLogin-Registro" id="UserName" type="text" placeholder="Crea un nombre de usuario"
                        title="Inventa un nombre de usuario" required autocomplete="name" />

                    <input className="inputLogin-Registro" id="UserEmail" type="email" placeholder="Correo Electrónico"
                        title="Ingresa tu correo electrónico" required />

                    <input className="inputLogin-Registro" id="UserContact" type="number" placeholder="Escribe tu numero de celular"
                        title="Ingresa tu número de celular" required />
                        
                    <input className="inputLogin-Registro" id="UserPasword" type="password" placeholder="Crea una Contraseña"
                        title="Inventa una contraseña segura" required />

                    <input className="inputLogin-Registro" id="userRepeatPswrd" type="password" placeholder="Repite la Contraseña"
                        title="reescribe la contraseña inventada" required />
                        
                </form>
            </div>
            {/* <!-- Botones --> */}

            <div className="botones">
                <Link to='/'>
                    <button className="btnRegister" id="RegisterUser">Registrarme</button>
                </Link>

                <Link to='/login'>
                    <button className="btnLogin" id="LoginUser">Ya tengo una cuenta</button>
                </Link>
            </div>
        </div>
    )
}
export default Register;
