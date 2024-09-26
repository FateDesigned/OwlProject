import React from "react";
import { Link } from "react-router-dom";

// Styles
import '../styles/Login.css'

// IMG
import Logo from '../IMG/LogoOwlSTR.svg';
import TextLogo from '../IMG/Texto_Owl.png';


function Register() {
    return (
        <div className="Login-Registro">
                    <div className="content">
                {/* <!-- Logo y TextLogo --> */}

                <div className="Flogo" id="FontLogo-login-registro">
                    <img src={Logo} alt="Logo Owl" className="logo" />
                </div>
                <div className="tlogo">
                    <img src={TextLogo} alt="TextLogo" className="textlogo" />
                </div>
                {/* <!-- Contenido --> */}

                <h2 className="Tittle" id="RegisterTitle">REGISTRO</h2>
                {/* <!-- Formulario --> */}

                
                <form className="formRegistroLogin" id="FormRegistro">

                    <input className="inputLogin-Registro" id="UserName" type="text" placeholder="Crea un nombre de usuario"
                        title="Inventa un nombre de usuario" required autoComplete="name" />

                    <input className="inputLogin-Registro" id="UserEmail" type="email" placeholder="Correo Electrónico"
                        title="Ingresa tu correo electrónico" required />

                    <input className="inputLogin-Registro" id="UserContact" type="number" placeholder="Escribe tu numero de celular"
                        title="Ingresa tu número de celular" required />
                        
                    <input className="inputLogin-Registro" id="UserPasword" type="password" placeholder="Crea una Contraseña"
                        title="Inventa una contraseña segura" required />

                    <input className="inputLogin-Registro" id="userRepeatPswrd" type="password" placeholder="Repite la Contraseña"
                        title="reescribe la contraseña inventada" required />
                        
                </form>
                
                {/* <!-- Botones --> */}

                <div className="botones">
                    <Link to='/'>
                        <button className="btnRegister" id="RegisterUser-login">Registrarme</button>
                    </Link>

                    <Link to='/login'>
                        <button className="btnLogin" id="LoginUser-login">Ya tengo una cuenta</button>
                    </Link>
                </div>
            </div>
        </div>
    
    )
}
export default Register;
