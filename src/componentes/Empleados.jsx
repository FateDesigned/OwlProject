import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Payroll() {
    const [modalOpen, setModalOpen] = useState(false);
    const [employee, setEmployee] = useState({
      nombre: '',
      puesto: '',
      salario: 0,
      fechaIngreso: '',
      direccion: '',
      telefono: ''
    });
    const [employees, setEmployees] = useState([]); // Estado para los empleados
  
    useEffect(() => {
      fetchEmployees();
    }, []);
  
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/empleados');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error al obtener empleados', error);
      }
    };
  
    const handleChange = (e) => {
      setEmployee({ ...employee, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/empleados/agregar', employee);
        console.log(response.data.message);
        setModalOpen(false);
        fetchEmployees(); // Actualiza la lista de empleados
      } catch (error) {
        console.error('Error al agregar empleado', error);
      }
    };
  
    return (
      <div>
        <h1>Nómina de Empleados</h1>
        <button onClick={() => setModalOpen(true)}>Agregar Empleado</button>
        {modalOpen && (
          <div className="modal">
            <form onSubmit={handleSubmit}>
              <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
              <input type="text" name="puesto" placeholder="Puesto" onChange={handleChange} />
              <input type="number" name="salario" placeholder="Salario" onChange={handleChange} />
              <input type="date" name="fechaIngreso" placeholder="Fecha de Ingreso" onChange={handleChange} />
              <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} />
              <input type="tel" name="telefono" placeholder="Teléfono" onChange={handleChange} />
              <button type="submit">Guardar Empleado</button>
              <button type="button" onClick={() => setModalOpen(false)}>Cancelar</button>
            </form>
          </div>
        )}
        <div className="empleados-list">
          {employees.map((emp, index) => (
            <div key={emp.id || index} className="empleado-item">
              <p><strong>Nombre:</strong> {emp.nombre}</p>
              <p><strong>Puesto:</strong> {emp.puesto}</p>
              <p><strong>Salario:</strong> {emp.salario}</p>
              <p><strong>Fecha de Ingreso:</strong> {emp.fecha_ingreso}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Payroll;