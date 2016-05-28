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
				var pCondition = $('<p>').text(condition);
				var pTemp = $('<p>').text(temp + "F");
				var pHumidity = $('<p>').text("Humidity: " + humidity + "%");

				//appending relevent weather data to weatherDiv div 
				weatherDiv.append(pTime)
				weatherDiv.append(pCondition)
				weatherDiv.append(pTemp)
				weatherDiv.append(pHumidity)

				//ADDING A CLASS!! TO NEW WEATHER DIVS!!
				weatherDiv.addClass('jsWeatherDivs col-xs-6 col-sm-3 col-md-2')
				//adding a class to the paragraph tags just in case need it later in css
				pTime.addClass('jsWeatherPtags text-center')
				pCondition.addClass('jsWeatherPtags text-center')
				pTemp.addClass('jsWeatherPtags text-center')
				pHumidity.addClass('jsWeatherPtags text-center')

				//pushing to html weatherDataDiv div
				$('#weatherDataDiv').append(weatherDiv)

			}
		}
	});
});

	//creating function calsBurned, we are then using JQuery method 'find' to grab inputs from the html id's and pass them into the variables below
	function calsBurned() {

		function find(id) { return document.getElementById(id) }

		//creating variables to store the values of the html inputs
		var age = find("age").value
		var time = find("height").value
		var weight = find("weight").value 
		var result = 0

		//we go into an if/else if statement to calculate calories burned using equation built upon research online 
		//the equation is basing your activity on heartrate, on average 120bpm's during walking or light jogging, and takes gender, age, and weight into account to estimate calories burnt in the amount of time you maintained your walk

		if (find("male").checked) 
		result = [(weight * 0.082) - (age * 0.08) + (120 * 0.61) - 55.07] * time/4.184

		else if (find("female").checked)
		result = [(weight * 0.061) - (age * 0.07) + (120 * 0.35) - 19.41] * time/4.184

		//calls totalCals in html and uses innerHTML method to push results onto the page, Math.round will round the answer to nearest whole number

		find("totalCals").innerHTML = Math.round( result )

	}

	//runs the above function
	calsBurned();


//Google API below
var map;
var infoWindow;
var request;
var service;
var markers = [];
var center;
var pos;

window.initMap =function() {
  center = new google.maps.LatLng(-34.397, 150.644);
    map = new google.maps.Map(document.getElementById('map'), {
    center: center,//{lat: -34.397, lng: 150.644},
    zoom: 15
    });


// Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

   // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
          });
   // pulls from google maps the information and sets info windows
    var infowindow = new google.maps.InfoWindow();

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
        
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();
          if (places.length === 0) {
          return;
          }

      // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];
    // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            //properties for the icon at each place
            var icon = {
              url: place.icon,
              size: new google.maps.Size(25, 25),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Creates a marker for each place and puts them on the map
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location

            }));
           //Click event to show info on markers 
            google.maps.event.addListener(markers, 'click', function() {
              console.log('click event registered');
            service.getDetails(place, function(result, status) {
            //Information on what goes in the info window
            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + 'Place ID: ' + place.place_id + '<br>' +
              place.formatted_address);
            

            if (status !== google.maps.places.PlacesServiceStatus.OK) {
            console.error(status);
            return;
            }

        infowindow.setContent(result.name);
        infowindow.open(map, markers);
       });
  });

      
        if (place.geometry.viewport) {
              // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
          } else {
          bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });
    };




  // geolocation for where user is
       if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
           };

      //infoWindow.setPosition(pos);
      //infoWindow.setContent('Location found.');
          map.setCenter(pos);
          }, function() {
             // handleLocationError(true, infowindow, map.getCenter());
              });
          } else {
    // Browser doesn't support Geolocation
         handleLocationError(false, infowindow, map.getCenter());
  }

   

//alerts user when there is an error
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //infoWindow.setPosition(pos);
  infoWindow.PlacesServiceStatusContent(browserHasGeolocation ?
       'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');

}



  //infoWindow = new google.maps.InfoWindow();
  //service = new google.maps.places.PlacesService(map);

  


//This isn't used but causes issues when deleted

function addMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: {
      url: 'http://maps.gstatic.com/mapfiles/circle.png',
      anchor: new google.maps.Point(10, 10),
      scaledSize: new google.maps.Size(10, 17)
    }
  });

 
}