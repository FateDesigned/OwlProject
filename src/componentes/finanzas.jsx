import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";

// Estilos
import "./styles/finanzas.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Finanzas = () => {
  let [Gasto, setGasto] = useState();
  let [totalIngreso, settotalIngreso] = useState();
  let restante = (0,1);

  const ChartGasto = async ()=> {
    const response = await axios.post(
      "http://localhost:3001/dinero",
      
    )

  }
  const alerta = async (e) => {
    alert(restante)
  };
  const gastosData = {
    labels: [ "gastos", "Restante"],
    datasets: [
      {
        label: "dinero",
        data: [Gasto, restante],
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
        <button popovertarget="mypopover">Toggle the popover</button>
          <dialog popover> holaa</dialog>
          <br />
          <hr />
          <label htmlFor="gasto1">
            Ingresa un gasto
            <input type="number"  id="gasto1" placeholder="Ingresa Un Gasto" value={Gasto} onChange={(e) => setGasto(e.target.value)} />
          </label>
          <label htmlFor="gasto1">
            Ingresa el total de tus ingresos
            <input type="number" placeholder="Ingresa tu salario" id="ingresosTotales" value={totalIngreso} onChange={(e) => settotalIngreso(e.target.value)} />
            <button onClick={alerta}>
              Siuuu
            </button>
          </label>
          <Doughnut data={gastosData} options={options} />
        </div>
      </main>
    </div>
  );
};

export default Finanzas;
