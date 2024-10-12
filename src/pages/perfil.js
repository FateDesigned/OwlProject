import React from "react";

// componentes
import Perfil from '../componentes/profile.jsx';
import SideBar from '../componentes/SideBar.jsx';

// styles
import '../styles/perfil.css'

function perfil (){
    return(
    <div className=''>
        <SideBar />
        <Perfil />
        
    </div>
    );
}
export default perfil;