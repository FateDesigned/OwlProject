import React from "react";

// styles

// Componentes
import SideBar from '../componentes/Sidebar.jsx'
import Finanzas from '../componentes/Finanzas.jsx';

function finance() {
    return (
        <div className="Finanzas">
            <SideBar />
            <Finanzas />
        </div>
    );
}
export default finance;