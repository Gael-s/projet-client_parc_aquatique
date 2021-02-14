import React from "react";
import PropTypes from "prop-types";
import "./CompBloc.css";

const CompBloc = ({ article, descriptif, alt, url }) => (
  <div className="BlocofComp">
    <div className="BlocCompHead">
      <h3>{article}</h3>
      <p> {descriptif} </p>
    </div>
    <div className="BlocCompImg">
      <img src={url} alt={alt} loading="lazy" />
    </div>
  </div>
);

CompBloc.propTypes = {
  article: PropTypes.string.isRequired,
  descriptif: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CompBloc;
