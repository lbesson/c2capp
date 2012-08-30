'use strict';

angular.module('c2capp.services', []).
  // TODO to be tested 
  // look for $q (see asynchronous things) http://jsfiddle.net/4BVVQ/2/
  factory('geolocation', function($rootScope) {
    var status = 'off';
    function updateStatus(value) {
      status = value;
      $rootScope.$broadcast('GPS', value); // not sure using rootScope and broadcast is the best way
    }
    return {
      start: function() {
        updateStatus('on');
      },
      stop: function() {
        updateStatus('off');
      }
    }
  });