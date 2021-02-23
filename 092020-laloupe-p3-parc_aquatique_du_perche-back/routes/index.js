// Fichier contenant la route
const activityAndspace = require('./activityAndspace');
const reservationAquagym = require('./reservationAquagym');
const admin = require('./admin');
const usercomments = require('./commentaireUtilisateur');

// export
module.exports = (app) => {
  app.use('/infocomp', activityAndspace)
  app.use('/aquagym', reservationAquagym)
  app.use('/Admin', admin)
  app.use('/usercomments', usercomments)
}

