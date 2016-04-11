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
        link: 'http://www.bravolt.com/',
        // source: 'images/sponsors/bravolt_top.png'
        source: 'images/sponsors/bravolt_top.30442a34.png'
      }, {
        title: 'Spectrum Health',
        link: 'http://www.spectrumhealth.org/',
        // source: 'images/sponsors/spectrum.png'
        source: 'images/sponsors/spectrum.864e0a91.png'
      }, {
        title: 'Lean Logistics',
        link: 'http://www.leanlogistics.com/',
        // source: 'images/sponsors/leanlogistics.png'
        source: 'images/sponsors/leanlogistics.dc0a802d.png'
      }]
    }, {
      title: 'Gold',
      images: [{
        title: 'Spindance',
        link: 'https://spindance.com/',
        // source: 'images/sponsors/spindance.png'
        source: 'images/sponsors/spindance.621a09e4.png'
      }, {
        title: 'OST',
        link: 'http://www.ostusa.com/',
        // source: 'images/sponsors/ost.png'
        source: 'images/sponsors/ost.d1b064cd.png'
      }, {
        title: 'New Holland Brewing',
        link: 'http://newhollandbrew.com/',
        // source: 'images/sponsors/newhollandbrewing.png'
        source: 'images/sponsors/newhollandbrewing.c1e4304c.png'
      }]
    }, {
      title: 'Silver',
      images: [{
        title: 'Twistthink',
        link: 'http://www.twisthink.com/',
        // source: 'images/sponsors/twistthink.png'
        source: 'images/sponsors/twistthink.0969dfd7.png'
      }, {
        title: 'Modustri',
        link: 'http://modustri.com/',
        // source: 'images/sponsors/modustri.png'
        source: 'images/sponsors/modustri.2611d956.png'
      }]
    }, {
      title: 'Bronze',
      images: [{
        title: 'TekSystems',
        link: 'https://www.teksystems.com/en',
        // source: 'images/sponsors/teksystems.png'
        source: 'images/sponsors/teksystems.13e86b5a.png'
      }]
    }, {
      title: 'Partners',
      images: [{
        title: 'New Holland Brewing',
        link: 'http://newhollandbrew.com/',
        // source: 'images/sponsors/newhollandbrewing.png'
        source: 'images/sponsors/newhollandbrewing.c1e4304c.png'
      }, {
        title: 'Propaganda Donuts',
        link: 'http://www.propagandadoughnuts.com/',
        // source: 'images/sponsors/propaganda.png'
        source: 'images/sponsors/propaganda.ac52a22b.png'
      }, {
        title: 'Lantern Coffee',
        link: 'http://lanterncoffee.com/',
        // source: 'images/sponsors/lantern.png'
        source: 'images/sponsors/lantern.8a345677.png'
      }, {
        title: 'Silkscreen Marketing',
        link: 'http://www.silkscreenmarketing.com/',
        // source: 'images/sponsors/silkscreen.png'
        source: 'images/sponsors/silkscreen.9c40a3da.png'
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

    $interval(callAtInterval, 10000);

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
