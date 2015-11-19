angular.module('ecommerce').controller('mainCtrl', function ($scope, productList, mainService) {
	// getProducts Function //
	$scope.getProducts = function () {
		mainService.getProducts().then(function (getProductsResponse) {
			$scope.products = getProductsResponse;
		});
	};
	
	// productList //
	$scope.products = productList;
	console.log(productList);
	
	// addproductButton Function //
	$scope.addproductButton = function () {
		$scope.addProduct = !$scope.addProduct;
	};
	
	// editProductButton function //
	$scope.editProductButton = function () {
		$scope.editProduct = !$scope.editProduct;
	};
	
	// editProduct Function // 
	$scope.editProduct = function () {
		$scope.updateProduct = true;
	};
	
	// submitNewProduct function //
	$scope.submitNewProduct = function () {
		mainService.addProduct($scope.product).then(function (submitNewResponse) {
			$scope.getProducts();
		});
		$scope.addProduct = false;
		$scope.product = {};
	};
	// submitUpdatedProducts Function //
	$scope.submitUpdatedProduct = function (id) {
		mainService.updateProduct(id, $scope.product).then(function (submitUpdateResponse) {
			$scope.getProducts();
		});
		$scope.updateProduct = false;
	};
	// deleteProduct Function //
	$scope.deleteProduct = function (productId) {
		mainService.deleteProducts(productId).then(function (deleteResponse) {
			$scope.getProducts();
		})
	};
});