import React from "react";

// styles
import "../styles/home.css"
// Componentes
import SideBar from '../componentes/SideBar.jsx';
import Cursos from '../componentes/cursos.jsx';

function Home() {
    return (
        <div className="Home-Login">
            <SideBar />
            <Cursos />
            
            
        </div>
    );
}
export default Home;