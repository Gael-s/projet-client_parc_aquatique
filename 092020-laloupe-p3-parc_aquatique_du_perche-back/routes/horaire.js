const router = require("express").Router();
require("dotenv").config();
const isAdmin = require("../middlewares/adminAcces");


const db = require("../db_connection");

// récupérer les horaires en BD
router.get("/", (req, res) => {
  db.query("SELECT * FROM horaire", [req.query.type])
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({ messageError: `Sql error return ${err.message}` })
    );
});

// mettre a jour les horaires
router.post("/new", (req, res) => {
  const newHoraire = {
    lundi_AM_open: req.body.lundi_AM_open,
    lundi_AM_close: req.body.lundi_AM_close,
    lundi_PM_open: req.body.lundi_PM_open,
    lundi_PM_close: req.body.lundi_PM_close,
    mardi_AM_open: req.body.mardi_AM_open,
    mardi_AM_close: req.body.mardi_AM_close,
    mardi_PM_open: req.body.mardi_PM_open,
    mardi_PM_close: req.body.mardi_PM_close,
    mercredi_AM_open: req.body.mercredi_AM_open,
    mercredi_AM_close: req.body.mercredi_AM_close,
    mercredi_PM_open: req.body.mercredi_PM_open,
    mercredi_PM_close: req.body.mercredi_PM_close,
    jeudi_AM_open: req.body.jeudi_AM_open,
    jeudi_AM_close: req.body.jeudi_AM_close,
    jeudi_PM_open: req.body.jeudi_PM_open,
    jeudi_PM_close: req.body.jeudi_PM_close,
    vendredi_AM_open: req.body.vendredi_AM_open,
    vendredi_AM_close: req.body.vendredi_AM_close,
    vendredi_PM_open: req.body.vendredi_PM_open,
    vendredi_PM_close: req.body.vendredi_PM_close,
    samedi_AM_open: req.body.samedi_AM_open,
    samedi_AM_close: req.body.samedi_AM_close,
    samedi_PM_open: req.body.samedi_PM_open,
    samedi_PM_close: req.body.samedi_PM_close,
    dimanche_AM_open: req.body.dimanche_AM_open,
    dimanche_AM_close: req.body.dimanche_AM_close,
  };
  db.query(
    "UPDATE horaire SET lundi_AM_open = ?, lundi_AM_close = ?, lundi_PM_open = ?, lundi_PM_close = ?, mardi_AM_open = ?, mardi_AM_close = ?, mardi_PM_open = ?, mardi_PM_close = ?, mercredi_AM_open = ?, mercredi_AM_close = ?, mercredi_PM_open = ?, mercredi_PM_close = ?, jeudi_AM_open = ?, jeudi_AM_close = ?, jeudi_PM_open = ?, jeudi_PM_close = ?, vendredi_AM_open = ?, vendredi_AM_close = ?, vendredi_PM_open = ?, vendredi_PM_close = ?, samedi_AM_open = ?, samedi_AM_close = ?, samedi_PM_open = ?, samedi_PM_close = ?, dimanche_AM_open = ?, dimanche_AM_close = ? WHERE id = 1",
    [
      newHoraire.lundi_AM_open,
      newHoraire.lundi_AM_close,
      newHoraire.lundi_PM_open,
      newHoraire.lundi_PM_close,
      newHoraire.mardi_AM_open,
      newHoraire.mardi_AM_close,
      newHoraire.mardi_PM_open,
      newHoraire.mardi_PM_close,
      newHoraire.mercredi_AM_open,
      newHoraire.mercredi_AM_close,
      newHoraire.mercredi_PM_open,
      newHoraire.mercredi_PM_close,
      newHoraire.jeudi_AM_open,
      newHoraire.jeudi_AM_close,
      newHoraire.jeudi_PM_open,
      newHoraire.jeudi_PM_close,
      newHoraire.vendredi_AM_open,
      newHoraire.vendredi_AM_close,
      newHoraire.vendredi_PM_open,
      newHoraire.vendredi_PM_close,
      newHoraire.samedi_AM_open,
      newHoraire.samedi_AM_close,
      newHoraire.samedi_PM_open,
      newHoraire.samedi_PM_close,
      newHoraire.dimanche_AM_open,
      newHoraire.dimanche_AM_close,
      
    ],
    (error) => {
      if (error) return res.status(500).json({ message: "error 500" });
      return res.status(201).json({ message: "Horaires mis à jour !" });
    }
  );
});

module.exports = router;
