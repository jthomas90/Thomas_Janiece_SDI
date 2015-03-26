
 /*
Janiece Thomas
Section 00
3/17/15
  Day 7 Functions
 */


 //Function call the printHello before its defined
 printHello();
 calcArea();

//alert("Just testing!");

 //basic structure of a function
 // function functionName( ){ code to run}

 //Create a function that will console log out hello
 function printHello(){

     console.log("Hello and Howdy!");
 }

//Create a function that prints out more text
 function printMore(){

     console.log("Prints more text!")
 }

 // Function call the printHello function
 // functionName ();
 printHello();
 printMore();
 printHello();

 //Function call the printMore
 printMore();


 //Create a function that calculates the are fo a rectangle
 function calcArea(){

     //Create variables for width, height and area
     var width = 20;
     var height = 30;
     var area = width*height;

     //Print out the area
     console.log("The area is " +area+".");

 }
 //Function call
 calcArea();