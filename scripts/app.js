// Define Globals
var quakesLink = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson'
var myLatLng = {lat: 37.791, lng: -122.401}
var map

// js check
console.log('sanity check')

// Ready Function
$(document).ready(function () {
  listQuakeData()
  initMap()
})

// Create Map Function
function initMap () {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 2
  })
}

// Right Column Data Function and Pins
function listQuakeData (dataResponse) {
  $.ajax({
    method: 'GET',
    url: quakesLink,
    dataType: 'json',
    success: function (dataResponse) {
      console.log(dataResponse)

      var earthquakes = dataResponse

      earthquakes.features.forEach(function listRow (quake) {
        var title = quake.properties.title
        var thisLng = quake.geometry.coordinates[0]
        var thisLat = quake.geometry.coordinates[1]
        var hoursAgo = Math.round((Date.now() - quake.properties.time) / 3600000)
        $('.earthquakeData').append(`<li>${hoursAgo} hours ago  |  ${title}</li>`)
        new google.maps.Marker({
          position: new google.maps.LatLng(thisLat, thisLng),
          map: map,
          title: title
        })
      })
    }
  })
};
