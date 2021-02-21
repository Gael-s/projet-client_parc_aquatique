import React, { useState } from "react";
import "./GlobalCommentaire.css";
import Commentaires from "./Commentaire";
import AjoutCommentaire from "./AjoutCommentaire";

const GlobalCommentaire = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="Comment">
      <div className="Avis">
        <h2>Votre avis compte!</h2>
        <h3>Aidez-nous à améliorer la qualité de nos services</h3>
      </div>
      <div className="Commentaires">
        <Commentaires />
        <Commentaires />
      <button
        type="submit"
        className="button1"
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Ajouter un commentaire
      </button>
      {display && <AjoutCommentaire />}
      </div>
    </div>
  );
};

export default GlobalCommentaire;
