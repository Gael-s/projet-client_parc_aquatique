import React, { useState } from "react";
import "./GlobalHoraire.css";
import Tabhoraire from "./Tabhoraire";

const GlobalHoraire = () => {
  const [displayy, setDisplayy] = useState(false);
  return (
    <div className="blochoraire">
      <img id="logoo" src="https://img.icons8.com/cotton/128/000000/clock--v2.png" alt="logo" />
        <button
          type="submit"
          className="button"
          onClick={() => {
            setDisplayy(!displayy);
          }}
        >
          voir les horaires complets
        </button>
        {displayy && <Tabhoraire />}
    </div>
  );
};

export default GlobalHoraire;
