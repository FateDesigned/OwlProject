import React from "react";

const resumen = () => {
  return (
    <div>
      resumen
      <div className="summary">
        <h3 className="summaryText" id="resumenTittle">
          {" "}
          Resumen Diario
        </h3>
        <h3 className="summaryText" id="resumenText">
          Tus gastos van en aumento
        </h3>
      </div>
    </div>
  );
};

export default resumen;