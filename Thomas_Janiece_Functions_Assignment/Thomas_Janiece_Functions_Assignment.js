
 /*
Janiece Thomas
Section 00
3/24/15
Thomas Janiece Functions Assignment
 */


//alert("Just testing!");


//Create prompt to find out if they are male or female
 var gender = prompt("This is a calculator to find out what you total body fat is.\nAre you a male of female?");

 //Validate gender value
 while (gender==="" || ! isNaN(gender) || gender!="Female" ||gender!="female" || gender!="Male" ||gender!="male" ){
     if(gender===""){
     //re prompt user
         gender = prompt("Please do not leave blank and only use letters.\nAre you male or female?");
     } else if (!isNaN(gender)){
         //re prompt user
         gender = prompt("Please do not enter any numbers.\nAre you male or female?");
     } else if (gender!="Female" ||gender!="female" || gender!="Male" ||gender!="male"){
         //re prompt user
         gender = prompt("Please enter male or female?")
     }

 }

