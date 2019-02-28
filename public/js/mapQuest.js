function initMap() {
	// add your code here
  L.mapquest.key = 'BUiDQGafnELSX9sm6FMYL2ZHm1uuwc62'

  // 'map' refers to a <div> element wit the ID map
  var map = L.mapquest.map('map', {
    center: [32.8788033,-117.2359121],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  // Add a marker to the map
  L.marker([32.88, -117.236]).addTo(map);
}
