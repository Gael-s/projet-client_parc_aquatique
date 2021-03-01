const router = require("express").Router();
require("dotenv").config();

const db = require("../db_connection");

// récupérer les prix en BD
router.get("/", (req, res) => {

  db.query("SELECT * FROM tarif", [req.query.type])
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({ messageError: `Sql error return ${err.message}` })
    );
});

// mettre a jour les tarif
router.post("/new", (req, res) => {
  const newTarif = {
    adulte: req.body.adulte,
    enfant: req.body.enfant,
    enfant_3_ans: req.body.enfant_3_ans,
    sauna_et_hammam: req.body.sauna_et_hammam,
    abonnement_sauna: req.body.abonnement_sauna,
    cours: req.body.cours,
    adultEte: req.body.adultEte,
    enfantEte: req.body.enfantEte,
  }
  db.query(
    "UPDATE tarif SET adulte = ?, enfant = ?, enfant_3_ans = ?, sauna_et_hammam = ?, abonnement_sauna = ?, cours = ?, adultEte = ?, enfantEte = ? WHERE id = 1",
    [newTarif.adulte, newTarif.enfant, newTarif.enfant_3_ans, newTarif.sauna_et_hammam, newTarif.abonnement_sauna, newTarif.cours, newTarif.adultEte, newTarif.enfantEte],
    (error) => {
      if (error) return res.status(500).json({ message: "error 500" });
      return res.status(201).json({ message: "Tarifs mis à jour !" });
    }
  );

});

module.exports = router;
