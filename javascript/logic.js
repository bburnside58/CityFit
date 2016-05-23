var geocoder;
var map;
var map2;
//Initializes the map with page load
function initialize() {

geocoder = new google.maps.Geocoder();
var latlng =new google.maps.LatLng(-34.397,150.644);
//defines the properties for the map
   var mapProp = {
     //specifies zoom levels for the map higher levels will be a higher resoution. 0 is a view of the earth
      zoom: 7, 
    //center is the (lat, long) that will be the center of the map
      center: latlng,
      //lets users drag the map
      draggable:true,
      //lets users scroll through the page with out moving the map
      disableDefaultUI:false,
      //specifies the type of map to display. Road map is normal, 2D. Could switch to 'Hybrid' and have photo with road and city names.
      mapTypeId: google.maps.MapTypeId.Hybrid
      
    }

//creates a new map inside the div element googleMap in html using the paramaters that are passed through mapProp
var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

  

//creates a second map from the paramaters passed through mapProp
var map2 =new google.maps.Map(document.getElementById("googleMap2"), mapProp);
};


var searchBox = new google.maps.places.SearchBox(document.getElementById('mapsearch'));
//place change event on search box
google.maps.event.addDomListener(searchBox, 'places_changed', function(){

  var places = searchBox.getPlaces();
  //console.log(searchBox.getPlaces());

  //bound
  var bounds = new google.maps.LatLngBounds();
  var i, place;

  for (i=0; place=places[i]; i++){
    //console.log(place.geometry);

    bounds.extend(place.geometry.location);
   
  }
});
//map1.fitBounds(bounds); //fit to the bound
//map1.setZoom(15);

$( "#Submit" ).click(function codeAddress(){
  var address = document.getElementById("mapsearch").value;
  geocoder.geocode( {'mapsearch': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK){
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results [0].geometry.location
      });

    } else {
      alert("Geocode was not successfull for the following reason: " + status);
    }
  });
});


//adds a DOM listener that will execute the initialize function on window when the page is loaded
google.maps.event.addDomListener(window, 'load', initialize);