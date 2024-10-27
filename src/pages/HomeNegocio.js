import React from "react";

// styles
import "../pagesStyles/home.css"

// Componentes
import CursosN from '../componentes/Cursos.jsx';

import ResumenN from "../componentes/Resumen.jsx"
import SidebarNegocio from "../componentes/SidebarNegocios.jsx";

function Home() {
    return (
        <div className="Home-Login fondo">
            <SidebarNegocio />

        </div>
    );
}
export default Home;