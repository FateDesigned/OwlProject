import React, {  useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";

// Componentes
import Login from '../pages/Login.js';
import Registro from '../pages/Registro.js';
import Home from '../pages/Home.js';
import Perfil from '../pages/perfil.js';
import Finanzas from '../pages/Finanzas.js';
import Ajustes from '../pages/Ajustes.js'
import HomeN from '../pages/HomeNegocio.js'
import Managment from "../pages/Managment.js";


function App() {
  
  let [loggedIn, setLoggedIn] = useState(true);
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001', //URL del backend
    withCredentials: true, // ¡Crucial para enviar cookies (accessToken y refreshToken)!
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (token) {
            prom.resolve(axiosInstance(prom.args[0])); // Reintenta la petición original
        } else {
            prom.reject(error);
        }
    });
    failedQueue = [];
};

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Si la respuesta es un 401 (No autorizado) y no es un reintento
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    const refreshResponse = await axios.post('/refresh-token');

                    if (refreshResponse.status === 200) {
                        // La cookie 'accessToken' se habrá actualizado automáticamente
                        processQueue(null, refreshResponse.data?.accessToken); // Si el backend devuelve el nuevo accessToken en el body (opcional)
                        return axiosInstance(originalRequest); // Reintenta la petición original
                    } else {
                        // La renovación falló, redirige al login o muestra un error
                        window.location.href = '/login';
                        processQueue(error, null);
                        return Promise.reject(error);
                    }
                } catch (refreshError) {
                    // Error al llamar al endpoint de refresh token
                    window.location.href = '/login';
                    processQueue(refreshError, null);
                    return Promise.reject(refreshError);
                } finally {
                    isRefreshing = false;
                }
            } else {
                // Si ya está en proceso de refresco, encola la petición
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject, args: [originalRequest] });
                });
            }
        }

        return Promise.reject(error);
    }
);
  
  return (
    <>
      <Router>
        <Routes>

          {loggedIn ? (
            <>
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/finanzas' element={<Finanzas />} />
              <Route exact path='/Perfil' element={<Perfil />} />
              <Route exact path='/ajustes' element={<Ajustes />} />
              <Route exact path='/' element={<Registro />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/homeN' element={<HomeN />} />
              <Route exact path='/managment' element={<Managment />} />
            </>) : (<>
              <Route exact path='/' element={<Registro setLogueado={setLoggedIn} />} />
              <Route exact path='/login' element={<Login setLogueado={setLoggedIn} />} />
            </>
          )}

        </Routes>
      </Router>
    </>
  );
}

export default App;
