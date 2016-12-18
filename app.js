'use strict';

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(function(req, res, next){
    console.log("The leave on the trees are", req.query.color);
    next();
});

app.listen(port, function(){
    console.log("Server is listening on Port 3000");
});