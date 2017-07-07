// define globals
var quakesLink = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson';

console.log('sanity check');


$(document).ready(function () {
  console.log("Let's get coding!");

  $.ajax({
    method: 'GET',
    url: quakesLink,
    dataType: 'json',
    success: onSuccess
  });

  function onSuccess (dataResponse) {
    for (i = 0; i <= 25; i++) {
      $('.earthquakeData').append(`<li>${dataResponse.features[i].properties.title}</li>`)
    }
  }

});

// Google Map
$('#map').append(`initMap`);

function initMap () {
  var myLatLng = {lat: 37.791, lng: -122.401};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 2
  });

  var marker = new google.maps.Marker({
    position: {lat: 37.791, lng: -122.401},
    map: map,
    title: 'Home'
  });

};
