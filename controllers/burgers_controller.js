var connection = require("../config/connection.js");
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(["burger"], [req.body.burger], function(result) {
        res.json({ burger: burger});
    });
})

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update(
        {
            ate: req.body.ate
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();    
        }
    );
});

module.exports = router;