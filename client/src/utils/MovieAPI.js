//Include React
import React, { Component } from 'react'
// Include the Axios library for HTTP requests
import axios from "axios";
const mdb = require("moviedb");//('f619c4487dbb3c827a31c662be9b1044');


// NYT API Key (Replace with your own API Key)


// Helper Functions
const MovieAPI = {
  
  listOfGenreIds: function() {
    return axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=f619c4487dbb3c827a31c662be9b1044&language=en-US");
  },

  movieSearchByGenreId: function(genreId, callback) {
    mdb.genreMovies({id: genreId}, (err, res) => {
      callback(res);
    });
  },

  // This will run our query.
  movieSearchByName: function (movieName, callback) {
    mdb.searchMovie({ query: movieName }, (err, res) => {
      if (err) {
        return callback(err);
      } else {
        return callback(res);
      }
    });
  },

  // This will run our query.
  movieSearchById: function (movieId, callback) {
    // Uncomment and then pass genre as parameter
    // var formattedGenre = genre.trim();
    mdb.movieInfo({ id: movieId }, (err, res) => {
      if (err) {
        return callback(err);
      } else {
        return callback(res);
      }
    });
  },

  movieInfoByTitle: function(movieTitle, callback) {
   this.movieSearchByName(movieTitle, (data)=>{
    this.movieSearchById(data.results[0].id, (data)=> {
      callback(data);
    });
   });
  }

}


// We export the helpers function
export default MovieAPI;
