'use strict';

function initMap() {
  var styles = [{
    stylers: [{
      hue: '#455A64'
    }, {
      saturation: -75
    }]
  }];
  var styledMap = new google.maps.StyledMapType(styles, {
    name: 'Styled Map'
  });
  var myLatLng = {
    lat: 42.963652,
    lng: -85.680865
  };
  var mapOptions = {
    zoom: 14,
    center: myLatLng,
    draggable: false,
    scrollwheel: false,
    scaleControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var mapText = document.getElementById('map-text');
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Google I/O'
  });
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(mapText);
}
