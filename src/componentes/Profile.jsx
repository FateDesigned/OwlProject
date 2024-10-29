import React from 'react';
import './styles/profile.css'; // Asegúrate de tener el archivo CSS con los estilos

const Perfil = () => {
  // Datos del usuario (pueden venir de props o de una API)
  const usuario = {
    nombre: 'Dilan Chaverra',
    bio: 'Desarrollador web apasionado por la creación de experiencias interactivas y dinámicas en la web.',
    email: 'dilan.chaverra@example.com',
    telefono: '+57 312 456 789',
    Movimientos: [
      '1: (Egreso) Compra de curso Finanzas como emprender de cero',
      '2: (Egreso) Gasto en Soat (Moto)',
      '3:(Ingreso) Pago por Optimización de Sitios Web',
    ],
    fotoPerfil: 'https://via.placeholder.com/150',
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={usuario.fotoPerfil} alt="Foto de Perfil" className="profile-picture" />
        <h1 className="username">{usuario.nombre}</h1>
        <p className="bio">{usuario.bio}</p>
        <div className="contact-info">
          <p>Email: {usuario.email}</p>
          <p>Teléfono: {usuario.telefono}</p>
        </div>
        <div className="action-buttons">
          <button className="btn edit-btn">Editar Perfil</button>
          <button className="btn logout-btn">Cerrar Sesión</button>
        </div>
      </div>
      <div className="profile-content">
        <h2>Mis Ultimos Moviemientos</h2>
        <ul className="posts-list">
          {usuario.Movimientos.map((publicacion, index) => (
            <li key={index} className="post-item">{publicacion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Perfil;
