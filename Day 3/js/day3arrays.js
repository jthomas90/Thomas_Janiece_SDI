/*
Janiece Thomas
3/7/2015
Section 00
Day 3 Arrays
 */
//alert("Testing to make sure it is linked");

//Create a Basic Array
var avengersNames = ["Thor", "Hulk", "Iron Man", "Captain America"];

//Print out whole array
console.log(avengersNames);

//Print out 1 specific item in the array
console.log(avengersNames[2]);

//Swap item in our array
avengersNames[1] = "Black Widow";

console.log(avengersNames);

//Use a variable for the index number
var num = 3;
console.log(avengersNames[num]);

//Find the length of an array
//Length property = How many items are in the array
// dot syntax - fancy for use a period
console.log(avengersNames.length);

//Add and item to our array
avengersNames[4] = "Hawkeye";

avengersNames[avengersNames.length] = "Wolverine";

console.log(avengersNames);


//Picking Orange
var orangesPicked = [13,350,1000,600];

// How many oranges did we pick in total

var totalOranges = orangesPicked[0]+orangesPicked[1]+orangesPicked[2]+ orangesPicked[3];
console.log("The total number of oranges picked is "+totalOranges+ ".");

var averageOranges = totalOranges/orangesPicked.length;
console.log("The average number of oranges picked per day is "+averageOranges+".");
