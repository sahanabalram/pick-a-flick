// Include the Axios library for HTTP requests
import axios from "axios";
// NYT API Key (Replace with your own API Key)
// Helper Functions
export default {

  // This will return any saved articles from our database
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  getUsers: function() {
    return axios.get("/api/users")
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
};
