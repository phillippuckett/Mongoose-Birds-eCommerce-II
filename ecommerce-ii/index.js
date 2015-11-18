var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');
var app = express();
var mongoUri = 'mongodb://localhost:27017/menu';

app.use(bodyParser.json());
app.use(cors());

var db = mongojs('products');
var product = db.collection('product');

app.get('/api/product', function(req, res) {
    product.find(req.query, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result)
        }
    })
})
app.put('/api/product', function(req, res) {
    product.update({'_id': mongojs.ObjectId(req.query.id)}, req.body, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result)
        }
    })
})
app.post('/api/product', function(req, res) {
    product.insert(req.body, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result)
        }
    })
})
app.delete('/api/product', function(req, res) {
    product.remove({'_id': mongojs.ObjectId(req.query.id)}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result)
        }
    })
})

	app.listen(3000, function () {
		console.log("Listening on Channel : 3000")
	});