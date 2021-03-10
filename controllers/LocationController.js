const db = require("../models");

//Setting up methods for the Location controller
module.exports = {
findAll: function(req, res) {
    db.Location
    .find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

};