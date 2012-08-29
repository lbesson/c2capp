'use strict';

/* the nav element needs information on the location
   so that we can correctly style the navigation items */
function NavCtrl($scope, $location) {
  $scope.$location = $location;
}

// TODO doc + tests....
function LangCtrl($scope) {
  $scope.langs = ['fr', 'it', 'de', 'en', 'es', 'ca', 'eu'];
  $scope.lang = window.localStorage && window.localStorage.getItem('c2capp_lang') || 'fr';

  // Whenever user changes the lang param, store it locally and force reload
  // TODO save things locally before reloading page??
  $scope.$watch('lang', function(newvalue, oldvalue) {
  	if (newvalue !== oldvalue) {
      window.localStorage && window.localStorage.setItem('c2capp_lang', newvalue);
      window.location.reload();
    }
  });
}
