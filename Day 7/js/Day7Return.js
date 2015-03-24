
 /*
Janiece Thomas
Section 00
3/17/15
  Day 7 Return
 */


//alert("Just testing!");

 //Return a value to our main code

 //Create a function to calculate the are of a rectangle
 function calcArea(w,h){
     //Calculate area
     var area = w*h;
     console.log("Inside the function the area is "+area+".");
     //Return the are to the main code
     return area;
 }

 //Prompt the user for width and height
 var width = prompt("What is the width for your rect?");
 var height = prompt("What is the height of your rect.?");


 //call function
 //Create a variable to catch the return value
 var rectArea = calcArea(width,height);

 //console.log the area
 console.log(rectArea);



 //Create a function to calculate the area of a circle
 function circleArea(r){
     //calculate area  Pi * r * r
     var area = Math.PI *r *r;
     //return the value
     return area;
 }

 //Function call this circleArea
 //Create a variable to catch teh returned area
 var circArea = circleArea(6);
 console.log("The are of the circle is "+circArea+".");

 //Whats is twice the circle area of a 6' circle
 var resultsTwice = circArea*2;
 console.log("Twice the are is "+resultsTwice+".");