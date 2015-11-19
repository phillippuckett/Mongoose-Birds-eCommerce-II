var Product = require('../models/Product')

// EXPORTS //	
module.exports = {
	
	// addProduct Function Method //
	addProduct: function (req, res, next) {
		console.log(req.body);
		new Product(req.body).save(function (err, addProductResponse) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(addProductResponse);
			}
		});
	},

	// findProduct Function Method //
	findProduct: function (req, res, next) {
		Product.find(req.query).exec(function (err, findProductResult) {
			if (err) {
				return res.status(500).send({
					data: err,
					message: "Server Error"
				});
			} else {
				res.send({
					data: findProductResult,
					message: "Got it!"
				});
			}
		});
	},

	// addReview Function Method//
	addReview: function (req, res, next) {
		Product.findById(req.query.id, function (err, ProductItem) {
			if (err) {
				res.status(500).send(err)
			} else {
				ProductItem.push(req.body);
				ProductItem.save(function (err, addReviewResponse) {
					if (err) {
						res.status(500).send(err);
					} else {
						res.send(addReviewResponse)
					}
				});
			}
		});
	},
	
	// updateProduct Function Method //
	updateProduct: function (req, res, next) {
		Product.findById(req.params.id), function (err, updatedProduct) {
			if (err) {
				res.status(500).send(err);
			} else {
				Product.name = req.body.name;
				Product.weight = req.body.name;
				Product.name = req.body.name;
				Product.name = req.body.name;
				Product.save(function (err) {
					if (err) {
						res.send(err);
					} else {
						res.json(updatedProduct);
					}
				});
			}
		}
	},

	// deleteProduct function //
	deleteProduct: function (req, res, next) {
		Product.findByIfAndRemove(req.params.id, function (err, delProductResponse) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(delProductResponse);
			}
		});
	},

};