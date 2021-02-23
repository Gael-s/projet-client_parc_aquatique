import React, { useState, useEffect } from "react";

import Commentaires from "./Commentaire";
import AjoutCommentaire from "./AjoutCommentaire";

import "./GlobalCommentaire.css";

function GlobalCommentaire()  {
  const [display, setDisplay] = useState(false);
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/usercomments")
    .then((data) => data.json())
    // .then((data) => console.log(data))
    .then((data) => setComments(data))

    // console.log(comments)
  }, [])
  

  return (
    <div className="Comment">
      <div className="Avis">
        <h2>Laissez votre commentaire</h2>
      </div>
      <div className="Commentaires">
        {comments.map((item) => (
        <Commentaires {...item} key={item.id} />
      ))}
        <button
          type="button"
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
