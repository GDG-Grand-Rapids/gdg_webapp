'use strict';

angular.module('gdgWebappApp', [
    'ngMaterial',
    'ngRoute',
    'uiGmapgoogle-maps'
  ])
  .controller('AppCtrl', function($document, $scope, $location, $window, $anchorScroll) {
    var self = this;

    $scope.map = {center: {latitude: 42.964411, longitude: -85.677043 }, zoom: 14 };

    $scope.marker = {
      id: 0,
      coords: {
        latitude: 42.964411,
        longitude: -85.677043
      }
    };

    $scope.gotoLocation = function() {
      $location.hash('content');
      $anchorScroll();
    };

    self.organizersRow1 = [{
      name: 'Dan McCracken',
      title: 'Title'
    }, {
      name: 'Dan Mikita',
      title: 'Title'
    }, {
      name: 'Jeff Ekdom',
      title: 'Title'
    }];

    self.organizersRow2 = [{
      name: 'Alex Oakley',
      title: 'Title'
    }, {
      name: 'Jeff Williams',
      title: 'Title'
    }];

    self.items = [{
      name: 'Twitter',
      // icon: 'images/icons/twitter.a59e6b76.svg',
      icon: 'images/icons/twitter.svg',
      url: 'https://www.twitter.com/'
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

    $scope.go = function(url) {
      $location.path(url);
    };
  })
  .config(function($routeProvider, uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
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
        templateUrl: 'views/contacts.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
