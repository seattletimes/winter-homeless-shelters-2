//load our custom elements
require("component-leaflet-map");
require("component-responsive-frame");

//get access to Leaflet and the map
var element = document.querySelector("leaflet-map");
var L = element.leaflet;
var map = element.map;

// console.log('hi mom');

//ICH code for popup template if needed----------
// var ich = require("icanhaz");
// var templateFile = require("./_popup.html");
// ich.addTemplate("popup", templateFile);

// var onEachFeature = function(feature, layer) {
//   layer.bindPopup(ich.popup(feature.properties))
// };
var markers = [];
var markergroup = L.featureGroup()

window.course.forEach(function(data) {
  var marker = L.marker([data.lat, data.lng], {
    icon: L.divIcon({
      className: "golf-icon"
    })
  });
  var html = `
    <b>${data.shelterName}</b><br>
    <br>
    Address: ${data.address}<br>

    Available to: ${data.availableTo}<br>
    Hours: ${data.hours}<br>
    Phone number: ${data.phone}<br>
    Website: ${data.website}<br>

  `;
  console.log(marker);
  marker.bindPopup(html);
  markers.push(marker);
  marker.addTo(markergroup);
});

markergroup.addTo(map);

 map.scrollWheelZoom.disable();
 map.fitBounds(markergroup.getBounds())
