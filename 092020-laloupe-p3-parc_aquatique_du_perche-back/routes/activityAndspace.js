const router = require('express').Router();
require('dotenv').config();

const db = require('../db_connection');

router.get('/', (req, res) => {
    db.query("SELECT article, activity_and_space.descriptif, images.nom, images.descriptif AS alt from activity_and_space, categories, images WHERE categories.nom = ? AND categories.id = categorie_id AND image_id = images.id", [req.query.type])
    .then(data => (
        res.status(200).json(data.map((item) => {
            const temp = {...item};
            temp.url = process.env.BASEURL + item.nom;
            return temp;
        })))
    )
    .catch((err) => res.status(500).json({messageError: `Sql error return ${err.message}`}))
});

module.exports = router;
