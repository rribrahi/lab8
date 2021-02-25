function initMap() {
L.mapquest.key = 'O3UaBILtZZ4sZAg5nTZdioDCkFAsnLm8';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [37.7749, -122.4194],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
  //zoomControl: false
});
	// add your code here
L.marker([32.88, -118]).addTo(map);
}