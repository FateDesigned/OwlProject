import React from "react";

// styles

// Componentes
import SideBar from '../componentes/sideBar.jsx'
import Finanzas from '../componentes/finanzas.jsx';

function finance() {
    return (
        <div className="finanzas">
            <SideBar />
            <Finanzas />
        </div>
    );
}
export default finance;