$(document).ready(function(){


	$.ajax({
	  url : "http://api.wunderground.com/api/77cd5507fb26ca1c/hourly/q/autoip.json",
	  dataType : "jsonp",

		success : function(parsed_json) {

			for (var i = 0; i < 1; i++){

				var time = parsed_json['hourly_forecast'][i]['FCTTIME']['civil'];
			  	var condition = parsed_json['hourly_forecast'][i]['condition'];
				var temp = parsed_json['hourly_forecast'][i]['temp']['english'];
				var humidity = parsed_json['hourly_forecast'][i]['humidity'];
				// var icon = parsed_json['hourly_forecast'][i]['icon'];
				// var iconUrl = parsed_json['hourly_forecast'][i]['icon_url'];


				// alert(icon + iconUrl);
			  	alert("Current time is " + time);
			  	alert("conditions are " + condition);
			  	alert("temperature is " + temp + "F");
			  	alert("the humidity is " + humidity + "%");
			}
		}

	});

	// function weatherData(){

	// 	var queryURL = "http://api.wunderground.com/api/77cd5507fb26ca1c/hourly/q/autoip.json"

	// 	$.ajax({url: queryURL, method: 'GET'}).done(function(response){

	// 		console.log(response)

	// 		var temp = response["temp_f"];
	// 		alert(temp);

	// 		var results = response.hourly_forecast;

	// 		console.log(results)

			


	// 	});



	// }

	// weatherData();











});