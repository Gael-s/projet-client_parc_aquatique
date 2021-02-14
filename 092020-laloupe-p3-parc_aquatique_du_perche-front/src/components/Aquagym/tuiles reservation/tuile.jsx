import React from "react";

import "./tuile.scss";

function tuile() {
  return (
    <div className="container__tuile">
      <div className="tuile">
        <div className="tuile_face tuile_front">
          <div className="tuile_reserver">RESERVER</div>
          <div className="tuile_place">XX place disponible</div>
        </div>
        <div className="tuile_face tuile_back">
          <div className="tuile_complet"> COMPLET</div>
        </div>
      </div>
    </div>
  );
}

export default tuile;
