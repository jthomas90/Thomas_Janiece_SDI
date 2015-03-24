
 /*
Janiece Thomas
Section 00
3/17/15
 Functions_worksheet
 */

var radius = 1;
//Math.round(what);
 //Math.ceil(huh);
 //Math.floor(ohgodwhy);

//alert("Just testing!");

 //Calculate the circumference of a Circle
 //Create a function
//FORMULA FOR RADIUS - #/3.14

function circleCir(r){
     //calculate radius
     var cirCircum = 2*r*Math.PI;
     console.log("Inside the function the circumference is "+cirCircum+".");
     return cirCircum;
 }

 //call function
 circleCir(10);
 //Create a variable for the return value
 var results = circleCir(radius);

//Results
 console.log("The circumference of the circle is "+results.toFixed(2)+".");



//STUNG
 //Calculate a function
 var weight = prompt("How many pounds do you weigh?\nNumbers only please");
 if (weight === "" || isNaN(weight)) {
     //This code will run if the variable is blank or not a number
     //Re prompt user
     weight = prompt("Please do not leave blank and only use numbers.\nWhat is you weight?")
 }
 //Make a variable for bee stings
 var beeStings = 8.666666667;

 function stung(w,b) {
     var howMany = w * b;
     //Prompt the user for their weight
     return howMany;
 }
 //Create variable to catch
 var answer = stung(weight, beeStings);
//Results
 console.log("It takes " + Math.round(answer) + " bee stings to kill this animal.");

