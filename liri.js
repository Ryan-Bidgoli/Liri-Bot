
 
require("dotenv").config();
 
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");
 
var fs = require("fs");

[node,file,cmd,...query] = process.argv;
  
var option = cmd;


switch (option) {
    case "movie-this":
        movieThis(query);
        break;
    case "spotify-this-song":
        spotifyCall(query);
        break;
    case "concert-this":
        concertThis(query);
        break;
  default:
        fs.readFile("random.txt", "utf8", function (error, data) {
            var data = data.split(",");
            var thatWay = data[1];
            if (error) {
                return console.log(error);
            }
            spotifyCall(thatWay);
        })
}

