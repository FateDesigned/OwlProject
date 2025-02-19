import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Styles
import "../pagesStyles/login.css";

// IMG
import TextLogo from "../IMG/Texto_Owl.png";

function Register(props) {
  const { setLoggedIn } = props;

  // Declaracion de variables
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Nombre_usuario, setNombre_usuario] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [showPswrd, setShowPswrd] = useState(false);
  let [modalOpen, setModalOpen] = useState(false);
  
  
  // Carrusel
  let [prev, setPrev] = useState(true);
  let [next, setNext] = useState(false);

  // Seleccion de planes
  // Si Rol Id es 0, se muestra seleccionar plan
  let [Rol_id, setRol_id] = useState(0);

  let Contraseña;

  let ShowFunction = () => {
    setShowPswrd(!showPswrd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password === passwordRepeat) {
        Contraseña = passwordRepeat;
      } else {
        alert("las contraseñas no coinciden");
      }
      const response = await axios.post(
        "http://localhost:3001/usuario/registro",
        {
          Nombre_usuario,
          Contraseña,
          Email,
          Telefono,
          Rol_id,
        },
        {}
      );
      sessionStorage.setItem("token", response.data.token);
      setLoggedIn(true);
      setMensaje(response.data.message);
      navigate("/home");
    } catch (error) {
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

        {/* switch Theme */}
        <input type="checkbox" name="Theme" id="dark-Light" />
        <label id="switchTheme" htmlFor="dark-Light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            className="light"
            id="sun"
            viewBox="0 0 16 16"
          >
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            className="dark"
            id="moon"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
          </svg>
        </label>

        {/* <!-- TextLogo --> */}

        <div className="tlogo">
          <Link to="/">
            <img src={TextLogo} alt="TextLogo" className="textlogo" />
          </Link>
        </div>

        <div className="Flogo" id="bgLogoLogin"></div>

        {/* <!-- Titulo --> */}

        <h2 className="Tittle" id="RegisterTitle">
          REGISTRO
        </h2>

        {/* <!-- Formulario --> */}

        <form
          onSubmit={handleSubmit}
          className="formRegistroLogin"
          id="FormRegistro"
        >
          {/* <!-- Inputs --> */}

          {/* <!-- Input Nombre de Usuario --> */}
          <input
            className="inputLogin-Registro"
            id="UserName"
            value={Nombre_usuario}
            onChange={(e) => setNombre_usuario(e.target.value)}
            type="text"
            placeholder="Escribe tu nombre completo"
            title="Inventa un nombre de usuario"
            required
            autoComplete="name"
          />

          {/* <!-- Input Correo --> */}
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

          {/* <!-- Input Telefono --> */}

          <input
            className="inputLogin-Registro"
            id="UserContact"
            type="tel"
            value={Telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Escribe tu numero de celular"
            title="Ingresa tu número de celular"
            required
          />

          {/* <!-- Input Contraseña --> */}

          <div className="inputLogin-Registro">
            <input
              className="pswrdInput"
              id="UserPasword"
              type={showPswrd ? "text" : "password"}
              placeholder="Crea una Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              title="Inventa una contraseña segura"
              autoComplete="NuevaContraseña1# 9"
              required
            />
            <input
              id="ole1"
              className="showPswrd"
              type="checkbox"
              onChange={ShowFunction}
            />
            <label className="pswrdLabel" htmlFor="ole1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={showPswrd ? "#00ff00" : "black"}
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            </label>
          </div>

          {/* <!-- Input Repetir Contraseña --> */}
          <div className="inputLogin-Registro">
            <input
              id="ole"
              className="showPswrd"
              type="checkbox"
              onChange={ShowFunction}
              />
            <label className="pswrdLabel" htmlFor="ole">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={showPswrd ? "#00ff00" : "black"}
                className="bi bi-eye"
                viewBox="0 0 16 16"
                >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            </label>
            <input
              className="pswrdInput"
              id="userRepeatPswrd"
              type={showPswrd ? "text" : "password"}
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
              autoComplete="ContraseñaRepetida"
              placeholder="Repite la Contraseña"
              title="Mantén tu contraseña segura"
              required
            />
          </div>

          {/* <!-- Botones --> */}
          <div className="botonesBox">
            <button
              type={Rol_id === 0 ? "button" : "submit"}
              className="botonesLogin"
              id="RegisterUser-Btn"
              onClick={() => setModalOpen(true)}
            >
              {Rol_id === 0 ? "Selecciona un plan" : "Registrarme"}
            </button>

            <Link to="/login">
              <button className="botonesLogin" id="LoginUser-Btn">
                Ya tengo una cuenta
              </button>
            </Link>
            <p>{mensaje}</p>
          </div>
        </form>


      </div>

      {/* <!-- Modal Planes--> */}

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modalPlan" onClick={(e) => e.stopPropagation()}>

            {/* Info Planes */}
            <div id="tittlePlanes">

              <h2>Planes de Owl App</h2>
              <h2>selecciona un plan para continuar</h2>
              <p>
                en Owl App tenemos 2 distintas formas de acceder a nuestras
                principales funciones:
              </p>
              
            </div>
            <div className="infoBox">
              {/* Carrusel Info Planes */}

              <button id="btn-prev" className="btnCarrusel" onClick={() => {setNext(false); setPrev(true);}}> ❮ </button>

              <div id={prev?"activePrev":"plan1"} className="infoPlan">
                <h3>Plan Personal</h3>
                <p>
                  este es el plan perfecto para quien le encanta
                  mantener un control preciso de sus finanzas <br /> puede acceder a las siguientes funciones:
                </p>
                <div>

                  <ol className="liFunctions">
                    <li>Gestion de Ingresos y Gastos</li>
                    <li>Cursos sobre finanzas Personales</li>
                    <li>Control de facturas electronicas</li>
                    <li>Notas de credito</li>
                    <li>digitalización de facturas</li>
                    
                  </ol>
                </div>
              </div>

              <div id={next?"activeNext":"plan2"} className="infoPlan">
                <h3>Plan Empresarial</h3>
                <p>
                  Accede a todas las funciones de Owl App de forma gratuita
                </p>
              </div>

              <button id="btn-next" className="btnCarrusel" onClick={() => {setNext(true); setPrev(false);}}> ❯ </button>

              {/* Select Planes*/}
                <select
                  id="SelectPlan"
                  className="planesSelect"
                  defaultValue={Rol_id}
                  onChange={(e) => setRol_id(e.target.value)}
                >
                  Selecciona un plan:
                  <option value="0">Selecciona</option>
                  <option name="Plan Personal" value="1">
                    Plan Personal
                  </option>
                  <option name="Plan Empresarial" value="2">
                    Plan Empresarial
                  </option>
                </select>
            </div>


            <div className="selectPoliticsBox">
            {/* Politicas de privacidad */}
              <input
                type="checkbox"
                name="PrivacyPolitic"
                id="PrivacyPolitic"
                />
              <p id="politicsText">
                Declaro y acepto los terminos y politicas de privacidad
              </p>
                  {/* Botones */}
            {/*Boton Registrarse  */}
            <div className="modalBtnBox">

              <button
                className="botonesModal"
                type="submit"
                form="FormRegistro"
                onClick={() => handleSubmit}
                >
                Registrarse
              </button>
            {/* Boton Cancelar */}
              <button
                className="botonesModal"
                id="CancelPlan"
                onClick={() => {
                  setRol_id(0);
                  setModalOpen(false);
                }}
                >
                Cancelar
              </button>

            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Register;
