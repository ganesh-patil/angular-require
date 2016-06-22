define(['app'], function (app) {
    

    app.controller('CountryDetailCtrl', function ($scope, $routeParams, $http){
        $scope.name = $routeParams.countryName;

        $http.get('Apis/countries.json').success(function(data) {
          $scope.country = data.filter(function(entry){
            return entry.name === $scope.name;
          })[0];
        });
      });
}); 