
 /*
Janiece Thomas
Section 00
3/10/15
Day 4 Activity
 */


//alert("Just testing!");

 //Celsius to Fahrenheit converter

 //Variable for prompt to decide which way to covert

 var q1 = prompt("What is the temperature?\nNumbers only.");
var  q2 = prompt("Is that in Celsius or Fahrenheit?\nC or F Caps Only");
 var celsius = ((q1-32)*5)/9;
 var fahrenheit = (q1*9)/5+32;
 var cel = "C";

 //Conditional if C or F
 if (q2 === cel){
     console.log(fahrenheit.toFixed(2) + " Fahrenheit.");
 } else {
     console.log(celsius.toFixed(2) + " Celsius.")
 }


 //Check the Login

 //Create variables
 var username = prompt("Please enter your Username");
 var pass = prompt("Please enter your password");
 var cUsername = "Necybayb";
 var cPass = "1Dalieono";

//Conditionals
if (username === cUsername && cPass ){
    //Username and pass correct
    console.log("Welcome, " + cUsername+"!");
} else if(pass === cPass ){
    //Just username correct
    console.log("Password does not match our records")
} else {
    console.log("User not found.Try again.")
}



