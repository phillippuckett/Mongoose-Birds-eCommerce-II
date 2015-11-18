var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var sightingCtrl = require('./CONTROLLERS/sightingCtrl')

var app = express();
app.use(bodyParser.json());
app.use(cors());

// 1 //
var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose'
mongoose.connect(mongoUri);
mongoose.connection,once('open', function() {
	console.log('Successfully connected to mongodb');
})

app.get('/api/sightings', function (req, res) {
	
	//Do this 2nd
	sightings.find(req.query, function (err, result) {
		if (err) {
			res.send(err);
		} 
		else {
			res.send(result);
		}
	})
})
app.put('/api/sightings', function (req, res) {
	
	sightings.update({"_id": mongo.ObjectId(req.query.id)}, req.body, function(err, result){
		
	});
	
	res.send("A lark has been spotted");
})
app.post('/api/sightings', function (req, res) {
	res.send("A lark has been spotted");
	sightings.insert(req.body, function (err, res) {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	})
})

app.delete('/api/sightings', function (req, res) {
sightings.remove({"_id": mongoose.ObjectId.(req.query,id)}, function(err,result){
})

	res.send("A lark has been spotted");
})
// debugger IDE for VisualStudioCode, or you can do nodeInspector





app.listen('3000', function () {
	console.log("Successfully Listening on : 3000")
});