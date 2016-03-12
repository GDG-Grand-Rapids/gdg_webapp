'use strict';

angular.module('gdgWebappApp', [
    'ngMaterial',
    'ngRoute'
  ])
  .controller('AppCtrl', function() {
    // function buildToggler(navID) {
    //   return function() {
    //     $mdSidenav(navID).toggle();
    //   };
    // }
    // $scope.toggleRight = buildToggler('right');
    // $scope.isOpenRight = function(){
    //   return $mdSidenav('right').isOpen();
    // };
    // $scope.close = function () {
    //   $mdSidenav('right').close();
    // };
    //
    // $scope.go = function(url) {
    //   $location.path(url);
    // };
    //
    // $scope.scrollToTop = function() {
    //   $window.scrollTo(0, 0);
    // };
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
        'default': 'A100',
        'hue-1': '50',
        'hue-2': '50',
        'hue-3': '50'
      });

    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/home.html',
    //     controller: 'HomeCtrl',
    //     controllerAs: 'home'
    //   })
    //   .when('/events', {
    //     templateUrl: 'views/events.html',
    //     controller: 'EventsCtrl',
    //     controllerAs: 'events'
    //   })
    //   .when('/sponsors', {
    //     templateUrl: 'views/sponsors.html',
    //     controller: 'SponsorCtrl',
    //     controllerAs: 'sponsors'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl',
    //     controllerAs: 'about'
    //   })
    //   .when('/contact', {
    //     templateUrl: 'views/contact.html',
    //     controller: 'ContactCtrl',
    //     controllerAs: 'contact'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  });
