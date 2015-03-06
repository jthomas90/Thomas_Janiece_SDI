/*
 Janiece Thomas
 3/05/2015
 Section 00
 Day 2 Lab Expressions
 */

//alert("hey");


// Slice of Pie Part 1
//Variables

var slices = 12;
var people = 25;
var pizza  = 7;

//Multiply pizza by slices then divide by people

var TPA = (pizza*slices)/people;

//Outcome

console.log("The number of slices each partier will get is " + TPA +" slices.");


//Slices of Pie Part 2
//Variables

var remainder = (pizza*slices)%people;
//Outcome

console.log( "Sparky gets to eat " + remainder+ " slices of pizza.");

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

console.log("$" + totalBill + " is the total amount spent on 5 weeks of groceries.");

//Average weekly for Groceries

var average = totalBill/numOfBills;

//Outcome for the weekly average of bills

console.log("$" + average + 0 +" is the weekly average spent on groceries in 5 weeks.");

