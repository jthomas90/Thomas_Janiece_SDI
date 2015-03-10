
 /*
Janiece Thomas
Section 00
3/7/15
Day 3 Casting
 */


//alert("Just testing!");

// Casting variables means treating 1 data type like another...if possible

 var stringVar = "6";
 var results = 7 + stringVar;
 console.log(results);

//Number() - Treats whatever inside like a number if possible
 var castingResults = 7 + Number(stringVar);
console.log(castingResults);


//Cast numbers to be a text string
 //String() - treat whatever inside as a text string
 var areaCode = 407;
 var preFix = 5555;
 var lineNumber = 1234;

 var phoneNumber = String(areaCode)+String(preFix)+String(lineNumber);
 console.log(phoneNumber);

console.log("("+ areaCode+ ")"+ preFix + "-" + lineNumber);

 //Parsing Intergers
 //parseInt() - looks through a text and returns an interger
 //only the first number in the string is returned
 //of the first character in the text string canNot be converted into the number, then it returns NAN = Not a number


 var a = parseInt("48 years old");
 console.log(a);

 var b = Number("40 years old");
 console.log((b));

 var c = parseInt("He was 40.");
 console.log(c);


 //Prompts ONLY return text strings!!!

 var tshirstsOwned = prompt("How many t-shirts do you currently owned?");

 //Ask the user how many they bought
 var tshirtsBought= prompt("How many t-shirts did you buy today?");

 //Calculate the total number of tshirts bought
 var totalShirts = parseInt(tshirstsOwned) + Number(tshirtsBought);

 console.log("You currently own " +totalShirts+ " shirts.");


