import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";

// Estilos
import "./styles/finanzas.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Finanzas = () => {
  let [Gasto, setGasto] = useState(0);
  let [Ingreso, setIngreso] = useState(0);

  const addDinero = async () => {
    const response = await axios.post("http://localhost:3001/cliente/ingresos",
      {
        Ingreso
      }



    );
  };
  const deleteDinero = async () => {
    const response = await axios.delete(
      "http://localhost:3001/cliente/ingresos"
    );
  };

  const gastosData = {
    labels: ["gastos"],
    datasets: [
      {
        label: "dinero",
        data: [Gasto],
        backgroundColor: ["#ff0000", "#00ff00"],
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
      <main className="contentBar">
        <div className="barDonut" id="gastosChart">
          Gastos Categorizados
          <Doughnut data={gastosData} options={options} />
        </div>
        <div className="barDonut" id="gastosChart">
          ingresos Categorizados
          <Doughnut data={gastosData} options={options} />
        </div>
        <div className="addDinero">
          <input type="number" value={Ingreso} onChange={(e) => setIngreso(e.target.value)} />
          <button onClick={addDinero}>Añadir</button>
        </div>
      </main>
    </div>
  );
};

export default Finanzas;
