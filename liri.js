
 
require("dotenv").config();
 
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");
 
var fs = require("fs");
var query = process.argv[3];

 
var option = process.argv[2];
 
var spotify = new Spotify(keys.spotify);
