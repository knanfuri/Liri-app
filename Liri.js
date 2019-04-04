require("dotenv").config();
var moment = require('moment');

var axios = require('axios');
console.log();

var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var query = process.argv[3]



  function movieThis(){
    if(!query){
      query = "Mr Nobody"
    }
    
    axios.get(`http://www.omdbapi.com/?t=${query}&y=&plot=short&apikey=trilogy`)
    .then(function(response) {
      console.log(`The movie's Title is:${response.data.Title}`);
      console.log(`The movie's Year is:${response.data.Year}`);
     
        console.log(`The movie's rating is:${response.data.imdbRating}`);
        console.log(`The movie's rating is:${response.data.Ratings[1].value}`);
        console.log(`The Country:${response.data.Country}`);
        console.log(`TheLanguages are:${response.data.Language}`);
        console.log(`The Plot:${response.data.Plot}`);
        console.log(`The Actors:${response.data.Actors}`);
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  axios.get(`https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`)
  .then(function(response){

  for(i=0;i<response.data.length;i++){

    console.log(`The movie's rating is:${response.data[i].venue.name}`);
    console.log(`The movie's rating is:${response.data[i].venue.city}`);
     console.log(`The movie's rating is:moment(${response.data[i].datetime})format("dddd, MMMM Do YYYY, h:mm:ss a")`);
  }




  })
  


 