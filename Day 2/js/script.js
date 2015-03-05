/*
Janiece Thomas
3/05/2015
Section 00
Day 2 Intro
 */

//alert("Testing to see if connected");

/*
Example of a Multi-lined comment.
Anything inside of here will not be seen by the computer.
 */

//Single lined comment. ONLY this line will be ignored.

//alert boxes- pop up box that will alert the user with information.
alert("Text that the user will see.");

//console.log - shows information to the programmer
// This is great for checking values and debugging
//Also shows all errors
console.log("This is the console");

//Declare a variable
//Use the keyword of var
var whatever1;

//Define the variable
//Define the variable sets the value of the existing variable
whatever1 = 42;

//console.log the variable
console.log("The variable whatever1 is");
console.log(whatever1);

//Declare and define a variable at the same time
var a = 2;
console.log(a);
a+3;
a=a+3;
console.log(a);


//Declare new variable
var b;

//Define this variable using a existing variable

b = a+3;
console.log(a);
console.log(b);

//Simple Math
//Find our ages

//Declare and define the year you were born
var yearBorn = 1990;

//2015 - year born
var ourAge = 2015 - yearBorn;
console.log(ourAge);

//Talk about Math
// +, -, *, /

//Find the area of triangle
//base* height/2

var base = 8;
var height = 5;

var areaTriangle = base*height/2;
console.log(areaTriangle);

// Modulo - %
// Gives the remainder

var decimal = 32/10;
console.log(decimal);
var remainder = 32%10;
console.log(remainder);

//Find out if even or odd
// %2 1=odd 2= even
var evenOrOdd = 67%2;
console.log(evenOrOdd);

//Assignment Operators
/*
= Assigns the value to the variable
++ Adds 1 to the current value of the variable
-- Subtract 1 from the current value of the variable
+= # Adds the number to the current value of the variable
-= # Subtracts the number from the current value of the variable
/= Divide the current value by the number
*= # Multiply the current value by the number
 */
 var assign = 0;

// ++ is the same as assign =assign+1;
assign++;
console.log(assign);

// -- is the same as assign = assign-1;
assign--;
console.log(assign);

// += # is the same as assign = assign+#;
assign+=5; //assign = assign+5
console.log(assign);

// -= # is the same as assign = assign-#;
assign=assign-2;
console.log(assign);

// /= is the same as assign= assign/#
assign/=3;
console.log(assign);

// *= is the same as assign=assign*#
assign*=7;
console.log(assign);

//Strings - amy text that we use
//Quotes are needed to distinguish between variables and plain text\

var kermit = "light green";
var frogName = "kermit";
console.log(frogName);

// To double quote or not to double quote
// Can use an escape character \ backslash in front of the '
var phrase = 'I don\'t know';
console.log(phrase);

// Escape character can also do multiple lines \n - new line character
var phrase2 = "I don't know. \nYou never do!";
console.log(phrase2);

// Boolean - kind of like a light switch
// Either true of false
// Not a text string and must be lower case!!
var yes = true;

var nope = false;

//Order of Operation
// PEMDAS - Please Excuse My Dear Aunt Sally
// Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction

// Find the Average quiz grades

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 90;

// Average - Add them up and divide by the numbers of quizes
var average = (quiz1 + quiz2 + quiz3)/3;
console.log(average);

//Concatenation - Combining text stings
// Use the + sign - add and concatenating

var firstName = "Kermint";
var lastName = "The Frog";
var fullName = firstName +" "+ lastName;
console.log(fullName);

var d = 6;
var e = "7";
//If you want the text sting to be a number you have to cast it
//Number(the text string)

var combined  = d+Number(e);
console.log(combined);

var pi = 3.14;

// To round a number we use the .tofixed(#)
var num = 5.5678912345;

//Round to 2 decimal places
var n = num.toFixed(2);

console.log(n);








