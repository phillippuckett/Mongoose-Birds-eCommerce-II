var sighting = require('../models/Sighting');

module.exports = {
	
	create: function(req, res){
		var newSighting = new Sighting(req.body);
		newSighting.save(function(err, result){
			if(err) return res.status(500).send(err)
			else res.send(result);
		})
	},
	
	read: function(req, res){
		
	},
	
	updates: function(req, res){
		
	},
	
	delete: function(req, res){
		
	}
}