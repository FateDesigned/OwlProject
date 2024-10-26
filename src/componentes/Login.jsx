import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// Styles
import "../pagesStyles/Login.css";
// IMG
import Logo from "../IMG/LogoOwlSTR.svg";
import TextLogo from "../IMG/Texto_Owl.png";


const Iniciosesion = () => {
  
  const navigate = useNavigate();
  const [Nombre_usuario, setNombre_usuario] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        {
          Nombre_usuario,
          Contraseña,
        },
        {

        }
      );

      setMensaje(response.data.message);
      // Redirigir al usuario o realizar otras acciones
      navigate('/home');


    }
    catch (error) {
      if (error.response) {
        setMensaje(error.response.data.message);
      } else {
        setMensaje("Error al conectar con el servidor.");
      }
    }
  };

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
