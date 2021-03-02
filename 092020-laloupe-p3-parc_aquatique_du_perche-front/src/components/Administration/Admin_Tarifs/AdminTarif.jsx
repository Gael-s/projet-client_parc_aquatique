import React, { useState, useEffect } from "react";

import "./AdminTarif.scss";

function AdminTarif() {
  const [message, setMessage] = useState();
  const [tarif, setTarif] = useState([]);
  const [newTarif, setNewTarif] = useState({
    adulte: "",
    enfant: "",
    enfant_3_ans: "",
    sauna_et_hammam: "",
    abonnement_sauna: "",
    cours: "",
    adultEte: "",
    enfantEte: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/tarif")
      .then((data) => data.json())
      .then((data) => setTarif(data[0]));
  }, []);
  const updateField = (e) => {
    setNewTarif(() => ({ ...newTarif, [e.target.name]: e.target.value }));
  };

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 2000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/tarif/new", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }),
      body: JSON.stringify(newTarif),
    })
      .then((res) => res.json())
      .then((res) => {
        setNewTarif();
        setMessage(res.message);
        setTimeout(() => {
          setMessage();
        }, 2000);
      });
  };

  return (
    <div className="container__form_tarifs">
      <h1>Modifier les tarifs</h1>
      <div>date de mise à jour : {tarif.date_modif} </div>
      <form action="submit" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr className="lignecolore">
              <td>&nbsp;</td>
              <td>Prix actuel</td>
              <td>Nouveau Prix</td>
            </tr>
            <tr>
              <td>Adulte</td>
              <td>{tarif.adulte} €</td>
              <td>
                <input
                  title="rentrez un nombre"
                  type="number"
                  step="any"
                  name="adulte"
                  placeholder="0,00"
                  autoComplete="on"
                  onChange={updateField}
                  // value={newTarif.adulte}
                  required
                />{" "}
                €
              </td>
            </tr>
            <tr>
              <td>Enfants</td>
              <td>{tarif.enfant} €</td>
              <td>
                <input
                  title="rentrez un nombre"
                  type="number"
                  step="any"
                  name="enfant"
                  placeholder="0,00"
                  autoComplete="on"
                  onChange={updateField}
                  // value={newTarif.enfant}
                  required
                />{" "}
                €
              </td>
            </tr>
            <tr>
              <td>Enfants - de 3 ans</td>
              <td>{tarif.enfant_3_ans} €</td>
              <td>
                <input
                  title="rentrez un nombre"
                  type="number"
                  step="any"
                  name="enfant_3_ans"
                  placeholder="0,00"
                  autoComplete="on"
                  onChange={updateField}
                  // value={newTarif.enfant_3_ans}
                  required
                />{" "}
                €
              </td>
            </tr>
            <tr>
              <td>Sauna & hammam</td>
              <td>{tarif.sauna_et_hammam} €</td>
              <td>
                <input
                  title="rentrez un nombre"
                  type="number"
                  step="any"
                  name="sauna_et_hammam"
                  placeholder="0,00"
                  autoComplete="on"
                  onChange={updateField}
                  // value={newTarif.sauna_et_hammam}
                  required
                />{" "}
                €
              </td>
            </tr>
            <tr>
              <td>Abonnement 10 entrées sauna/hammam</td>
              <td>{tarif.abonnement_sauna} €</td>
              <td>
                <input
                  title="rentrez un nombre"
                  type="number"
                  step="any"
                  name="abonnement_sauna"
                  placeholder="0,00"
                  autoComplete="on"
                  onChange={updateField}
                  // value={newTarif.abonnement_sauna}
                  required
                />{" "}
                €
              </td>
            </tr>
            <tr>
              <td>Cours</td>
              <td>{tarif.cours} €</td>
              <td>
                <input
                  title="rentrez un nombre"
                  type="number"
                  step="any"
                  name="cours"
                  placeholder="0,00"
                  autoComplete="on"
                  onChange={updateField}
                  // value={newTarif.cours}
                  required
                />{" "}
                €
              </td>
            </tr>
            <tr className="lignecolore">
              <td>Tarifs été</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Adulte</td>
              <td>{tarif.adultEte} €</td>
              <td>
                <input
                  title="rentrez un nombre"
                  type="number"
                  step="any"
                  name="adultEte"
                  placeholder="0,00"
                  autoComplete="on"
                  onChange={updateField}
                  // value={newTarif.adulteEte}
                  required
                />{" "}
                €
              </td>
            </tr>
            <tr>
              <td>Enfant</td>
              <td>{tarif.enfantEte} €</td>
              <td>
                <input
                  title="rentrez un nombre"
                  type="number"
                  step="any"
                  name="enfantEte"
                  placeholder="0,00"
                  autoComplete="on"
                  onChange={updateField}
                  // value={newTarif.enfantEte}
                  required
                />{" "}
                €
              </td>
            </tr>
          </tbody>
        </table>
        {!message ? null : <div className="message">{message}</div>}
        <button type="submit" onClick={refreshPage}>Valider les changements</button>
      </form>
    </div>
  );
}

export default AdminTarif;
