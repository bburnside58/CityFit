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

//creates a second map from the paramaters passed through mapProp
var map2 =new google.maps.Map(document.getElementById("googleMap2"), mapProp);
}


//adds the marker to the center of the map 
//NEED TO DEFINE CENTER STILL 
//var marker=new google.maps.Marker({
	//position:center,
//});
//marker.setMap(map);

//adds a DOM listener that will execute the initialize function on window when the page is loaded
google.maps.event.addDomListener(window, 'load', initialize);