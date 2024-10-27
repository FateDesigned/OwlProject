import React from "react";

// styles

// Componentes
import SideBar from '../componentes/SideBar.jsx'
import Finanzas from '../componentes/Finanzas.jsx';

function finance() {
    return (
        <div className="finanzas">
            <SideBar />
            <Finanzas />
        </div>
    );
}
export default finance;