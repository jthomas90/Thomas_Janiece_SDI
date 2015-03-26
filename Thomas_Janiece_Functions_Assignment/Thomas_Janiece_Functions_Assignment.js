
 /*
Janiece Thomas
Section 00
3/24/15
Thomas Janiece Functions Assignment
 */


//alert("Just testing!");


 //Create prompt to find out if they are male or female
 var gender = prompt("This is a calculator to find out what you total body fat is.\nAre you a male of female?").toLocaleLowerCase();


 //Validate gender value
 while (gender!="female" && gender!="male" ){

     if(gender===""){
         //re prompt user
         gender = prompt("Please do not leave blank and only use letters.\nAre you male or female?");

     } else if (!isNaN(gender)){
         //re prompt user
         gender = prompt("Please do not enter any numbers.\nAre you male or female?");

     } else
     //re prompt user
         gender = prompt("Please enter male or female?");

 }if (gender === "female"){
  //START HERE!!!!! ASK TOTAL WEIGHT
     //Validation with prompts
     do {
         var totalWeightFem = prompt("Hello ma'am, What is you total body weight?\nPlease don't leave blank and enter numbers only.");

     } while(totalWeightFem === "" || isNaN(totalWeightFem));

    do{
        var wristFem = prompt("What is the measurement around your wrist?\nPlease don't leave blank and enter numbers only.");

    }while (wristFem === "" || isNaN(wristFem));

     do{
         var waistFem = prompt("What is your waist measurement?\nPlease don't leave blank and enter numbers only.");

     }while(waistFem ==="" || isNaN(waistFem));

     do{
         var hipFem= prompt("What is your hip measurement?\nPlease don't leave blank and enter numbers only.");

     }while( hipFem ==="" || isNaN(hipFem) );

     do{
         var armFem = prompt("What is your forearm measurement?\nPlease don't leave blank and enter numbers only.");

     }while(armFem==="" || isNaN(armFem));


     //call function
     var girlWeight = femaleBF(totalWeightFem,wristFem,waistFem,hipFem,armFem);
     console.log("Your body fat percentage is "+girlWeight.toFixed(2)+"%.");


 }else if (gender === "male") {
     do {
         var totalWeightMale = prompt("Hello sir, What is you total body weight?\nPlease don't leave blank and enter numbers only.");

     } while (totalWeightMale === "" || isNaN(totalWeightMale));

     do {
         var waistMale = prompt("What is your waist measurement.\nPlease don't leave blank and enter numbers only.");

 }while (waistMale==="" || isNaN(waistMale));

     var maleFunc = function(tbw, waistM){
         //Factor 1
         var factor1 = (tbw  * 1.082) + 94.42;

         //Factor 2
         var factor2 = waistM * 4.15;

         //Lean Body Mass
         var leanBodyMass = factor1-factor2;

         //Body Fat Weight
         var bodyFatWeight = tbw - leanBodyMass;

         //Body Fat Percentage
         var bodyFatPerMale = (bodyFatWeight * 100) / tbw;
         //Return the body weight percentage of Male
         return bodyFatPerMale;

     };

     //call function
     var boyWeight = maleFunc(totalWeightMale,waistMale);
     console.log("Your body fat percentage is "+boyWeight.toFixed(2)+"%.");
     //Create Anon function for Male

 }




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
    var bodyFatPerFem = (bodyFatWeight * 100)/tbw;
    //Return the body weight percentage of female
    return bodyFatPerFem;
}


 /*
  //Test #1
  prompt 1: Male
  prompt 2: 165
  prompt 3: 32
  console log: Your body fat percentage is 15.06%.

  //Test #2
  prompt 1: Female
  prompt 2: 132
  prompt 3: 3
  prompt 4: 32
  prompt 5: 36
  prompt 6: 3.5
  console log: Your body fat percentage is 28.71%.

  */




