const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const logger = require("morgan");

// grabbing our movie model
const db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();

// logging for request to the console
app.use(logger("dev"));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("client/build"));
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  if ( process.env.NODE_ENV === "production" ) {
    res.sendFile(__dirname + "./client/build/index.html");
  } else {
    res.sendFile(__dirname + "./client/public/index.html");
  }
});

db.sequelize.sync().then(function() {
  app.listen(PORT);
});