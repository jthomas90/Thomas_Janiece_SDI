
 /*
Janiece Thomas
Section 00
3/7/15
Day 3 Assignment
 */


alert("This is program is to help you find out how much you get paid before taxes are taken out first and about how much you'll actually get with your approximate tax input.");



//Create Variables
 var    myArray = [];
 myArray[0] = prompt("How many hours a day do you work a day?\ni.e. Numbers Only.");
 myArray[1] = prompt("How much do you get paid hourly?\ni.e. Numbers Only.");
 myArray[2] = prompt("How many days a week do you work?\ni.e. Numbers Only.");
 myArray[3] = prompt("Approximately how much tax is taken out per week?\ni.e. Numbers Only.");

 //Display user inputs
console.log(myArray);

//Calculate hours by pay
var total = myArray[0] * myArray[1];

//Multiply ^(line 25) by The days worked
var fullTotal = total;
 fullTotal*=myArray[2];

//Subtract the full total (line 29) by the app. tax the user inputs.
 var withTax = fullTotal - myArray[3];

 //Solution to the amount before taxes
 console.log("You'll get paid $"+fullTotal.toFixed(2) +" before taxes.");

//Solution to the amount with taxes applied
 console.log("You'll get paid $"+withTax.toFixed(2) + " when taxes are applied.");








