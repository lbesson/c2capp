'use strict';

/* i18n module */
angular.module('c2capp.i18n', []).
  value('i18n', {
  }).
  filter('i18n', function(i18n) {
    return function(input) {
      return i18n[input] || input;
    }
  });