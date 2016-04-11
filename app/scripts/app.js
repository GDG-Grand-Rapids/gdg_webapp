'use strict';

angular.module('gdgWebappApp', [
    'ngMaterial',
    'ngRoute'
  ])
  .controller('AppCtrl', function($scope, $document, $location, $window, $timeout, $interval, $mdSidenav, $anchorScroll) {
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID).toggle();
      };
    }
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function() {
      return $mdSidenav('right').isOpen();
    };
    $scope.close = function() {
      $mdSidenav('right').close();
    };

    $scope.go = function(url) {
      $location.path(url);
    };

    $scope.open = function(url) {
      $window.open(url);
    };

    $scope.scrollToTop = function() {
      $window.scrollTo(0, 0);
    };

    var tabs = [{
      title: 'Platinum',
      images: [{
        title: 'BravoLT',
        link: 'http://bravolt.com/',
        source: 'images/sponsors/bravolt_top.png'
      }, {
        title: 'Spectrum Health',
        link: 'http://www.spectrumhealth.org/',
        source: 'images/sponsors/spectrum.png'
      }, {
        title: 'Lean Logistics',
        link: 'http://www.leanlogistics.com/',
        source: 'images/sponsors/leanlogistics.png'
      }]
    }, {
      title: 'Gold',
      images: [{
        title: 'Spindance',
        link: 'https://spindance.com/',
        source: 'images/sponsors/spindance.png'
      }, {
        title: 'OST',
        link: 'http://www.ostusa.com/',
        source: 'images/sponsors/ost.png'
      }, {
        title: 'New Holland Brewing',
        link: 'http://newhollandbrew.com/',
        source: 'images/sponsors/newhollandbrewing.png'
      }]
    }, {
      title: 'Silver',
      images: [{
        title: 'Twistthink',
        link: 'http://www.twisthink.com/',
        source: 'images/sponsors/twistthink.png'
      }, {
        title: 'Modustri',
        link: 'http://modustri.com/',
        source: 'images/sponsors/modustri.png'
      }]
    }, {
      title: 'Bronze',
      images: [{
        title: 'TekSystems',
        link: 'https://www.teksystems.com/en',
        source: 'images/sponsors/teksystems.png'
      }]
    }, {
      title: 'Partners',
      images: [{
        title: 'New Holland Brewing',
        link: 'http://newhollandbrew.com/',
        source: 'images/sponsors/newhollandbrewing.png'
      }, {
        title: 'Propaganda Donuts',
        link: 'http://www.propagandadoughnuts.com/',
        source: 'images/sponsors/propaganda.png'
      }, {
        title: 'Lantern Coffee',
        link: 'http://lanterncoffee.com/',
        source: 'images/sponsors/lantern.png'
      }, {
        title: 'Silkscreen Marketing',
        link: 'http://www.silkscreenmarketing.com/',
        source: 'images/sponsors/silkscreen.png'
      }]
    }];

    $scope.gotoElement = function(element) {
      $location.hash(element);
      $anchorScroll();
    };

    $scope.tabs = tabs;

    function callAtInterval() {
      $scope.selectedIndex = $scope.selectedIndex + 1;

      if ($scope.selectedIndex === tabs.length) {
        $scope.selectedIndex = 0;
      }
    }

    $interval(callAtInterval, 5000);

    angular.element($window).bind('scroll', function() {
      var header = angular.element(document.querySelector('.gdg-Header'));
      var toolbar = angular.element(document.querySelector('.gdg-Toolbar'));
      var scrollTop = toolbar.scrollTop();
      var offset = toolbar.offset().top;
      var height = toolbar.outerHeight();
      var pageHeight = header.prop('offsetHeight');
      offset = offset + height / 2;
      var opacity = 0.9 - (scrollTop - offset + pageHeight) / pageHeight;

      toolbar.css({
        'opacity': opacity
      });

      if (opacity > '1') {
        toolbar.css({
          'opacity': 1
        });
      } else if (opacity < '0') {
        toolbar.css({
          'opacity': 0
        });
      }
      $scope.$apply();
    });
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
      'A700': 'FFFFFF',
      'contrastDefaultColor': 'light'
    });
    $mdThemingProvider.theme('default')
      .primaryPalette('gdgPalette', {
        'default': '300',
        'hue-1': '50',
        'hue-2': '50',
        'hue-3': '50'
      })
      .accentPalette('gdgPalette', {
        'default': '700',
        'hue-1': 'A100',
        'hue-2': 'A100',
        'hue-3': 'A100'
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
