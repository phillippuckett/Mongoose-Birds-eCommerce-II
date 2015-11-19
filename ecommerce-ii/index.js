var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose')
var app = express()
var mongoUri = 'mongodb://localhost:27017/ecommerce';
var port = 3000

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connected to MongoDB at ' + mongoUri);
});

app.get('/api/product', function (req, res) {
    product.find(req.query, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result)
        }
    })
})
app.put('/api/product', function (req, res) {
    product.update({ '_id': mongoose.ObjectId(req.query.id) }, req.body, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result)
        }
    })
})
app.post('/api/product', function (req, res) {
    product.insert(req.body, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result)
        }
    })
})
app.delete('/api/product', function (req, res) {
    product.remove({ '_id': mongoose.ObjectId(req.query.id) }, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result)
        }
    })
})

app.listen(port, function () {
    console.log("Listening on Channel : " + port)
});

var counter = getCounter() {
    var myCounter = 0;
    
    return function() {
        myCounter += 2;
        return myCounter;
    }
    
};
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());