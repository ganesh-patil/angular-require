define(['app'], function (app) {
    app.controller('CountryListCtrl', function ($scope, $http){
    	console.log("Controller is called ");
        $http.get('Apis/countries.json').success(function(data) {
          $scope.countries = data;
        });
      
      });
}); 