import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";

// Estilos
import "./styles/finanzas.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Finanzas = () => {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  let [Gasto, setGasto] = useState(0);
  let [Ingreso, setIngreso] = useState(0);
  let[Fecha, setFecha]= useState(0);
  let [TotalDinero,setTotalDinero] = useState(0);
  let [Restante,setRestante] = useState(0);
  Gasto = 1000000
  Ingreso = 2000000
  let ingreso1 = 500000
  let ingreso2 = 200000
  let restante = 100000
  // guardar nuevos ingresos en la base de datos
  const addDinero = async () => {
    try{
      const response = await axios.post(
        'http://localhost:3001/cliente/ingresos',
        {
          Ingreso,
          Gasto,
        }
      );
    } catch (error) {
      console.error("Error al agregar un ingreso", error);
    }
  };
    // Guardar nuevos gastos
    const addGasto = async () => {
      try{
        const response = await axios.post(
          'http://localhost:3001/cliente/gastos',
          {
            Gasto,
          }
        );
      } catch (error) {
        console.error("Error al agregar un ingreso", error);
      }
    };
  

  // Obtener los ingresos de la base de datos
  const Dinero = async() =>{
    try {
      const response = await axios.get('http:/localhost:3001/cliente/dinero');
      setTotalDinero(response.data);
      
    } catch (error) {
      console.error("Error al obtener dinero total", error);
      
    };
  };
  const deleteDinero = async () => {
    const response = await axios.delete(
      "http://localhost:3001/cliente/ingresos"
    );
  };
  const handleChange = (e) => {
    setIngreso({ ...Ingreso, [e.target.name]: e.target.value });
    setGasto({ ...Gasto, [e.target.name]: e.target.value });
    setFecha({ ...Fecha, [e.target.name]: e.target.value });
  };


  const gastosData = {
    labels: ["gastos categorizados"],
    datasets: [
      {
        label: "dinero",
        data: [Gasto,restante],
        backgroundColor: ["#ff0000", "#d9d9d9"],
      },
    ],
  };
  const ingresosData = {
    labels: ["Ingresos Categorizados"],
    datasets: [
      {
        label: "dinero",
        data: [Ingreso, ingreso1, ingreso2, restante],
        backgroundColor: ["#ff0000", "#d9d9d9"],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  return (
    <div className="finanzas">

      {/* Entrada para agregar Ingresos */}
      <div className="ingresosModal">
      <button onClick={() => setModalOpen1(true)}>Agregar un ingreso</button>
      {modalOpen1 && (
        <div className="modal">
          <form onSubmit={addDinero}>
            <input
              type="Number"
              name="Ingreso"
              placeholder="Agrega un nuevo ingreso"
              onChange={handleChange}
            />
            <input
              type="date"
              name="fechaIngreso"
              placeholder="Fecha de Ingreso"
              onChange={handleChange}
            />
            <textarea
              name="descripcion"
              placeholder="Descripción"
              onChange={handleChange}
            />
            <button type="submit">Guardar Ingreso</button>
            <button type="button" onClick={() => setModalOpen1(false)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
      {/* Entrada Para Agregar Gastos */}
      <button onClick={() => setModalOpen2(true)}>Agregar un Gasto</button>
      {modalOpen2 && (
        <div className="modal">
          <form onSubmit={addGasto}>
            <input
              type="Number"
              name="Ingreso"
              placeholder="Agrega un nuevo ingreso"
              onChange={handleChange}
            />
            <input
              type="date"
              name="fechaIngreso"
              placeholder="Fecha de Ingreso"
              onChange={handleChange}
            />
            <textarea
              name="descripcion"
              placeholder="Descripción"
              onChange={handleChange}
            />
            <button type="submit">Guardar Gasto</button>
            <button type="button" onClick={() => setModalOpen2(false)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
      
      



        {/*Graficas Ingresos, Gastos  */}
      </div>
      <main className="graficasBar">
        <div className="barDonut" id="gastosChart">
          Gastos Categorizados
          <Doughnut data={gastosData} options={options} />
        </div>
        <div className="barDonut" id="gastosChart">
          ingresos Categorizados
          <Doughnut data={ingresosData} options={options} />
        </div>
        <div className="addDinero">
          <input
            type="number"
            value={Ingreso}
            onChange={(e) => setIngreso(e.target.value)}
          />
        </div>
      </main>
    </div>
  );
};

export default Finanzas;
