// This is practice problem one.
var givenTakaByMom = 1000;
var price1KgApple = 400;
var price1kgOrange = 300;

var totalCost = price1KgApple + price1kgOrange;

console.log(givenTakaByMom - price1KgApple - price1kgOrange);

var remainingTakaOfHarry = givenTakaByMom - totalCost;
console.log(remainingTakaOfHarry);



// This is practice problem two.

var mathNumber = 75.25;
var biologyNumber = 65;
var chemistryNumber = 80;
var physicsNumber = 35.45;
var banglaNumber = 99.50;

var totalMarks = mathNumber + biologyNumber + chemistryNumber + physicsNumber + banglaNumber;
var totalSubjects = 5;
var average = totalMarks / totalSubjects;
totalMarks /=5;
totalMarks = totalMarks.toFixed(2)
console.log(totalMarks)
average = average.toFixed(2)
console.log(average)




// This is practice problem three.

var jhonsFirstVariable = "I am going to be";
var jhonsSecondVariable = 'an awesome web developer.';
var jhonsFullString = jhonsFirstVariable + " " + jhonsSecondVariable;
console.log(jhonsFullString);
console.log(jhonsFirstVariable + " " + jhonsSecondVariable);



// This is practice problem four.

var momsGivenNumber = 119;
var momsGivenDivider = 5;
var remainder = momsGivenNumber % momsGivenDivider;
console.log(remainder);
console.log( momsGivenNumber % momsGivenDivider);

