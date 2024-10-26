import React, { useState } from 'react';


// Styles
import './styles/ajustes.css'


const Settings = () => {
  // Estado para el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Estados para cambiar contraseña
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Manejar el cambio de modo oscuro
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Aquí podrías agregar lógica adicional para aplicar el modo oscuro globalmente
  };

  // Manejar el envío del formulario de cambio de contraseña
  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Aquí agregarías la lógica para actualizar la contraseña, por ejemplo, una llamada a la API
      alert('Contraseña actualizada exitosamente');
      // Resetear campos
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      alert('Las nuevas contraseñas no coinciden');
    }
  };

  return (
    <div className={`settings-container ${isDarkMode ? 'dark' : ''}`}>
      <h2>Ajustes</h2>

      {/* Modo Oscuro */}
      <div className="setting-item">
        <label htmlFor="darkModeToggle">Modo Oscuro:</label>
        <input
          type="checkbox"
          id="darkModeToggle"
          checked={isDarkMode}
          onChange={handleDarkModeToggle}
        />
      </div>

      {/* Cambiar Contraseña */}
      <div className="setting-item">
        <h3>Cambiar Contraseña</h3>
        <form onSubmit={handlePasswordChange} className="password-form">
          <div className="form-group">
            <label htmlFor="currentPassword">Contraseña Actual:</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">Nueva Contraseña:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Nueva Contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn save-btn">Guardar Cambios</button>
        </form>
      </div>

      {/* Información Adicional */}
      <div className="setting-item">
        <h3>Información Personal</h3>
        {/* Aquí podrías agregar más formularios o secciones para actualizar información personal */}
        <p>Aquí puedes agregar más ajustes según tus necesidades.</p>
      </div>
    </div>
  );
};

export default Settings;