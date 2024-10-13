import React from "react";

// styles
import "../styles/home.css"
// Componentes
import SideBar from '../componentes/sideBar.jsx';
import Cursos from '../componentes/cursos.jsx';
import Metas from '../componentes/metas.jsx'
import Motivacion  from "../componentes/motivacion.jsx";

function Home() {
    return (
        <div className="Home-Login">
            <SideBar />
            <Cursos />
            <Metas />
            <Motivacion />
            
        </div>
    );
}
export default Home;