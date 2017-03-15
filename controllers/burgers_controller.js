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
		"burger_name"
		], [
		req.body.name
		], function(){
			res.redirect("/");
	});
});

router.put("/:burger_name", function(req, res) {
	var condition = "burger_name = '" + req.params.burger_name + "'";
	
	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function(){
		res.redirect("/");
	});
});

module.exports = router;