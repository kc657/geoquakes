// define globals
console.log('sanity check')

$(document).ready(function () {
  console.log("Let's get coding!");

  $.ajax({
    method: 'GET',
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson',
    dataType: 'json',
    success: onSuccess
  })

  function onSuccess (dataResponse) {
    for (i = 0; i <= 25; i++) {
      $('.earthquakeData').append(`<li>${dataResponse.features[i].properties.title}</li>`)
    }
  }
})
