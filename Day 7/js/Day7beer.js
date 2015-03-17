
 /*
Janiece Thomas
Section 00
3/17/15
Day 7 Beer
 */


//alert("Just testing!");

 // Code the song 99 Bottles of beer on the wall.

 //basic structure of FOR loop
 // for(var 1 = 0; condition to test ;increment of change) {}

 for(var i = 99; i>0;i--)  {
     if (i===1){
         console.log("1 bottle of beer on the wall. 1 bottle of beer. You take one down and pass it around. No more bottles of beer on the wall.\nThe End.");

     } else {
         console.log(i+" bottles of beer on the wall. "+i+ " bottles of beer. You take one down and pass it around. "+(i-1)+" bottles of beer on the wall.");
     }


 }