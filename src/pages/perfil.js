import React from "react";

// componentes
import Perfil from '../componentes/profile.jsx';
import SideBar from '../componentes/sideBar.jsx';

// styles
import '../pagesStyles/perfil.css'

function perfil (){
    return(
    <div className=''>
        <SideBar />
        <Perfil />
        
    </div>
    );
}
export default perfil;