
 /*
Janiece Thomas
Section 00
3/17/15
 Functions_worksheet
 */

var radius = 1;
//alert("Just testing!");

 //Calculate the circumference of a Circle
 //Create a function
//FORMULA FOR RADIUS - #/3.14

function circleCir(r){
     //calculate radius
     var cirCircum = 2*r*Math.PI;
     console.log("Inside the function the circumference is "+cirCircum+".");
     return cirCircum;
 }

 //call function
 circleCir(10);
 //Create a variable for the return value
 var results = circleCir(radius);


//Results
 console.log("The circumference of the circle is "+results.toFixed(2)+".");
