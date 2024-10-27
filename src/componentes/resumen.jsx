import React from "react";

// styles
import './styles/resumen.css'

const resumen = () => {
  return (
    <div className="resumenFlex">
      <div className="summary">
        <h3 className="summaryText" id="resumenTittle">
          Resumen
        </h3>
        <h3 className="summaryText" id="resumenText">
          Tus gastos van en aumento
        </h3>
      </div>
    </div>
  );
};

export default resumen;