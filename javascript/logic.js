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

//===========================================================
function calsBurned() {
  function find(id) { return document.getElementById(id) }

  var age = find("age").value
  var time = find("height").value
  var weight = find("weight").value 
  var result = 0
  if (find("male").checked) 
   result = [(weight * 0.082) - (age * 0.08) + (120 * 0.61) - 55.07] * time/4.184
  
  else if (find("female").checked)
   result = [(weight * 0.061) - (age * 0.07) + (120 * 0.35) - 19.41] * time/4.184
  
  find("totalCals").innerHTML = Math.round( result )

}
calsBurned()



//====================================================


