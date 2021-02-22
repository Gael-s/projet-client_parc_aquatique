// const contactRoutes = require('./contacts');
const activityAndspace = require('./activityAndspace');
const reservationAquagym = require('./reservationAquagym');
const admin = require('./admin');
const usercomments = require('./commentaireUtilisateur');

// module.exports = (app) => {
//   app.use('/contacts', contactRoutes);
// };

module.exports = (app) => {
  app.use('/infocomp', activityAndspace)
  app.use('/aquagym', reservationAquagym)
  app.use('/Admin', admin)
  app.use('/usercomments', usercomments)
}

