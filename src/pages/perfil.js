import React from "react";

// componentes
import Perfil from '../componentes/Profile.jsx';
import SideBar from '../componentes/SideBar.jsx';

// styles
import '../pagesStyles/perfil.css'

function perfil() {
    return (
        <div className=''>
            <SideBar />
            <Perfil />

        </div>
    );
}
export default perfil;