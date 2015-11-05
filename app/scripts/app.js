'use strict';

angular.module('gdgWebappApp', [
    'ngMaterial',
    'ngRoute'
  ])
  .controller('AppCtrl', function($scope, $location, $window) {
    var self = this;

    self.hidden = false;
    self.isOpen = false;
    self.hover = false;

    self.items = [{
      name: 'Twitter',
      icon: 'images/icons/twitter.svg',
      url: 'https://www.twitter.com/'
    }, {
      name: 'Facebook',
      icon: 'images/icons/facebook.svg',
      url: 'https://www.facebook.com/gdggrandrapids'
    }];

    $scope.redirect = function(url) {
      $window.location.href = url;
    };

    $scope.go = function(url) {
      $location.path(url);
    };
  })
  .config(function($routeProvider) {
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
      .when('/sponsors', {
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorCtrl',
        controllerAs: 'sponsors'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
