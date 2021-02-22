/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "./AjoutCommentaire.css";

function Commentaire() {
  const [data, setData] = useState({
    prenom : "",
    notation : "",
    Commentaire: ""
  })

  const updateData = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };



  return (
    <div className="bloc-commentaire">
      <form className="commentaire-form" onSubmit={handleSubmit}>
        <div>
          <div>
            <div>Prénom</div>
            <input className="form-inputs" onChange={updateData} />
          </div>
          <div>
            <div>Notations</div>
            <div className="etoile" onChange={updateData}>⭐ ⭐ ⭐ ⭐ ⭐</div>
          </div>
          <div>
            <div>
              <div>Commentaire</div>
              <input className="form-inputs_commentaire" onChange={updateData} />
            </div>
          </div>
        </div>

        <button className="button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Commentaire;
