import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";

// Estilos
import "./styles/finanzas.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Finanzas = () => {
  let [Gasto, setGasto] = useState(0);
  let [IngresosT, setIngresosT] = useState(0);

  const ChartGasto = async () => {
    const response = await axios.post("http://localhost:3001/dinero");
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
        <div className="barDonut">
          <Doughnut data={gastosData} options={options} />
        </div>
      </main>
    </div>
  );
};

export default Finanzas;
