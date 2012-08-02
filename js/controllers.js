'use strict';

/* the nav element needs information on the location
   so that we can correctly style the navigation items */
function NavCtrl($scope, $location) {
  $scope.$location = $location;
}
