'use strict';

angular.module('gdgWebappApp', [
  'ngMaterial',
  'ngRoute'
])
.controller('AppCtrl', function ($scope,$location) {
  $scope.go = function(url) {
    $location.path(url);
  };
})
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
});
