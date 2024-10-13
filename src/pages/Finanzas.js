import React from "react";

// styles
import "../styles/home.css"
// Componentes
import SideBar from '../componentes/sideBar.jsx'
import Finanzas from '../componentes/finanzas.jsx';

function Finanzas() {
    return (
        <div className="Home-Login">
            <SideBar />
            <Finanzas />
        </div>
    );
}
export default Home;