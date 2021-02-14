import React from "react";
import "./Accueil.css";
// import GlobalCommentaire from "../Commentaires/GlobalCommentaire";
// import Tarif from "../Tarifs/Tarif";
// import logo3 from "./piscineboy.jpeg";
// import GlobalHoraires from "../Horaire/GlobalHoraire";

import Meteo from '../Meteo/Meteo';

const Accueil = () => {
  return (
    <>
    <div>
      <Meteo />
      {/* <div className="mylogo3">
        <div className="textlogo">
        <h1>Bienvenue</h1><h2>Venez vous détendre en famille!</h2>
        </div>
      <img src={logo3} alt="logo3" className="logo3" />
      </div>
      <div className="ligne_horizontal">
        <h1>Les tarifs</h1>
      </div>
      <Tarif />
      <div className="ligne_horizontal">
        <h1>Météo & Horaires </h1>
      </div>

      <div className="meteohoraire">
      <div className="meteoimg">
        <iframe
          title="widget_autocomplete_preview1"
          className="widget_autocomplete_preview"
          width="300"
          height="320"
          frameBorder="0"
          src="https://meteofrance.com/widget/prevision/281560"
        >
          {" "}
        </iframe>
      </div>
       <div className="horaire">
       <GlobalHoraires />
       </div>
      </div> */}


      {/* <div className="ligne_horizontal" />
      <GlobalCommentaire /> */}
    </div>
    </>
  );
};

export default Accueil;
