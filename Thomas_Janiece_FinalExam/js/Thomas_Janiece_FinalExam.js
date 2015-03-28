
 /*
Janiece Thomas
Section 00
3/28/15
  Thomas_Janiece_FinalExam
 */


//alert("Just testing!");

 var costItemMain = prompt("How much does your item cost?");

 while(costItemMain === "" || isNaN(costItemMain) ){
     //re prompt
     costItemMain = prompt("Please do not leave blank and only enter numbers.\nWhat is the cost of your item?")
 }

 var discountMain = prompt("How much was your discount percentage taken off the item?\n 0 - 100");
 while(discountMain ==="" || isNaN(discountMain) || Number(discountMain) < 0 || Number(discountMain) > 100){
     discountMain = prompt("Please do not leave blank and only use number between 0 and 100.\nHow much was your discount off the item?")
 }

 function calTotal(c,d){
     var discount = c *(d/100);
     var discountP = c-discount;
     return discountP;
 }

 var totalCost = calTotal(costItemMain,discountMain);
 console.log("The final cost of an item that cost $"+costItemMain+ " with a discount of "+discountMain+ "% is $" +totalCost+ ".");

 /*
 Test 1
 prompt 1: 100
 prompt 2: 10
 console.log: The final cost of an item that cost $100 with a discount of 10% is $90.

 Test 2
 prompt 1: 75
 prompt 2: 25
 console.log: The final cost of an item that cost $75 with a discount of 25% is $56.25.
  */
