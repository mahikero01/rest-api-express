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
router.get("/:qID", function(req, res) {
    res.json({response: "You sent a GET request for ID " + req.params.qID});
});

//POST /questions/:id/answers
router.post("/:qID/answers", function(req, res) {
    res.json({
        response: "You sent a POST request to /answers",
        questionId: req.params.qID,
        body: req.body
    });
});

//PUT /questions/:id/answers/:id
router.put("/:qID/answers/:aID", function(req, res) {
    res.json({
        response: "You sent a PUT request to /answers",
        questionId: req.params.qID,
        answerId: req.params.aID,
        body: req.body
    });
});

//DELETE /questions/:id/answers/:id
router.delete("/:qID/answers/:aID", function(req, res) {
    res.json({
        response: "You sent a DELETE request to /answers",
        questionId: req.params.qID,
        answerId: req.params.aID
    });
});

//POST /questions/:qID/answers/:aID/vote-up
//POST /questions/:qID/answers/:aID/vote-down
router.post("/:qID/answers/:aID/vote-:dir", function(req, res) {
    res.json({
        response: "You sent a POST request to /vote-" + req.params.dir,
        questionId: req.params.qID,
        answerId: req.params.aID,
        vote: req.params.dir
    });
});

module.exports = router;