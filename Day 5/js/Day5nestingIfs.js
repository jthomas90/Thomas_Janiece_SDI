
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
 var temp = prompt("Whe are going to figure out what you should do today.\nWhat is the current temperature outside?");

 //Validate that the user typed in something - DID THEY LEAVE IT BLANK
 if (temp ===""){
     //This code will run if the user types in nothing
     //Re prompt the user
     temp = prompt("Please do not leave this blank, it is required.\nWhat is the current temperature outside.");
 }


 //Validate that the user typed in a number
 //isNaN() - is it not a number
 //Literally say it out loud. Is Monkey not a number
 console.log(isNaN(7)); //Gives us false
 console.log(isNaN("Monkey")); //Gives us true


 if(isNaN(temp)){
     //This code will run when temp is not a number
     //Re prompt the user for the information
     //Gives user a second chance
     temp = prompt("Please only type in number.\nEnter the temperature outside.");
 }



 if (temp >= 80){
     console.log("Let's go to the beach!");
     //set the water temp
     var waterTemp = prompt("What is the water temperature?");

     //Validate the water temp
     if(waterTemp === "" || isNaN(waterTemp) ){

         //This code will run if the variable is blank or not a number
         //Re prompt user
         waterTemp = prompt("Please do not leave blank and only use numbers.\nWhat is the water temperature?")
     }

     if(waterTemp > 75){
         console.log("Let's go swimming!");
         var knowSwim = prompt("Do you know how to swim?");


         //Convert the text string to lower case
         //toLowerCase - dot syntax - use a period
         knowSwim = knowSwim.toLowerCase();
         console.log(knowSwim);

         //Validate the knowSwim variable
         if (knowSwim != "yes"  && knowSwim !="no"){
             //re prompt the user
             knowSwim = prompt("Only type in yes or no.\nCan you swim?");
             knowSwim = knowSwim.toLowerCase();
         }

         if(knowSwim == "yes"){
             console.log("No floaties needed.");
         } else{
             console.log("Get a floaty.");
         }

     } else{
         console.log("Let's get a tan!");
     }
 } else{
     console.log("Let's go to the movies!");


     //Do we have any kids in the group
     var kids = prompt("Are you bringing kids?");
     //Validate
     //Convert to lower case
     kids = kids.toLowerCase();

     if(kids != "yes" && kids != "no"){
         //re prompt
         kids = prompt("Please only enter yes or no?\nAre you bringing kids?");
         //permitely cover to lower case
         kids = kids.toLowerCase();
     }


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