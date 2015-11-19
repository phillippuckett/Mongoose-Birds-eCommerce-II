angular.module('ecommerce').controller('homeCtrl', function($scope, productList){
	$scope.products = productList.data.data;
	console.log(productList.data);
});