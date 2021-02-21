import React from "react";

import "./Accueil.scss";

import GlobalCommentaire from "../Commentaires/GlobalCommentaire";
import Meteo from '../Meteo/Meteo';
import Tarif from "../Tarif/Tarif";
import Horaire from "../Horaires/Horaire";

const Accueil = () => {
  return (
    <>
    <div className="container__Acceuil">
      <div>
      <Tarif />
      <GlobalCommentaire />
      </div>
      <div>
      <Meteo />
      <Horaire />
      </div>
    </div>
    </>
  );
};

export default Accueil;
