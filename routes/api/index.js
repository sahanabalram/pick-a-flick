var router = require("express").Router();
var movieRoutes = require("./movieRoutes");

router.use("/movies", movieRoutes);

module.exports = router;
