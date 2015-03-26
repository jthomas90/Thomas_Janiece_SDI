
 /*
Janiece Thomas
Section 00
3/17/15
Day 7 Loop Arrays
 */


//alert("Just testing!");

 // Tell each member of the Scooby that they solved a mystery

 //Create an array of gang members
 var names= ["Scooby Doo", "Shaggy", "Velma" ,"Daphne","Fred"];

 //add  scrappy to the gang
 names.push("Scrappy");

 //Create For Loop to cycle through the array
 for (var i=0; i<names.length; i++){
     console.log("You solved the case "+ names[i]+"!");
 }


 //Keep track of our bills and get the total and average

 var bills = [50,10,2,20,10,60,70];

 //create variables for totals and average
 var total = 0;
 var average = 0;

 //Crate a variable to track item total
 var numItems = 0;

 for(var j=0; j < bills.length; j++){

     //Only add them if they are equal or over $15
     if(bills[j]>=15){
         //add each bill to the total
         total += bills[j];
         numItems++;
     }



 }

console.log("The total is " + total);

 //calculate the avarage
 average = total / numItems;
 console.log("The average is " +average+ ".");

