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
calsBurned()



