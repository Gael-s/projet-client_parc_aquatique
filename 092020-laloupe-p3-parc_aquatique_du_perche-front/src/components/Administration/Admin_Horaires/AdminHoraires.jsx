import React, { useState, useEffect } from "react";

import "./AdminHoraire.scss";

function AdminHoraire() {
  const [message, setMessage] = useState();
  const [horaire, setHoraire] = useState([]);
  const [newHoraire, setNewHoraire] = useState({
    lundi_AM_open: "",
    lundi_AM_close: "",
    lundi_PM_open: "",
    lundi_PM_close: "",
    mardi_AM_open: "",
    mardi_AM_close: "",
    mardi_PM_open: "",
    mardi_PM_close: "",
    mercredi_AM_open: "",
    mercredi_AM_close: "",
    mercredi_PM_open: "",
    mercredi_PM_close: "",
    jeudi_AM_open: "",
    jeudi_AM_close: "",
    jeudi_PM_open: "",
    jeudi_PM_close: "",
    vendredi_AM_open: "",
    vendredi_AM_close: "",
    vendredi_PM_open: "",
    vendredi_PM_close: "",
    samedi_AM_open: "",
    samedi_AM_close: "",
    samedi_PM_open: "",
    samedi_PM_close: "",
    dimanche_AM_open: "",
    dimanche_AM_close: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/horaire")
      .then((data) => data.json())
      .then((data) => setHoraire(data[0]));
  }, []);
  const updateField = (e) => {
    setNewHoraire(() => ({ ...newHoraire, [e.target.name]: e.target.value }));
  };

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 2000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/horaire/new", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }),
      body: JSON.stringify(newHoraire),
    })
      .then((res) => res.json())
      .then((res) => {
        setNewHoraire();
        setMessage(res.message);
        setTimeout(() => {
          setMessage();
        }, 2000);
      });
  };

  return (
    <div className="container__form_horaire">
      <h1>Modifier les horaires</h1>
      <div>date de mise à jour : {horaire.date_modif} </div>
      <form action="submit" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr className="lignecolore">
              <td>&nbsp;</td>
              <td>horaire actuel</td>
              <td>Nouvel horaire</td>
            </tr>
            <tr>
              <td>Lundi</td>
              <td>
                Matin : {horaire.lundi_AM_open} - {horaire.lundi_AM_close}<br />
                Aprés-midi : {horaire.lundi_PM_open} -{horaire.lundi_PM_close}
              </td>
              <td>
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="lundi_AM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="lundi_AM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="12:00"
                  max="21:00"
                  name="lundi_PM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="12:00"
                  max="21:00"
                  name="lundi_PM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Mardi</td>
              <td>
                Matin : {horaire.mardi_AM_open} - {horaire.mardi_AM_close}<br />
                Aprés-midi : {horaire.mardi_PM_open} -{horaire.mardi_PM_close}
              </td>
              <td>
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="mardi_AM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="mardi_AM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="12:00"
                  max="21:00"
                  name="mardi_PM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="12:00"
                  max="21:00"
                  name="mardi_PM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Mercredi</td>
              <td>
                Matin : {horaire.mercredi_AM_open} - {horaire.mercredi_AM_close}<br />
                Aprés-midi : {horaire.mercredi_PM_open} - {horaire.mercredi_PM_close}
              </td>
              <td>
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="mercredi_AM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="mercredi_AM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="12:00"
                  max="21:00"
                  name="mercredi_PM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="12:00"
                  max="21:00"
                  name="mercredi_PM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Jeudi</td>
              <td>
                Matin : {horaire.jeudi_AM_open} - {horaire.jeudi_AM_close}<br />
                Aprés-midi : {horaire.jeudi_PM_open} -{horaire.jeudi_PM_close}
              </td>
              <td>
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="jeudi_AM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="jeudi_AM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="12:00"
                  max="21:00"
                  name="jeudi_PM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="12:00"
                  max="21:00"
                  name="jeudi_PM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Vendredi</td>
              <td>
                Matin : {horaire.vendredi_AM_open} - {horaire.vendredi_AM_close}<br />
                Aprés-midi : {horaire.vendredi_PM_open} -
                {horaire.vendredi_PM_close}
              </td>
              <td>
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="vendredi_AM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="vendredi_AM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="12:00"
                  max="21:00"
                  name="vendredi_PM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="12:00"
                  max="21:00"
                  name="vendredi_PM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>samedi</td>
              <td>
                Matin : {horaire.samedi_AM_open} - {horaire.samedi_AM_close}<br />
                Aprés-midi : {horaire.samedi_PM_open} -{horaire.samedi_PM_close}
              </td>
              <td>
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="samedi_AM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="samedi_AM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="12:00"
                  max="21:00"
                  name="samedi_PM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="12:00"
                  max="21:00"
                  name="samedi_PM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Dimanche</td>
              <td>
                Matin : {horaire.dimanche_AM_open} - {horaire.dimanche_AM_close}
              </td>
              <td>
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="dimanche_AM_open"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
                <input
                  title="rentrez un horaire"
                  type="time"
                  min="8:00"
                  max="12:00"
                  name="dimanche_AM_close"
                  autoComplete="on"
                  onChange={updateField}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        {!message ? null : <div className="message">{message}</div>}
        <button type="submit" onClick={refreshPage}>
          Valider les changements
        </button>
      </form>
    </div>
  );
}

export default AdminHoraire;
