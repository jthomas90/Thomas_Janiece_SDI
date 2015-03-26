
 /*
Janiece Thomas
Section 00
3/24/15
  Day 8 Multiples
 */


//alert("Just testing!");

 //Create multiple functions using information from the user

 //Calc the perimeter and area of a rectangle

 function periRect(w,h){
     //Perimeter 2xW+2xH
     var p = 2*w + 2*h;
     return p;

 }

 //Create an Anon function
 var areaRect = function(w,h){
     var a = w*h;
     return a;
 };

 //Prompt the user for width and height
 var width = prompt("Let's figure out the area and perimeter and area of a rectangle.\nWhat is the width?");

 //Validation
 while (width==="" || isNaN(width)){
     //re prompt user
     width = prompt("Please do not leave blank and only use numbers.\nWhat is your width?");
 }

 //ParseInt
 width = parseInt(width);

 var height = prompt("What is the height of the rectangle?");

 //Validation
 while(height === "" || isNaN(height)){
     //re prompt
     height= prompt("Please do not leave blank and only use numbers.\nWhat is the height?");
 }

 //ParseInt
 height= parseInt(height);

 //Function calls
 var resultsPeri = periRect(width, height);
 var resultArea = areaRect(width, height);

 //Combined console.log
 console.log("The perimeter of your rectangle is "+ resultsPeri+ " and the area is "+ resultArea+".");


 //Create a combined function

 function combinedRect(w, h){
     //First calc the perimeter
     var p = 2*w + 2*h;

     //calc area
     var a = w*h;

     //Return both
     return [p,a];

 }


 //Function call combine array
 var combinesResults = combinedRect(width,height);

 console.log(combinesResults);

 console.log("The perimeter of your rectangle is "+ combinesResults[0]+" and the area is "+combinesResults[1]+".");