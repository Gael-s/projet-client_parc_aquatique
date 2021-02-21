import React from "react";

import "./Accueil.scss";

import GlobalCommentaire from "../Commentaires/GlobalCommentaire";
import Meteo from '../Meteo/Meteo';

const Accueil = () => {
  return (
    <>
    <div className="container__Acceuil">
      <Meteo />
      <GlobalCommentaire />
    </div>
    </>
  );
};

export default Accueil;
