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
alert("This are annoying!");

//console.log - shows information to the programmer
// This is great for checking values and debugging
//Also shows all errors
console.log("This is the console.");

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
do {
    var yearBorn = prompt("What year where you born in.\nPlease do not leave blank and only enter numbers");

}while (yearBorn==="" || isNaN(yearBorn));


//2015 - year born
var ourAge = 2015 - yearBorn;

console.log("You are "+ourAge+" years old. Unless your bithday has not come up yet.\nThen you are "+(ourAge-1)+ " years old.");


//Talk about Math
// +, -, *, /

//Find the area of triangle
//base* height/2
alert("This is a calculator to discover the are of a triangle.");

do {
    var base = prompt("What is the base of your triangle?\nPlease do not leave blank and enter numbers only.");
} while (base==="" || isNaN(base));

do {
    var height = prompt("What is the height of your triangle?\nPlease do not leave blank and enter numbers only.");
}while (height==="" || isNaN(height) );




function areaTriangle (b,h){
   var triArea = b*h/2;
    return triArea;
}
var triangleArea = areaTriangle(base,height);

console.log("The area of the triangle is "+triangleArea+".");




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
// Either true of false; 1 or 0
// Not a text string and must be lower case!!
var yes = true;

var nope = false;

//Order of Operation
// PEMDAS - Please Excuse My Dear Aunt Sally
// Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction

// Find the Average quiz grades

do {
    var quiz1 = prompt("We are going to find the average between 3 test score.\nWhat is you grade for quiz #1.\nDo not leave blanks and only use numbers.");
} while (quiz1==="" || isNaN(quiz1) );
do {
    var quiz2 = prompt("What is you grade for quiz #2.\nDo not leave blanks and only use numbers.");
} while (quiz2==="" || isNaN(quiz2));
do {
    var quiz3 = prompt("What is you grade for quiz #3.\nDo not leave blanks and only use numbers.");
}while (quiz3==="" || isNaN(quiz3));


// Average - Add them up and divide by the numbers of quizes
function average(q1,q2,q3){
    var results = (q1+q2+q3)/3;
    return results;
}

var averageGrade = average(parseFloat(quiz1),parseFloat(quiz2),parseFloat(quiz3));

console.log("Your grade average is "+averageGrade.toFixed(2));

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

// To round a number we use the .toFixed(#)
var num = 5.5678912345;

//Round to 2 decimal places
var n = num.toFixed(2);

console.log("The rounded number to 2 decimal places is "+n+".");









