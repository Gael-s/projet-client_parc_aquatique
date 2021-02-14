import React from "react";
import "./AjoutCommentaire.css";

const Commenter = () => {
  return (
    <div className="bloc-commentaire">
      <div className="commentaire-form">
        <div className="form-inputs">
          <div>
            <p>Prénom :</p>
            <input />
          </div>
          <div>
            <p>E-mail :</p>
            <input />
          </div>
          <div className="form-inputs1">
          <div>
            <p>Votre commentaire :</p>
            <input />
          </div>
          </div>
        </div>

        <button className="envoi" type="button">
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default Commenter;
