angular.module('ecommerce').factory('homeService', function ($http) {
    return {
      function() {
        return $http.post('/api/products').then(function (response) {
          return response;
        });
      }
    }
  });