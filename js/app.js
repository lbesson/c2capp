'use strict';

/* Application level module
   which depends on filters, directives and services */

angular.module('c2capp', ['c2capp.filters']).
  config(['$routeProvider', function($routeProvider) {
  	$routeProvider.
  	  when('/home', { templateUrl: 'partials/home.html' }).
  	  when('/gps', { templateUrl: 'partials/gps.html' }).
  	  when('/images', { templateUrl: 'partials/images.html' }).
          when('/sync', { templateUrl: 'partials/sync.html' }).
  	  otherwise({ redirectTo: '/home' });
  }]);
