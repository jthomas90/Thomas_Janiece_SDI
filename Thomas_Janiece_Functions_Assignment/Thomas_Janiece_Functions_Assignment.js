
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
 while (gender==="" || ! isNaN(gender) || gender!="Female" ||gender!="female" || gender!="Male" ||gender!="male" ) {
     if (gender === "") {
         //re prompt user
         gender = prompt("Please do not leave blank and only use letters.\nAre you male or female?");
     } else if (!isNaN(gender)) {
         //re prompt user
         gender = prompt("Please do not enter any numbers.\nAre you male or female?");
     } else if (gender != "Female" || gender != "female" || gender != "Male" || gender != "male") {
         //re prompt user
         gender = prompt("Please enter male or female?")
     } else
     //re prompt user
         gender = prompt("Please enter male or female?");
 }

 var totalWeightF =prompt("Hello Ma'am what is you total body weihgt?");
 //Validation
 var wristM
 var waistM
 var hipM
 var armM
 var totalWeightM
 var waitstMM


 //Create the basic function for female
function femaleBF(tbw,wristM,waistM,hipM,armM){

    //Factor 1
    var factor1 = (tbw * 0.732) + 8.987;

    //Factor 2
    var factor2 = wristM / 3.140;

    //Factor 3
    var factor3 = waistM * 0.157;

    //Factor 4
    var factor4 = hipM * 0.249;

    //Factor 5
    var factor5 = armM * 0.434;

   // Lean Body Mass = Factor 1 + Factor 2 - Factor 3 - Factor 4 + Factor 5
    var leanBodyMass = factor1 + factor2 - factor3 - factor4 + factor5;

    //Body Fat Weight = Total body weight - Lean Body Mass
    var bodyFatWeight = tbw - leanBodyMass;

    //Body Fat Percentage = (Body Fat Weight x 100) / total body weight
    var bodyFatPer = (bodyFatWeight * 100)/tbw;
    //Return the body weight percentage of female
    return bodyFatPer;
}

 //Create Anon function for Male
 var maleFunct = function(tbw, waistM){
     //Factor 1
     var factor1 = (tbw  * 1.082) + 94.42;

     //Factor 2
     var factor2 = waistM * 4.15;

     //Lean Body Mass
     var leanBodyMass = factor1-factor2;

     //Body Fat Weight
     var bodyFatWeight = tbw - leanBodyMass;

     //Body Fat Percentage
     var bodyFatPer = (bodyFatWeight * 100) / tbw;
     //Return the body weight percentage of Male
     return bodyFatPer;

 };


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
     } else
     //re prompt user
         gender = prompt("Please enter male or female?")

 }

 if (gender === "Female" || "female"){
    var girl = femaleBF()
 }


