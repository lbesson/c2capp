'use strict';

/* Application level module
   which depends on filters, directives, services, ... */
angular.module('c2capp', ['c2capp.i18n', 'c2capp.filters', 'c2capp.services']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/home', { templateUrl: 'partials/home.html' }).
      when('/gps', { templateUrl: 'partials/gps.html' }).
      when('/images', { templateUrl: 'partials/images.html' }).
      when('/sync', { templateUrl: 'partials/sync.html' }).
      when('/prefs', { templateUrl: 'partials/prefs.html' }).
      otherwise({ redirectTo: '/home' });
  }]);