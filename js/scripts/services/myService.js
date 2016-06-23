
define(['app'], function (app) {
    app.service('myService', function () {
        this.testFunction = function () {
            console.log("You are in test function ");
        };

    });

});