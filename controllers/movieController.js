// =============================================================
// Dependencies
// =============================================================
var db = require("./../models");


// Routes
// =============================================================

module.exports = {
  // Get all saved movies
  findAll: function(req, res) {
    db.Movie.findAll({}).then(function(data){
      res.json(data);
    })
},

  create: function(req, res) {
    // saving new movie as favorite

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
