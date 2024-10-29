import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


// Styles
import "../pagesStyles/Login.css";
// IMG
import Logo from "../IMG/LogoOwlSTR.svg";
import TextLogo from "../IMG/Texto_Owl.png";


const Iniciosesion = (props) => {
  
  const navigate = useNavigate();
  const { setLoggedIn } = props;
  const [Nombre_usuario, setNombre_usuario] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.get('http://localhost:3001/usuario/login').then((response) => {
        console.log(response.target)
        
      })
      .then(response => {
        if (response.Contraseña === Contraseña ) {
          let respuesta = response[0];
          sessionStorage.setItem('IDusuario', respuesta.IDusuario, {path: "/"});
          sessionStorage.setItem('Nombre_U', respuesta.Nombre_Usuario, {path: "/"});
          sessionStorage.setItem('Correo', respuesta.Contraseña, {path: "/"});
          setLoggedIn(true);
          navigate("/homeL");

        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })

    }catch(error) {
      if (error.response) {
        setMensaje(error.response.data.message);
        alert(mensaje);
      } else {
        setMensaje("Error al conectar con el servidor.");
      };
  };
}

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

        <h2 className="Tittle" id="LoginTittle">
          INICIAR SESIÓN
        </h2>

        {/* <!-- Formulario --> */}

        <form
          className="formRegistroLogin"
          id="FormLogin"
          onSubmit={handleSubmit}
        >
          <label htmlFor="UserEmail">
            
          </label>
          <input
            className="inputLogin-Registro"
            id="UserEmail"
            type="name"
            placeholder="Ingrese nombre de Usuario"
            value={Nombre_usuario}
            onChange={(e) => setNombre_usuario(e.target.value)}
            required
          />

          <input
            className="inputLogin-Registro"
            id="UserPasword"
            type="password"
            value={Contraseña}
            onChange={(e)=> setContraseña(e.target.value)}
            placeholder="Contraseña"
            required
          />
        <div className="botones">
          
            <button type="submit" className="btnLoginRegistro" id="RegisterUser-login">
              Iniciar Sesión
            </button>
          

          <Link to="/">
            <button type="submit" htmlFor="FormLogin" className="btnLoginRegistro" id="LoginUser-login">
              Registrarme
            </button>
          </Link>
          <p>{mensaje}</p>
        </div>
        </form>

        {/* Botones */}
      </div>
    </div>
  );
};
export default Iniciosesion;
