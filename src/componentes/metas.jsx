import React from "react";

// Styles
import "./styles/metas.css";

const Metas = () => {
  return (
    <main className="mainMetas">
      <section className="metas">
        {/* Metas de inversion */}
        <div className="metasBox">
          <h2 className="metasText">Metas de inversión</h2>

          <label htmlFor="newInversion" id="agregarInversion">
            <button className="addButton" id="addInversion">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#00ff00"
                      className="bi bi-plus-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                      />
                    </svg>
              
            </button>
          </label>
          <label htmlFor="newInversion" id="eliminarInversion"></label>

          {/* Lista Inversiones */}

          <ul className="listaMetasInversion" id="listaInversion">
            <li className="metasInversion" id="metaInversion1">
              <input type="text" className="newInversion" id="newInversion" />
            </li>
          </ul>
        </div>
        {/* Metas de ahorro */}

        <div className="metasBox">
          <h2 className="metasText">Metas de ahorro</h2>

          <button className="addButton" id="addAhorro">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
            Agregar
          </button>

          {/* Input Ahorros */}
          <input type="text" className="newAhorro" id="newAhorro" />

          {/* Lista Ahorros */}
          <ul className="listaMetasAhorro" id="listaAhorros">
            <li className="metasAhorro" id="metaAhorro1"></li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Metas;
