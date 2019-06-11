var db = require("../models");

module.exports = function(app) {


  app.get("/api/registries/public", function(req, res) {
    req.body.userId = req.id;
    db.registries.findAll({ where: {
      userId: req.id
    }}).then(function(dbRegistries) {
      res.json(dbRegistries);
    });
  });
}