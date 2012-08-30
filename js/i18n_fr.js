'use strict';

/* i18n module */
angular.module('c2capp.i18n', []).
  value('i18n', {
    'Home': 'Maison',
    'GPS': 'GPS',
    'Language:': 'Langue de l\'interface :',
    'lang_confirm': 'Redémarrer l\'application maintenant ? (les changements en cours seront perdus)'
  }).
  filter('i18n', function(i18n) {
    return function(input) {
      return i18n[input] || input;
    }
  });

//see https://github.com/Jehu/Angular-Addons/blob/master/filter.i18n.js if we want
// more complex handling

// alse note that you need to look at the ngBindHtmlUnsafe if you need to prevent escaping
// http://docs.angularjs.org/api/ng.directive:ngBindHtmlUnsafe