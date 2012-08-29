'use strict';

/* Filters */

/* Substr filter, works like javascript substr() */
angular.module('c2capp.filters', []).
  filter('substr', function() {
    return function(text, start, length) {

      if (isNaN(start)) {
      	return String(text);
      }

      if (length === undefined || isNaN(length)) {
        return String(text).substr(start);
      } else {
      	return String(text).substr(start, length);
      }
    }
  });
