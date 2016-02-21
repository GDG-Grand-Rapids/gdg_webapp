'use strict';

angular.module('gdgWebappApp')
  .controller('AboutCtrl', function() {
    this.organizersRow1 = [{
      name: 'Dan McCracken',
      title: 'Title'
    }, {
      name: 'Dan Mikita',
      title: 'Title'
    }, {
      name: 'Jeff Ekdom',
      title: 'Title'
    }];

    this.organizersRow2 = [{
      name: 'Alex Oakley',
      title: 'Title'
    }, {
      name: 'Jeff Williams',
      title: 'Title'
    }];
  });
