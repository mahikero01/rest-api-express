'use strict';

var express = require('express');
var jsonParser = require('body-parser').json;
var routes = require('./routes');


var app = express();
var port = process.env.PORT || 3000;

app.use(jsonParser());
app.use("/questions", routes);

app.listen(port, function(){
    console.log("Server is listening on Port 3000");
});