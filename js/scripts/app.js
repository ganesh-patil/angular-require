define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module("ngreq-app", ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider.when("/", angularAMD.route({
            templateUrl: 'views/country-list.html', controller: 'CountryListCtrl'
            
        }))
        .when('/:countryName', angularAMD.route({
           templateUrl: 'views/country-detail.html',
            controller: 'CountryDetailCtrl',

          }))
    });
    return angularAMD.bootstrap(app);
});