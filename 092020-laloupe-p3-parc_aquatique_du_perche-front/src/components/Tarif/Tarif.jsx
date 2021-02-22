import React from "react";

import "./Tarif.scss";

function Tarif() {
  return (
    <div className="container__tarif">
      <h1>Tarifs</h1>
      <div>Mis à jour le 22 octobre 2020</div>
      <table>
        <tbody>
          <tr>
            <td>Carte 10 entrées adulte</td>
            <td>36 €</td>
          </tr>

          <tr>
            <td>Carte 10 entrées enfant - 16 ans</td>
            <td>26 €</td>
          </tr>

          <tr>
            <td>Adulte</td>
            <td>4 €</td>
          </tr>

          <tr>
            <td>Enfant - 16 ans</td>
            <td>3,20 €</td>
          </tr>

          <tr>
            <td>Enfant de moins de 3 ans</td>
            <td>Gratuit</td>
          </tr>

          <tr>
            <td>Sauna et hammam</td>
            <td>10 €</td>
          </tr>

          <tr>
            <td>Abonnement 10 entrées sauna/hammam</td>
            <td>75 €</td>
          </tr>
        </tbody>
      </table>
      <h1>Tarifs été</h1>
      <table>
        <tbody>
          <tr>
            <td>Adulte</td>
            <td>4,70 €</td>
          </tr>

          <tr>
            <td>Enfant - 16 ans</td>
            <td>3,70 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tarif;
