// =============================================================
// Dependencies
// =============================================================
var db = require("./../models");


// Routes
// =============================================================

module.exports = {
  // Get all transactions
  findAll: function(req, res) {
    // Finding all transaction, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.Movie.findAll({}).then(function(data){
      res.json(data);
    })
},

  create: function(req, res) {
    // Finding all transaction, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function

    db.Movie.create({
      movieTitle: req.body.movieTitle,
      releaseYear: req.body.releaseYear,
      genre: req.body.genre,
      synopsis: req.body.synopsis,
      emotion:req.body.emotion
    }).then(function(results) {
      // results are available to us inside the .then
      return res.json(results);
  });
}

};
