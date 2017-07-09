// Define Globals
var quakesLink = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson'
var myLatLng = {lat: 37.791, lng: -122.401}

// js check
console.log('sanity check')

// Ready Function
$(document).ready(function () {
  console.log('document ready sanity check!')
  textData()
  initMap()
})

// Create Map Function
function initMap () {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 2
  })
  var marker = new google.maps.Marker({
    position: {
      lat: 37.791,
      lng: -122.401},
    map: map,
    title: 'Home'
  })
};

// Right Column Data Function
function textData () {
  $.ajax({
    method: 'GET',
    url: quakesLink,
    dataType: 'json',
    success: onSuccess
  })

  var lat = dataResponse.geometry.coordinates[1]
  var lng = dataResponse.geometry.coordinates[0]

  function onSuccess (dataResponse) {
    for (i = 0; i <= 25; i++) {
      $('.earthquakeData').append(`<li>${dataResponse.features[i].properties.title}</li>`)
    }
  }
}

// Google Map

// lng ${dataResponse.features[1].geometry.coordinates[0]}
// lat ${dataResponse.features[1].geometry.coordinates[1]}
// };
