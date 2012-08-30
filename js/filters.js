'use strict';

angular.module('c2capp.filters', []).
  /* Substr filter, works like javascript substr() */
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
