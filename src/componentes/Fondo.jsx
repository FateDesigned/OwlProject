import React from "react";
import '../styles/Background.css'
import Logo from '../IMG/LogoOwlSTR.svg'

function Fondo() {
    return (
        <div class="content">
            {/* <!-- Logo y TextLogo --> */}

            <div class="Flogo" id="FonlLogo-login-registro">
                <img class="logo" src={Logo} alt="Logo Owl" className="logo" />
            </div>
            <div class="tlogo">
                <img src="../IMG/Texto Owl.png" alt="TextLogo" class="textlogo" />
            </div>


        </div>
    )
}
export default Fondo;
