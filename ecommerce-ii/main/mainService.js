angular.module('ecommerce').service('mainService', function ($http) {

	// getProduct Function //
    this.getProducts = function () {
		return $http.get('/api/products').then(function (getProductResponse) {
			return getProductResponse.data.data;
		});
    };

	// addProduct Function //
    this.addProduct = function (newProductObj) {
		return $http.post('/api/products', newProductObj).then(function (addProductResponse) {
			return addProductResponse;
		})
    };
	
	// updateProduct Function //
	this.updateProduct = function (id, newProductObj) {
		return $http.put('/api/products/' + id, newProductObj).then(function (updateProductResponse) {
			return updateProductResponse.data.data;
		})
    };
	
	// deleteProduct Function //
    this.deleteProduct = function (id) {
		return $http.delete('/api/products/' + id).then(function (deleteResponse) {
			return deleteResponse;
		})
    };
});