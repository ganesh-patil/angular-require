require.config({

    baseUrl: "js/scripts",
    
	// alias libraries paths
    paths: {
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular/angular-route',
      //  'async': '../lib/requirejs/async',
        'angularAMD': '../lib/requirejs/angularAMD',
       // 'ngload': '../lib/requirejs/ngload',
     //   'ui-bootstrap': '../lib/angular-ui-bootstrap/ui-bootstrap-tpls',
     //   'prettify': '../lib/google-code-prettify/prettify',
        'CountryDetailCtrl': 'controller/country_detail',
        'CountryListCtrl': 'controller/home_ctrl',
        'CountryAddCtrl' : 'controller/country_add',
        'myService'      : 'services/myService'

        
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular']
    },

    // kick start application
    deps: ['app']
});