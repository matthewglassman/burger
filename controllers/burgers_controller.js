var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
	burger.all(function(data) {
		var handlebarsObject = {
			burgers: data
		};
		console.log(handlebarsObject);
		res.render("index", handlebarsObject);
	});
});

router.post("/", function(req, res){
	burger.create([
		"burger_name", "devoured"
		], [
		req.body.name, req.body.devoured
		], function(){
			res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.burger_id;
	
	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function(){
		res.redirect("/");
	});
});

module.exports = router;