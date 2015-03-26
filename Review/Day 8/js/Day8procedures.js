
 /*
Janiece Thomas
Section 00
3/24/15
Day 8 Procedures
 */


//alert("Just testing!");

 //This is a basic function
 function calcAreaF (w,h){
     var area = w*h;
     return area;
 }

 //Function call
 var area = calcAreaF(6,8);
 console.log("The area of the rectangle is "+ area+".");

 //This is a procedure
 //A list of steps to do

 function calcAreaP(w,h){
     var area = w*h;

     //we do not return this value
     console.log("Inside the procedure the area is "+area+".");

 }

 //Function call for the procedure
 //Just the function name NO VARIABLE TO CATCH
 calcAreaP(12,16);