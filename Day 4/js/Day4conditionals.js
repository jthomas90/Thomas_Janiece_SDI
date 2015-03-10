
 /*
Janiece Thomas
Section 00
3/10/15
Day 4 conditionals
 */


//alert("Just testing!");

//Basic conditional
 /*
 if (condition to test){
    code to run if the condition is true
 }
  */

 //Create a boolean variable
 var oldEnough = false;

 //If the kid is old enough he can ride the ride
 if(oldEnough){
     //Code to run if the kid is old enough
     console.log("The kid is old enough to ride the coaster.");
 } else{
     //Code to run if the kid is not old enough
     console.log("Sorry you are to young.");
 }


//Relational Operators

 //If the kid is over 48 inches tall then he can ride the coaster
 var kidHeight = 57;

 //Create a variable for min height requirements
 var minHeight = 48;

 //Create a variable for sneaker lifts
 var sneakerLifts = 2;

 //Test the kids height
 if(kidHeight > minHeight){
     console.log("Kid is tall enough to ride the coaster.")
 } else if(kidHeight+minHeight > minHeight){
     console.log("If you use enough napkins you can ride the ride!")
 } else {
     console.log("Sorry you are to short.")
 }
