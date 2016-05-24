// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
$(document).ready(function(){

	//weather underground api url
	$.ajax({
	  url : "http://api.wunderground.com/api/77cd5507fb26ca1c/hourly/q/autoip.json",
	  dataType : "jsonp",

		success : function(data) {

			console.log(data);
			//for loop for how many hours we want, 12 sounds good for this web app
			for (var i = 0; i < 12; i++){

				//variable to grab each data we want
				var time = data['hourly_forecast'][i]['FCTTIME']['civil'];
			  	var condition = data['hourly_forecast'][i]['condition'];
				var temp = data['hourly_forecast'][i]['temp']['english'];
				var humidity = data['hourly_forecast'][i]['humidity'];
				// var icon = parsed_json['hourly_forecast'][i]['icon'];
				// var iconUrl = parsed_json['hourly_forecast'][i]['icon_url'];

				//making a div for each hour of weather data to push into html later
				var weatherDiv = $('<div>');

				//Want to try to work to include the icons here or elsewhere at a later time
				//here are paragraph tags to push into weatherDiv for each weather data parameter
				var pTime = $('<p>').text(time);
				var pCondition = $('<p>').text("Local Conditions: " + condition);
				var pTemp = $('<p>').text("Temp: " + temp + "F");
				var pHumidity = $('<p>').text("Humidity: " + humidity + "%");

				//appending relevent weather data to weatherDiv div 
				weatherDiv.append(pTime)
				weatherDiv.append(pCondition)
				weatherDiv.append(pTemp)
				weatherDiv.append(pHumidity)

				//ADDING A CLASS!! TO NEW WEATHER DIVS!!
				weatherDiv.addClass('jsWeatherDivs')
				//adding a class to the paragraph tags just in case need it later in css
				pTime.addClass('jsWeatherPtags')
				pCondition.addClass('jsWeatherPtags')
				pTemp.addClass('jsWeatherPtags')
				pHumidity.addClass('jsWeatherPtags')

				//pushing to html weatherDataDiv div
				$('#weatherDataDiv').append(weatherDiv)

			}
		}
	});










});