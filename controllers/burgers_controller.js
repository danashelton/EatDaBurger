var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    
    console.log(data);
    res.render("index", { burger_data: data });
  });
});

router.post("/burgers/create", function(req, res) {
	console.log(req.body.burger_name);
  burger.create(req.body.burger_name,function(result) {
   
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
   burger.update(req.body.burger_id, function(result) {
    console.log(result);
     res.redirect("/");
      
    });
});

module.exports = router;