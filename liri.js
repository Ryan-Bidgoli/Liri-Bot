
 
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

function spotifyCall(songName) {
    if (songName.length == 0) {
        songName = ["The Sign Ace"];
   }
   
    var spotify = new Spotify(keys.spotify);
     

    spotify.search({ type: 'track,artist', query: songName, limit: 5}, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
    var response = data.tracks.items; 
    for(var i = 0; i < response.length; i++)
    {
        var artist = response[i].artists;
        for(var j = 0; j < artist.length; j++)
        {
            console.log(artist[j].name);
            console.log("\n");
        }
        console.log(response[i].name);
        console.log("\n");
        var preview_url = response[i].preview_url;
        if(!response[i].preview_url)
        {
            preview_url = "url not found";
        }
        console.log(preview_url);
        console.log("\n");
        console.log(response[i].album.name);
        console.log("\n-----------------------");
    }

    });
}
