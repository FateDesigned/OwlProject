import React from "react";
import { Link } from "react-router-dom";



// IMG
import Logo from '../IMG/LogoOwlSTR .png';

function Header() {
  return (
    <div className="NavBar">

      {/*Logo*/}


        <Link to="/" className="OpenSideBar">
          <svg src={Logo} className="Open-Nav Bar"></svg>
        </Link>
        <hr />

      {/*Nav*/}
        <ul className="main-Nav">

          <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
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

        <hr />
        {/* No Profile Nav */}

        <div className="no-Profile-Nav" id="btn-login-register">
                <Link to='/registro'>
                    <button className="btnLogin" id="RegisterUser"> Registrarse </button>
                </Link>

                <Link to='/login'>
                    <button className="btnLogin"id="LoginUser"> Inicia Sesion </button>
                </Link>
        </div>

    </div>
  );
}
export default Header;