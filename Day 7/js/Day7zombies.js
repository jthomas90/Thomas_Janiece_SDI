
 /*
Janiece Thomas
Section 00
3/17/15
Day 7 Zombies
 */


//alert("Just testing!");

 //ZOMBIE ATTACK
 // We have accidentally created a zombie at Full Sail.
 // A zombie can bite 4 people a day and turn them into zombies the next day.
 // The CDC wants to know how many zombies will be in 8 days?

 //Givens that we know

 //How many zombies do we have

 var numZombies = 1;

 //How many bites per zombie per day!
 var numBites = 4;

 //Number of days that the CDC wants
 var days = 8;

 /*
 //Create for loop to cal zombie number
 for(var i = 1; i<=days; i++){

     //How many NEW get made everyday
     var newZombies = numZombies * numBites;

     //Add New Zombie to existing horde
    numZombies += newZombies ;

     //Console.log the results
     console.log("Their are "+ numZombies+ " numbers of zombies on day #"+i+"!")

 }


*/

//How long will it take to get million zombies

var numDays = 1;
 
 while(numZombies <=1000000){
     //How many NEW get made everyday
     var newZombies = numZombies * numBites;

     //Add New Zombie to existing horde
     numZombies += newZombies ;

     //Console.log the results
     console.log("Their are "+ numZombies+ " numbers of zombies on day #"+numDays+"!");

     numDays++;

 }

 console.log("It will take " +(numDays-1)+" days to reach a million zombies.");
