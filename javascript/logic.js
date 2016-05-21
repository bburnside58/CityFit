//Initializes the map with page load
function initialize() {

//defines the properties for the map
	 var mapProp = {
	 	//center is the (lat, long) that will be the center of the map
  		center:new google.maps.LatLng(51.508742, -0.120850),
		//specifies zoom levels for the map higher levels will be a higher resoution. 0 is a view of the earth
  		zoom: 7, 
  		//specifies the type of map to display. Road map is normal, 2D. Could switch to 'Hybrid' and have photo with road and city names.
  		mapTypeId: google.maps.MapTypeId.ROADMAP
		};

//creates a new map inside the div element googleMap in html using the paramaters that are passed through mapProp
var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
//adds a DOM listener that will execute the initialize function on window when the page is loaded
google.maps.event.addDomListener(window, 'load', initialize);