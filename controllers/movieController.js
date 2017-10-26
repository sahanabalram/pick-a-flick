// =============================================================
// Dependencies
// =============================================================
var db = require("./../models");

// Routes
// =============================================================

module.exports = {
  // Get all movies
  findAll: function(req, res) {
    db.Movie.findAll({}).then(function(data){
      res.json(data);
    })
},

  create: function(req, res) {
    //save a new movie to the database
    db.Movie.create({
      user_uid: req.body._uid,
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
