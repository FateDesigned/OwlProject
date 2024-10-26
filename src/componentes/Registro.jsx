import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Styles
import "../pagesStyles/Login.css";

// IMG
import Logo from "../IMG/LogoOwlSTR.svg";
import TextLogo from "../IMG/Texto_Owl.png";

function Register(props) {
  const { setLogueado } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/registro",
        {
          Nombre_usuario,
          Contraseña,
        },
        {}
      );

      setMensaje(response.data.message);
      // Redirigir al usuario o realizar otras acciones
      if (Nombre_usuario && Contraseña) {
        setLogueado(true);
        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        setMensaje(error.response.data.message);
        alert(mensaje);
      } else {
        setMensaje("Error al conectar con el servidor.");
      }
    }
  };
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Nombre_usuario, setNombre_usuario] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

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

        <h2 className="Tittle" id="RegisterTitle">
          REGISTRO
        </h2>
        {/* <!-- Formulario --> */}

        <form
          onSubmit={handleSubmit}
          className="formRegistroLogin"
          id="FormRegistro"
        >
          <input
            className="inputLogin-Registro"
            id="UserName"
            value={Nombre_usuario}
            onChange={(e) => setNombre_usuario(e.target.value)}
            type="text"
            placeholder="Crea un nombre de usuario"
            title="Inventa un nombre de usuario"
            required
            autoComplete="name"
          />

          <input
            className="inputLogin-Registro"
            id="UserEmail"
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
            title="Ingresa tu correo electrónico"
            required
          />
          <input
            className="inputLogin-Registro"
            id="UserContact"
            type="number"
            placeholder="Escribe tu numero de celular"
            title="Ingresa tu número de celular"
            required
          />

          <input
            className="inputLogin-Registro"
            id="UserPasword"
            type="password"
            placeholder="Crea una Contraseña"
            title="Inventa una contraseña segura"
            required
          />

          <input
            className="inputLogin-Registro"
            id="userRepeatPswrd"
            type="password"
            value={Contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="Repite la Contraseña"
            title="reescribe la contraseña inventada"
            required
          />
          <div className="botones">
            <button
              type="submit"
              className="btnRegister"
              id="RegisterUser-login"
            >
              Registrarme
            </button>

            <Link to="/login">
              <button className="btnLogin" id="LoginUser-login">
                Ya tengo una cuenta
              </button>
            </Link>
          </div>
        </form>

        {/* <!-- Botones --> */}
      </div>
    </div>
  );
}
export default Register;
