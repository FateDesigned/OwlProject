import React from "react";

// styles
import "../pagesStyles/home.css"

// Componentes
import SideBar from '../componentes/sideBar.jsx';
import Cursos from '../componentes/cursos.jsx';
import Metas from '../componentes/metas.jsx'
import Motivacion  from "../componentes/motivacion.jsx";
import Resumen from "../componentes/resumen.jsx"

function Home() {
    return (
        <div className="Home-Login fondo">
            <SideBar />
            <Resumen />
            <Cursos />
            <Metas />
            <Motivacion />
            
        </div>
    );
}
export default Home;