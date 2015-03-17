
 /*
Janiece Thomas
Section 00
3/17/15
  Day 7 Arguments and Parameters
 */


//alert("Just testing!");

 //Arguments - these go into the function - part of the function call
// Parameters -catch the arguments and in the function definition

 //Create a function that calculated the area of a rect
 //Add in Parameters

 function calArea(w,h){

    // var width = 10;
    //var height = 20;
     var area = w*h;
     console.log("The area is "+area+".");
 }


 //Call our function
 //Add arguments to the function
 calArea(10,20);
 calArea(20,40);

 //Prompt user for width and height

 var width = prompt("Enter a width");
 //ENTER VALIDATION
 var height = prompt("Enter a height");

 calArea(width,height);

 //Dog years
 function dogYears(humanAge){
     //Dog years = human years *7;
     var dogAge = humanAge*7;
     console.log("Your age in dog years is "+dogAge+".");

 }
 //call the dog function
 dogYears(4);

 //prompt user for humanage
 var userInput = prompt("Please enter your human age.");

 //call the dog function
 dogYears(userInput);
