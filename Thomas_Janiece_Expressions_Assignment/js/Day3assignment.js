
 /*
Janiece Thomas
Section 00
3/7/15
Day 3 Assignment
 */


alert("This is program is to help you find out how much you get paid before taxes are taken out First.\nThen about how much you'll actually get with your approximate tax input.");



//Create Variables
 var    myArray = [];
 myArray[0] = prompt("How many hours a day do you work a day?\n1-24 Hours.");
 myArray[1] = prompt("How much do you get paid hourly?");
 myArray[2] = prompt("How many days a week do you work?");
 myArray[3] = prompt("How much tax is typically taken out per week?");

console.log(myArray);

 //Sub Variables
 hoursWorked = myArray[0];
 workPay = myArray[1];
 daysWorked = myArray[2];

//Calculate hours*pay*days
var total = myArray[0] * myArray[1];
var fullTotal = total *=myArray[2];
 var withTax = fullTotal - myArray[3];







