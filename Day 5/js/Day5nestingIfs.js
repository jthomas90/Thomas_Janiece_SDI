
 /*
Janiece Thomas
Section 00
3/12/15
Day 5 Nesting Ifs
 */


//alert("Just testing!");

 //Some decisions effect other decisions

 //If it is warm then lets go to the beach, If it is not then lets go to the movies.

 //Get the temperature
 var temp = 75;

 //set the water temp
 var waterTemp = 78;

 if (temp >= 80){
     console.log("Let's go to the beach!");
     if(waterTemp > 75){
         console.log("Let's go swimming!");

     } else{
         console.log("Let's get a tan!");
     }
 } else{
     console.log("Let's go to the movies!");


     //Do we have any kids in the group
     var kids = "yes";
     //Test if we have kids
     if (kids==="no"){
         console.log("Let's see 50 Shades of Gray!");
     } else {
         console.log("Lets go see Sponge Bob!");
     }
 }

 /*
 //if the water temperature is above 75, lets go swimming, if not lets get a tan.

 if(waterTemp > 75){
     console.log("Let's go swimming!");

 } else{
     console.log("Let's get a tan!");
 }
*/