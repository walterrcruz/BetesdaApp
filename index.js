var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/database');
var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, function(err) {
    if (err) {
        console.log("Could not connect to database", err)
    } else {
        console.log("connected to database " + config.db)

    }
})

app.use(express.static(__dirname + '/BetesdaApp/dist/'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/BetesdaApp/dist/index.html'));
});

app.listen(3000, function() {
    console.log('Listening on port 3000')
});