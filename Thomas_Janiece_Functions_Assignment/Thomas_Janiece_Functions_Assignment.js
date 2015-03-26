
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
 }




 //Create a prompt to find out female body weight
 var totalWeightFem = prompt("Hello ma'am, What is you total body weight?");
 //Validation
 while(totalWeightFem==="" || isNaN(totalWeightFem)){
     if (totalWeightFem === ""){
         validate();
         //re prompt user
         totalWeightFem = prompt("Please do not leave blank and enter your total body weight.\nNumbers only");
     }else if (isNaN(totalWeightFem)){
         //re prompt user
         totalWeightFem = prompt("Please enter your total body weight.\n Use numbers only");
         validate();
     } else
     validate();
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

 //Create Anon function for Male
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

 //Create function for validation
  function validate(){
      //re prompt user
      gender = prompt("Please do not leave blank and only use letters.\nAre you male or female?");
      if (gender === "female"){
          var wristFem = prompt("What is the measurement around your wrist at fullest point?");
          //Validation
          if(wristFem===""){
              //re prompt user
              wristFem = prompt("Please do not leave blank and only use numbers.\nWhat is the measurement around your wrist at fullest point?");

          } else if (!isNaN(wristFem)){
              //re prompt user
              wristFem = prompt("Please do not enter any numbers.\nWhat is the measurement around your wrist at fullest point?");
          } else
          //re prompt user
              gender = prompt("Please enter male or female?");


          var waistFem = prompt("What is your waist measurement at your navel?");
          //Validation


          var hipFem= prompt("What is your hip measurement at it fullest point?");
          //Validation


          var armFem = prompt("What is your forearm measurement at its fullest point?");
          //Validation


          //call function
          var girlWeight = femaleBF(totalWeightFem,wristFem,waistFem,hipFem,armFem);
          console.log("Your body fat percentage is "+girlWeight);


      }else if (gender === "male"){

          var totalWeightMale= prompt("Hello sir, What is you total body weight?");
          //Validation


          var waistMale = prompt("What is your waist measurement");
          //Validation



          //call function
          var boyWeight = maleFunc(totalWeightMale,waistMale);
          console.log("Your body fat percentage is "+boyWeight);
      }
  }


