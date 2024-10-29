import React from "react";

// styles
import "../pagesStyles/home.css"

// Componentes
import SidebarNegocio from "../componentes/SidebarNegocios.jsx";
import Inventario from "../componentes/Inventario.jsx";
import Payroll from "../componentes/Empleados.jsx";
function Inventory() {
    return (
        <div className="Home-Login fondo">
            <SidebarNegocio />
            <Inventario />
            <Payroll />

        </div>
    );
}
export default Inventory;