//Weather Underground url link connected
var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/c45e769049bd3145/conditions/q/FL/Orlando.json", false);
weather.send(null);

//using JSON document to pull real time weather data from API, in this example temperature and wind factor
var r = JSON.parse(weather.response);
var weather = "Current Location: " + r.current_observation.display_location.full + "<br />";
var temp = r.current_observation.temperature_string + "<br />";
var feels = r.current_observation.feelslike_string + "<br />"
var wind = r.current_observation.wind_string + "<br />";
var condition = r.current_observation.weather + "<br />";
var humidity = r.current_observation.relative_humidity + "<br />"


//using inner HTML technique to post the live weather data to our site 
document.getElementById("weather").innerHTML = weather;
document.getElementById("temp").innerHTML = temp;
document.getElementById("feels").innerHTML = feels;
document.getElementById("wind").innerHTML = wind;
document.getElementById("condition").innerHTML = condition;
document.getElementById("humidity").innerHTML = humidity;