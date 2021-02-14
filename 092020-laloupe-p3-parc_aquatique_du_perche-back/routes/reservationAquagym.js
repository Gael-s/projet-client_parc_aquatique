const router = require('express').Router();
require('dotenv').config();

const { toNumber } = require('lodash');
const { getNextDay, getHour } = require('./algo/reservationAquaFunc');
const { getNbUserInscrit, getAllCour, addReservation, AddUserReservation } = require('../models/aquagym.js');

// const db = require('../db_connection');

router.get('/', async (_, res) => {
    const allCour = await getAllCour();
    await Promise.all(allCour.map((async (item) => {
        const temp = item;
        temp.jour = JSON.parse(item.jour);
        temp.current = await getNbUserInscrit(item.id, temp.jour);
        return item;
    })))
    return res.status(200).json(allCour);
});

router.post('/', async (req, res) => {
    const data = {
        email: req.body.email,
        nom: req.body.nom,
        prenom: req.body.prenom,
        horaire: req.body.horaire,
        jour: req.body.jour,
        cours_id: req.body.id,
    }

    const horaireNb = toNumber(data.horaire);
    const jourNb = toNumber(data.jour) > -1 && toNumber(data.jour) < 7;

    if (data.prenom === undefined || Number.isNaN(horaireNb) || !jourNb || Number.isNaN(data.cours_id) || data.email === undefined) {
        return res.status(500).json({ message: "argument invalid" })
    }

    const currentTime = new Date(Date.now());
    const currentDay = currentTime.getDay();
    const dateOfCour = new Date(Date.now());
    if (currentDay === data.jour) {
        const {hour, minute} = getHour(data.horaire);
        dateOfCour.setHours(hour);
        dateOfCour.setMinutes(minute);
        if ((currentDay - dateOfCour) < 0) {
            dateOfCour.setDate(currentTime.getDate() + 7);
        }
    } else {
        dateOfCour.setDate(currentTime.getDate() + (getNextDay(currentDay, data.jour)));
        const {hour, minute} = getHour(data.horaire);
        dateOfCour.setHours(hour);
        dateOfCour.setMinutes(minute);
    }
    const insertId = await addReservation(data.cours_id, dateOfCour);
    const insertId2 = await AddUserReservation(data.email, data.nom, data.prenom, insertId);
    return res.status(200).json({ message: "Votre réservation a bien été prise en compte.", res1: insertId, res2: insertId2 })
});

module.exports = router;

// const daysLabel = [
//     "Lundi",
//     "Mardi",
//     "Mercredi",
//     "Jeudi",
//     "Vendredi",
//     "Samedi",
//     "Dimanche",
//   ];
