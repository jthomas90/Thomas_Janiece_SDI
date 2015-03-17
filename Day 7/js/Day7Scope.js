
 /*
Janiece Thomas
Section 00
3/17/15
  Day 7 Scope
 */


//alert("Just testing!");

 //Variable Scope
 //variables inside and outside a function

 //Try not to use the same variable names
 //In big files this is going to be impossible

 //Create a variable for width in our main code
 //Scoped outside of the function - "Main code"
 var width = 10;


 //Create a function that calculates the perimeter of a rectangle
 function calcPeri(){

     //Create a variable called width inside of the function
     //Scoped to the function calcPeri
     var width = 10;

     ///Create a variable for height and perimeter
     var height = 20;
     var perimeter = width*2 + height*2;

     console.log("Inside of the function, the perimeter is "+perimeter+".");


     //Variables created inside of a function can not be accessed outside of the function.
     //variables created outside of the function can be but usually will not be.


 }

 console.log("Before the function call, width = "+width);

 //function call the calcPeri
 calcPeri();
 console.log("After the function call, width = " +width);

 //console.log the answer
 //This does not work -vegas
 //console.log("Outside of the function, the perimeter is "+perimeter);