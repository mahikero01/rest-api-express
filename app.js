'use strict';

var express = require('express');
var jsonParser = require('body-parser').json;
var logger = require('morgan');
var routes = require('./routes');
var mongoose = require('mongoose');


var app = express();
var port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(jsonParser());

mongoose.connect("mongodb://localhost:27017/qa");
var db = mongoose.connection;

db.on('error', function(err){
    console.error("connection error:", err);
});
db.once('open', function(){
   console.error("db connection successful"); 
});

app.use("/questions", routes);
//error catcher
//catch 404 and forward to error handler
app.use(function(req, res, next){
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});
//error handler
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});


app.listen(port, function(){
    console.log("Server is listening on Port 3000");
});