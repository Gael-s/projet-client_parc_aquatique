import React from "react";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

import "./Commentaire.css";

const Commentaires = ({ prenom, comment, notation }) => {
  return (
    <div className="globalApi">
      <div className="Com">
        <p>Prénom : {prenom}</p>
        <p>Commentaires : {comment}</p>
        <ReactStars
          count={5}
          value={notation}
          size={32}
          activeColor="#ffd700"
          edit={false}
        />
      </div>
    </div>
  );
};

Commentaires.propTypes = {
  prenom: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  notation: PropTypes.string.isRequired,
};

export default Commentaires;
