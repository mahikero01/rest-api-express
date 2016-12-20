'use strict';

var express = require('express');

var router = express.Router();

//GET /Questions
router.get("/", function(req, res) {
    res.json({response: "You sent a GET request"});
});

//POST /Questions
router.post("/", function(req, res) {
    res.json({
        response: "You sent a POST request",
        body: req.body
    });
});

//GET /Questions/:id
router.get("/:id", function(req, res) {
    res.json({response: "You sent a GET request for ID " + req.params.id});
});
module.exports = router;