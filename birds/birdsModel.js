var mongoose = require('mongoose');

var birdModel = mongoose.Schema({
	scientificName: {type: String, required:true, unique:true, lowercase:true},
	color: {type: String, required:true, unique:true},
	region: String,
	firstSightingEver: Date,
	food: [String],
	foodDetails: [{
		name: String,
		type: {type: String},
		genus: String
	}],
	wingspan: Number,
	endangered: Boolean,
	nest: {
		materials: [String],
		size: Number,
		timeToBuild: Number,
		locationDesc: String
	}
})

birdModel.pre('save', function(next){
	var bird = this;
	bird.scientificName.toLower();
	next();
})

module.exports = mongoose.model('bird', birdModel);

// indexing sorts the data in a way that makes it easier to look things up
// this is useful when dealing with PetaBytes