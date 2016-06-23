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
        .when('/:country/:activity', angularAMD.route({
           templateUrl: function (rp) { 
                     return 'views/' + rp.country + '/' + rp.activity + '.html'; },
             resolve: {
        load: ['$q', '$rootScope', '$location', 
            function ($q, $rootScope, $location) {
                
                 var path = $location.path();
                 var parsePath = path.split("/");
                 var parentPath = parsePath[1];
                 var controllerName = parsePath[2];
                 var loadController = "controller/" + parentPath + "/" + 
                                       controllerName + "Controller";

                 var deferred = $q.defer();
                 require([loadController], function () {
                        $rootScope.$apply(function () {
                        deferred.resolve();
                 });
            });
            return deferred.promise;
            }]
        }

          }))
    });
    return angularAMD.bootstrap(app);
});