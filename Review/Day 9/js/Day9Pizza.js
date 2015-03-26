
 /*
Janiece Thomas
Section 00
3/26/15
 Day 9 Pizza
 */


//alert("Just testing!");

 //How much pizza cost per slice and per square inch of pizza

 //Prompt the user for the radius of pizza

 var pizzaRadius = ("Welcome, Lets calculate the cost of your pizza.\nWhat is the radius of your pizza?");

 //validate

 while (pizzaRadius === "" || isNaN(pizzaRadius)){
     //re prompt
     pizzaRadius = prompt("Please do not leave blank and only use numbers.\nWhat is the radius of your pizza.");
 }

 //prompt the user for cost of whole pizza -DO VALIDATION
 do {
     var pizzaCost = prompt("How much does your pizza cost in total.\nReminder please do not leave blank and only use numbers.");

 } while(pizzaCost === "" || isNaN(pizzaCost));

 //prompt the user for how many slices are in their pizza
do {
     var pizzaSlices = prompt("Slices");
}while(pizzaSlices === "" || isNaN(pizzaSlices));

 //Function call to Lord function
 var results = lordFunction(pizzaRadius,pizzaCost,pizzaSlices);

 //Console.log the user
 console.log("Your pizza costs $"+ results[0]+ " per sq inch or $"+ results[1]+ " per slice.");



 //Create a function that will run all of the other function
 function lordFunction(radius, cost, slices){
     //Will call the other 3 function and return the values

     //Call the area function and capture the answer
     var area = pizzaArea(radius);

     //Call the SQ In cost
     var areaCost = pizzaSqInCost(area, cost);

     //call the slice per price
     var slicePrice = pricePerSlice(slices, cost);

     //return these answers to main code
     return [areaCost, slicePrice];

 }





 //Function that calculates the area of the pizza
 function pizzaArea (r){
      //area = r*r*Pi
     var area = r*r*Math.PI;
     return area;
 }

 //Function that calculates the price per square inch of pizza
 function pizzaSqInCost(area,price){
     // price divided by the area
     var costPerSqIn = price/area;

     //We should round to 2 decimal places
     costPerSqIn = costPerSqIn.toFixed(2);
     return costPerSqIn;

 }

 //Fucntion that calculate the price per slice
 function pricePerSlice(slices, price){
     //price/slices
     var costPerSlice = price/slices;

     //Round it
     costPerSlice =costPerSlice.toFixed(2);
     return costPerSlice;
 }



