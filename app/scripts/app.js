'use strict';

angular.module('gdgWebappApp', [
    'ngMaterial',
    'ngRoute'
  ])
  .controller('AppCtrl', function ($document, $scope, $location, $window, $anchorScroll) {
    var self = this;

    self.items = [{
      name: 'Twitter',
      icon: 'images/icons/twitter.a59e6b76.svg',
      url: 'https://www.twitter.com/'
    }, {
      name: 'Google Plus',
      icon: 'images/icons/google-plus.8f170833.svg',
      url: 'https://plus.google.com/116106643420425488667/about'
    }, {
      name: 'Github',
      icon: 'images/icons/github-circle.231d7cad.svg',
      url: 'https://github.com/GDG-Grand-Rapids'
    }, {
      name: 'Facebook',
      icon: 'images/icons/facebook.c3e23151.svg',
      url: 'https://www.facebook.com/gdggrandrapids'
    }, {
      name: 'Meetup',
      icon: 'images/icons/calendar-check.09b470a8.svg',
      url: 'http://www.meetup.com/GDG-Grand-Rapids/'
    }];

    $scope.gotoLocation = function () {
      $location.hash('content');
      $anchorScroll();
    };

    $scope.go = function (url) {
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
      .when('/sponsors', {
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorCtrl',
        controllerAs: 'sponsors'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
