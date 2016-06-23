define(['app','myService'], function (app) {
    app.controller('addController', ['$scope', '$routeParams', '$httpfunction','myService',function($scope, $routeParams, $http,myService){
    	window.alert("hi!");
       console.log("Country add controller called ");
       myService.testFunction();

      }]);
}); 