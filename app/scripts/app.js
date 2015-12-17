'use strict';

angular.module('gdgWebappApp', [
    'ngMaterial',
    'ngRoute'
  ])
  .controller('AppCtrl', function($document, $scope, $location, $window, $anchorScroll) {
    var self = this;

    self.items = [{
      name: 'Twitter',
      icon: 'images/icons/twitter.svg',
      url: 'https://www.twitter.com/'
    }, {
      name: 'Google Plus',
      icon: 'images/icons/google-plus.svg',
      url: 'https://plus.google.com/116106643420425488667/about'
    }, {
      name: 'Github',
      icon: 'images/icons/github-circle.svg',
      url: 'https://github.com/GDG-Grand-Rapids'
    }, {
      name: 'Facebook',
      icon: 'images/icons/facebook.svg',
      url: 'https://www.facebook.com/gdggrandrapids'
    }, {
      name: 'Meetup',
      icon: 'images/icons/calendar-check.svg',
      url: 'http://www.meetup.com/GDG-Grand-Rapids/'
    }];

    // $scope.isHeaderMinimized = false;
    // $scope.header = 'header';
    // angular.element($window).bind(
    //   'scroll',
    //   function() {
    //     if ($window.pageYOffset > 1000) {
    //       $scope.isHeaderMinimized = true;
    //       $scope.header = 'toolbar-scroll';
    //       $scope.opacity = {
    //         'opacity': 1
    //       };
    //     } else {
    //       $scope.isHeaderMinimized = false;
    //       $scope.header = 'header';
    //       $scope.opacity = {
    //         'opacity': 0.7
    //       };
    //     }
    //     $scope.$apply();
    //   });

    $scope.gotoLocation = function() {
      $location.hash('content');
      $anchorScroll();
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
