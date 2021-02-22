import React from "react";
import PropTypes from "prop-types";
import "./Commentaire.css";

const Commentaires = ({prenom, comment,notation}) => {
  return (
    <div className="globalApi">
      <div className="Com">
        <p>Prénom : {prenom}</p>
        <p>Commentaires : {comment}</p>
        <p>Notation : {notation} /5</p>
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
