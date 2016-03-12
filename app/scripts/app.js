'use strict';

angular.module('gdgWebappApp', [
    'ngMaterial',
    'ngRoute'
  ])
  .controller('AppCtrl', function($scope, $location, $window, $timeout, $mdSidenav) {
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID).toggle();
      };
    }
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    $scope.close = function () {
      $mdSidenav('right').close();
    };

    $scope.go = function(url) {
      $location.path(url);
    };

    $scope.scrollToTop = function() {
      $window.scrollTo(0, 0);
    };

    this.items = [{
      name: 'Twitter',
      // icon: 'images/icons/twitter.a59e6b76.svg',
      icon: 'images/icons/twitter.svg',
      url: 'https://twitter.com/ioextendedgr'
    }, {
      name: 'Google Plus',
      // icon: 'images/icons/google-plus.8f170833.svg',
      icon: 'images/icons/google-plus.svg',
      url: 'https://plus.google.com/116106643420425488667/about'
    }, {
      name: 'Github',
      // icon: 'images/icons/github-circle.231d7cad.svg',
      icon: 'images/icons/github-circle.svg',
      url: 'https://github.com/GDG-Grand-Rapids'
    }, {
      name: 'Facebook',
      // icon: 'images/icons/facebook.c3e23151.svg',
      icon: 'images/icons/facebook.svg',
      url: 'https://www.facebook.com/gdggrandrapids'
    }, {
      name: 'Meetup',
      // icon: 'images/icons/calendar-check.09b470a8.svg',
      icon: 'images/icons/calendar-check.svg',
      url: 'http://www.meetup.com/GDG-Grand-Rapids/'
    }];
  })
  .config(function($routeProvider, $mdThemingProvider) {
    $mdThemingProvider.definePalette('gdgPalette', {
      '50': 'ECEFF1',
      '100': 'CFD8DC',
      '200': 'B0BEC5',
      '300': '90A4AE',
      '400': '78909C',
      '500': '607D8B',
      '600': '546E7A',
      '700': '455A64',
      '800': '37474F',
      '900': '263238',
      'A100': 'FFFFFF',
      'A200': 'FFFFFF',
      'A400': 'FFFFFF',
      'A700': 'FFFFFF'
    });
    $mdThemingProvider.theme('default')
      .primaryPalette('gdgPalette', {
        'default': '700',
        'hue-1': '50',
        'hue-2': '50',
        'hue-3': '50'
      });

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/sponsors', {
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorCtrl',
        controllerAs: 'sponsors'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// app.directive('scroll', function($window) {
//   return function($scope) {
//     angular.element($window).bind('scroll', function() {
//       if (this.pageYOffset >= 440) {
//         $scope.menuScroll = true;
//       } else {
//         if ($scope.home === false) {
//           $scope.menuScroll = true;
//         } else {
//           $scope.menuScroll = false;
//         }
//       }
//       $scope.$apply();
//     });
//   };
// });
