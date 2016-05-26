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
});
