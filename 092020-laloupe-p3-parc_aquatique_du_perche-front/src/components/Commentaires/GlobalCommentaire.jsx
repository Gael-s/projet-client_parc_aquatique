import React, { useState } from "react";
import "./GlobalCommentaire.css";
import Commentaires from "./Commentaire";
import AjoutCommentaire from "./AjoutCommentaire";

const GlobalCommentaire = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="Comment">
      <div className="Avis">
        <h2>Laissez votre commentaire</h2>
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
