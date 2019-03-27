require("dotenv").config();
var axios = require('axios');
console.log();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });