/*
Janiece Thomas
Section 00
3/7/2015
Day 3 Prompts
 */


//alert("Just testing!");

//Ask teg user for input
//prompt("Text that the user will see)

//prompt("Enter year of birth");

var userInput = prompt("Enter year of birth:");
console.log(userInput);

//Calculate the area of a rectangle
//Explain to the user what is going on
var height = prompt("Let's calculate the area of the rectangle!\nPlease enter the height:");

var width = prompt("Please enter the width of the rectangle:");


//Calculate the area of the rectangle
function rectArea(w,h){
    var area = w*h;
    return area;
}
var areaRect = rectArea(width,height);

//Tell te user the answer
console.log("The area of the rectangle with a height of "+height+ " and a width of "+ width+ " is " +areaRect + ".");

var results = "The results of the area is "+ areaRect+ ".";

console.log(results);