var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('');

var port = process.env.PORT || 3000;

app.listen(port)

app.get('/g', function(req, res){
    res.send('blah');
})