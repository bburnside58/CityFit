
var map;
var infoWindow;
var request;
var service;
var markers = [];

function initMap() {
	var center = new google.maps.LatLng(-34.397, 150.644);
  	map = new google.maps.Map(document.getElementById('map'), {
    center: center,//{lat: -34.397, lng: 150.644},
    zoom: 14
  	});


  // geolocation for where user is
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

 

//alerts user when there is an error
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');

};
// this is where it defines the area and what we are searching for
   request = {
    location: center,
    radius: 8047, //meters
    types: ['cafe'] // the criteria that we are looking for in our places - this will need to be replaced with info from the button

  };
  console.log(request);

//this shows information at each marker
  infoWindow = new google.maps.InfoWindow({map: map});

  service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, callback);
}
//this function creates the markers at the locations
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      markers.push(createMarker(results[i]));
    }
}
//puts the maker at each of the places
function createMaker(place){
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
	});
	return marker;
}


//clears old markers
function clearResults (markers){
		for (var m in markers){
			markers [m].setMap(null)
		}
		markers = []
}
//this will select a new group of places if the user drags the map and clicks on a different center
  google.maps.event.addListener(map, 'rightclick', function(event){
  	map.setCenter(event.latlng) //resets the map
  	clearResults(markers) //clears the old makers
  	//new area is defined
  	var request = {
  		location: event.latlng,
  		radius: 8047, 
  		types: ['cafe'] // will need to update with the button results
  	};
  	service.nearbySearch(request, callback);
  	console.log("request");

  })


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
	})
})
	};



