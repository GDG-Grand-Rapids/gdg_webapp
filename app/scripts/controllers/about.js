'use strict';

angular.module('gdgWebappApp')
  .controller('AboutCtrl', function() {
    var self = this;

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
  });
