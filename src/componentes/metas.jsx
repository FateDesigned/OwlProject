import React from "react";

// Styles
import "./styles/metas.css";

const Metas = () => {
  

  return (
    <main className="mainMetas">
      <section className="metas">
        <div className="metasBox">
          <h2 className="metasText">Metas de inversión</h2>

          <button className="addButton" id="addInversion" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
            Agregar 
          </button>
          {/* Input Inversiones */}

          <input type="text" className="newInversion" id="newInversion"/>
          {/* Lista Inversiones */}

          <ul className="listaMetasInversion" id="listaInversion">
            <li className="metasInversion" id="metaInversion1"></li>
          </ul>
        </div>

        <div className="metasBox">
          <h2 className="metasText">Metas de ahorro</h2>

          <button className="addButton" id="addAhorro">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
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
