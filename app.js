'use strict';

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(function(req, res, next){
    console.log("First middleware");
    next();
});

app.use(function(req, res, next){
    console.log("Second middleware");
    next();
});

app.listen(port, function(){
    console.log("Server is listening on Port 3000");
});