import React from "react";
import { Link } from "react-router-dom";



// IMG
import Logo from '../IMG/LogoOwlSTR .png';

function Header() {
  return (
    <div className="navBar">

      {/*Logo*/}
      <div className="mainNav">
        <button className="openNavBarBox">
          <img src={Logo} className="Open-Nav-Bar" alt="owlStr-Logo"></img>
          
        </button>
        

      {/*Nav*/}
        <ul className="nav" id="Nav">

          <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
            </svg>
            Home
            </Link>
          </li>

          <li>
            <Link to='/' className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Dashboard
            </Link>
          </li>

          <li>
            <Link to='/' className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Orders
            </Link>
          </li>
          <li>
            <Link to='/' className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Products
            </Link>
          </li>
          <li>
            <Link to='/' className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Customers
            </Link>
          </li>
        </ul>

        {/* No Profile Nav */}

        <div className="noProfileNav" id="btn-login-register">
                <Link to='/registro'>
                    <button className="btnLogin" id="RegisterUser"> Registrarse </button>
                </Link>

                <Link to='/login'>
                    <button className="btnLogin"id="LoginUser"> Inicia Sesion </button>
                </Link>
        </div>
      </div>

    </div>
  );
}
export default Header;