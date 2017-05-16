'use strict';

angular.module('gdgWebappApp', [
    'ngMaterial',
    'ngRoute'
  ])
  .controller('AppCtrl', function($scope, $document, $location, $window, $timeout, $interval, $mdSidenav, $anchorScroll) {
    $scope.go = function(url) {
      $location.path(url);
    };

    $scope.open = function(url) {
      $window.open(url);
    };

    $scope.scrollToTop = function() {
      $window.scrollTo(0, 0);
    };

    $scope.gotoElement = function(element) {
      $location.hash(element);
      $anchorScroll();
    };

    function callAtInterval() {
      $scope.selectedIndex = $scope.selectedIndex + 1;

      if ($scope.selectedIndex === 3) {
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
  });
