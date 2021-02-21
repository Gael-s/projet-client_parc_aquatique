import React from "react";

import "./Tarif.scss";

function Tarif() {
  return (
    <div className="container__tarif">
      <h1>Tarifs</h1>
      <table>
        <tr>
          <td>Carte 10 entrées adulte</td>
          <td>36 €</td>
        </tr>
        <tr>
          <td>Enfant - 16 ans</td>
          <td>3,20 €</td>
        </tr>
        <tr>
          <td>Carte 10 entrées enfant - 16 ans</td>
          <td>26 €</td>
        </tr>
        <tr>
          <td>Enfant de moins de 3 ans</td>
          <td>Gratuit</td>
        </tr>
      </table>
    </div>
  );
}

export default Tarif;
