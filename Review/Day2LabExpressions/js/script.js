/*
 Janiece Thomas
 3/05/2015
 Section 00
 Day 2 Lab Expressions
 */

//alert("hey");


// Slice of Pie Part 1
//Variables
do {
    var slices = prompt("How many slices of pie");
}while(slices==="" || isNaN(slices));

var people = 25;

var pizza  = 7;


//Multiply pizza by slices then divide by people

var TPA = (pizza*slices)/people;

//Outcome

console.log("Each person ate " + TPA +" slices of pizza at the party.");


//Slices of Pie Part 2
//Variables

var remainder = (pizza*slices)%people;
//Outcome

console.log( "Sparky got " + remainder+ " slices of pizza.");


//Average Shopping Bill
//Variables
var bill1 = 125;
var bill2 = 405;
var bill3 = 229;
var bill4 = 150;
var bill5 = 200;
var numOfBills = 5;

//Total Amount spent on Groceries

var totalBill = bill1+bill2+bill3+bill4+bill5;

//Outcome for Total Amount Spent on Groceries

console.log("You have spent a total of $" + totalBill + " on 5 weeks of groceries.");

//Average weekly for Groceries

var average = totalBill/numOfBills;

//Outcome for the weekly average of bills

console.log("That is an average	of $" + average + 0 +" week.");


//Discount
//Variables
var oGP = 200;
var dist = 20;
var distDecimal = dist/100;
var item = "gold watch";
var tax = .7;
var taxDecimal = tax/100;

//Tax price

var tPrice = (oGP*taxDecimal);

//Discount price

var dPrice = (distDecimal*oGP);

//Price with taxes

var pWithDandT = ((oGP - dPrice)+tPrice).toFixed(2);

/*/Outcome

console.log(pWithDandT); */

//Price of item without tax


var pWithD = oGP - dPrice;

/*/Outcome

console.log(pWithD);  */

//Final Outcome
console.log("Your " + item + " was originally $" + oGP + " but after a "+ dist+ "% discount, it is now $" + pWithD + " without tax, and $"+ pWithDandT +" with tax.");
