
 /*
Janiece Thomas
Section 00
3/10/15
Day 4 Logical
 */


//alert("Just testing!");

 //Basic conditional, if we have enough to buy a car

 //Create a few variables
 var budget = 25000;
 var carPrice = 25000;
 var payCheck = 1600;

 if(budget<= carPrice){
     console.log("You can afford your car.");
 } else {
     console.log("You are broke! Take the bus!")
 }


 //We can buy the car if our budget is greater or equal to the car price or our paycheck is more the 1500.

 if(budget >= carPrice || payCheck > 1500 ){
     console.log("You can buy the car.")
 } else {
     console.log("Your don't make enough money and your budget it to low");
 }

/*
Truth table for || "Or"
t || t = t
t || f = t
f || t = t
f || f = f

 */
/*
Truth table for && "And
t && t = t
t && f = f
f && t = f
f && f = f
 */

 //You can buy a car if the budget is greater than or equal to the car price And your paycheck is over 1500

 if(budget <= carPrice && payCheck > 1500){
     console.log("You can buy the car.");
 } else{
     console.log("Pick a cheaper car or find a better job.")
 }

 