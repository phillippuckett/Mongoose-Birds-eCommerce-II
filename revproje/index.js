var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var port = 8090
var app = express()
var mongoUri = 'mongodb://localhost:27017/menu';

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));


app.get('/api/food', foodCtrl.getFood);
app.post('/api/food/review', foodCtrl.addReview);
app.post('/api/food', middleware.addId, foodCtrl.addFood);

app.listen(port, function ({
	console.log('Listening on ' + port);
});
	
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
	console.log('Connected to MongoDB at ' + mongoUri)
	
});
