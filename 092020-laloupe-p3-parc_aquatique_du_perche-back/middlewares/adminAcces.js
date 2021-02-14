
const jwt = require('jsonwebtoken');
const { PRIVATEKEY } = require('../env');

module.exports = (req, res, next) => {
    let bearerHeader = req.headers.authorization;
    if (bearerHeader === undefined) {
        return res.status(403).json({ message: "Non authorizé" })
    }
    if (bearerHeader.substring(0, 7) === "Bearer ") {
        bearerHeader = bearerHeader.substring(7);
    }
    const decoded = jwt.verify(bearerHeader, PRIVATEKEY);
    if (decoded.admin) {
        return next();
    }
    return res.status(403).json({ message: "Non authorizé" })
}


