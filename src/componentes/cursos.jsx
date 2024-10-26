import React from "react";
// styles
import "./styles/cursos.css";

const Cursos = () => {
  // Función para agregar cursos

  return (
    <main className="Cursos">
      <h3 className="tittleCursos" id="textCursos">
        Mis Cursos
      </h3>
      <div className="boxCursos">
        <button className="cursos" id="curso1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>

          <h3 className="nuevoCurso">Agregar curso</h3>
        </button>
      </div>
    </main>
  );
};

export default Cursos;
