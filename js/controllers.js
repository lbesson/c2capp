'use strict';

/* the nav element needs several informations for display */
function NavCtrl($scope, $location, geolocation) {
  // we need information on the location
  // so that we can correctly style the navigation items
  $scope.$location = $location;
  $scope.pages = ['Home', 'GPS', 'Images', 'Sync', 'Prefs'];

  // we also want to be able to display gps state
  $scope.gps = 'off';
  $scope.$on('GPS', function(evt, status) {
    $scope.gps = status;
  });
}

/* retrieve / update the interface language from / to localStorage
   and restart app if needed */
function LangPrefCtrl($scope, $filter) {
  $scope.langs = [
    {code: 'fr', name: 'français'},
    {code: 'it', name: 'italiano'},
    {code: 'de', name: 'deutsch'},
    {code: 'en', name: 'english'},
    {code: 'es', name: 'español'},
    {code: 'ca', name: 'català'},
    {code: 'eu', name: 'euskara'}
  ];
  $scope.lang = window.localStorage && window.localStorage.getItem('c2capp_lang') || 'fr';

  // Whenever user changes the lang param, store it locally and reload
  $scope.$watch('lang', function(newvalue, oldvalue) {
    if (newvalue !== oldvalue) {
      window.localStorage && window.localStorage.setItem('c2capp_lang', newvalue);
      // We need to reload the page, so that correct i18n javascripts
      // can be loaded from index.html (or language will change after restart)
      // TODO improve this!
      if (confirm($filter('i18n')('lang_confirm'))) {
        window.location.reload();
      }
    }
  });
}

function GpsCtrl($scope, geolocation) {
  $scope.geolocation = geolocation;
}