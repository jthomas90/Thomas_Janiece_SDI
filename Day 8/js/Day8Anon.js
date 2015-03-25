
 /*
Janiece Thomas
Section 00
3/24/15
Day 8 Anon
 */


//alert("Just testing!");


 //Basic Function
 /*
 Function functionName(){

 }
  */


 //Anonymous Function
 /*
 var functionName = function(){

 }
  */

 //Anon are extremely popular in JS and JQuery
 //Highly used in Object Programming
 //Quick and easy
 //You can use either basic or non - FOR NOW


 //Function calls above the definition

 //Basic function
 var basicArea2 = triangleArea(2,9);
 console.log("The area from the basic function before the definition is "+basicArea2
 +".");

 /*
 THIS DOES NOT WORK!!! DO NOT PUT IT ABOVE THE DEFINITION!!
 //Anon function call
 var anonArea2 = triangleAreaAnon(3,4);
 console.log("The area from the anon function before the definition is "+ anonArea2);
 */


 //Build a basic function for the area of a triangle

 function triangleArea(b, h){
     //Calc area
     var area = .5*b*h;
     return area;
 }

 //Anon Function
 var triangleAnon = function(b, h){
     var area = .5*b*h;
     return area;
 };

 // Function call to basic function
 var basicArea = triangleArea(5,6);
 console.log("The area from the basic function is "+basicArea+ ".");

 //Function call to the Anon function
 var anonArea = triangleAnon(4,5);
 console.log("The area from the anon fuction is "+anonArea+".");