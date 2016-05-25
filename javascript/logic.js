//Initializes the map with page load
function initialize() {

//defines the properties for the map
	 var mapProp = {
	 	//center is the (lat, long) that will be the center of the map
  		center:new google.maps.LatLng(51.508742, -0.120850),
		//specifies zoom levels for the map higher levels will be a higher resoution. 0 is a view of the earth
  		zoom: 7, 
  		//lets users drag the map
  		draggable:true,
  		//lets users scroll through the page with out moving the map
  		disableDefaultUI:false,
  		//specifies the type of map to display. Road map is normal, 2D. Could switch to 'Hybrid' and have photo with road and city names.
  		mapTypeId: google.maps.MapTypeId.Hybrid
  		
		};

//creates a new map inside the div element googleMap in html using the paramaters that are passed through mapProp
var map1=new google.maps.Map(document.getElementById("googleMap"), mapProp);
		//center:{
			//lat: 51.508742,
			//lng: -0.120850
		//},
		//zoom:15
	

//creates a second map from the paramaters passed through mapProp
var map2 =new google.maps.Map(document.getElementById("googleMap2"), mapProp);
};//{
		//center:{
			//lat: 51.508742,
			//lng: -0.120850
		//},
	//};

//var marker = new google.maps.Marker({
 	//position:( new google.maps.LatLng(51.508742, -0.120850),

 		//map:map,
 		//draggable:true
 //});

//This pulls from the google places library of possible destinations
var searchBox = new google.maps.places.SearchBox(document.getElementById('mapsearch'));

//place change event on search box
google.maps.event.addDomListener(searchBox, 'places_changed', function(){

	var places = searchBox.getPlaces();
	console.log(searchBox.getPlaces());

	//bound
	var bounds = new google.maps.LatLngBounds();
	var i, place;

	for (i=0; place=places[i]; i++){
		//console.log(place.geometry);

		bounds.extend(place.geometry.location);
		//maker.setPosition(place.geometry.location); //sets new marker position
	}
//map.fitBounds(bounds); //fit to the bound
//map.setZoom(15);
});

//adds the marker to the center of the map 
//NEED TO DEFINE CENTER STILL 
//var marker=new google.maps.Marker({
	//position:center,
//});
//marker.setMap(map);

//adds a DOM listener that will execute the initialize function on window when the page is loaded
google.maps.event.addDomListener(window, 'load', initialize);

//=============================================================

//function computeCalories(input) {

	var calories = 0;
switch (input) {
	case "walking": calories=4; break;
	case "running": calories=10; break;
	case "swimming": calories=6; break;
	case "kayaking": calories=9; break; 
	case "bicycling": calories=8; break;

	}
	var newCalorieCount = calories.toFixed(2);
	return newCalorieCount;
}
	//function calculateCals() {
		var minutes = document.getElementById('activityTime');
		var weight = document.getElementById('userWeight');
		var age = document.getElementById('userAge');
		var gender = document.getElementById('userGender');


var caloriesBurned = document.getElementById('caloriesBurned');
var exercise = document.getElementById('activityChoice');
var time = Math.floor(minutes.value);
var userWeight = Math.floor(weight.value);
var totalCalories = Math.floor(caloriesBurned.value);

	var tmpTotal = Math.abs(computeCalories(exercise.value) * (weight/2.2) * (time/60));
	var displayTotal = tmpTotal.toFixed(0);

caloriesBurned.value =displayTotal;

	$('')
}
//
//===============================================================================

function calsPerDay() {
  function find(id) { return document.getElementById(id) }

  var age = find("age").value
  var height = find("height").value * 2.54
  var weight = find("weight").value / 2.2
  var result = 0
  if (find("male").checked) 
    result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age))
  else if (find("female").checked)
    result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age))
  find("totalCals").innerHTML = Math.round( result )
}
calsPerDay()


//====================================================

function resetForm(){
	document.getElementById("calorieCounterForm").reset();
} 

function findHeartRate(input) {

var heartRate = 0;
switch (input) {
	case "walking (leisurely)": heartRate=75; break;
	case "running": heartRate=130; break;
	case "swimming": heartRate=140; break;
	case "kayaking": heartRate=115; break; 
	case "bicycling": heartRate=125; break;

}
	var newHeartRate = heartRate.toFixed(2);
	return newHeartRate;

$("#computeCalories").on("click", function calculateCals(){
function find(id) {
	return document.getElementById(id)
}
	
	var age = find("age").value
	var weight = find ("weight").value
	var exercise = newHeartRate.value
	var time = find ("minutes").value
	if (find("male").checked)
		result = ((age * 0.2017) - (weight * 0.09036) + (exercise * 0.6309) - 55.0969) * time/4.184
	else if (find("female").checked)
		result = ((age * 0.074) - (weight * 0.05741) + (exercise * 0.4472) - 20.4022) * time/4.184
		find("caloriesBurned").innerHTML = Math.round( result )
	})

}

