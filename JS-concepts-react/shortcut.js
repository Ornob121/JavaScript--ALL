//'lksdlsjf;, 5, true, {}, []
//'', 0, false, null, undefined

let myVar = 0;
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 10;
if(!myMoney){
    console.log(myMoney * 2)
}
else{
    console.log(myMoney*10)
}

// Ternary
const money = 100;
let food;
const food1 = money > 200 ? 'Biriyani' : 'Shingara';
console.log(food1)

const drink = (money > 100 || myVar < 100) ? 'Coke' : 'water'
console.log(drink);

// Shortcut number to string
//Just have to add an empty string to the number
const num1 = 520;
const numStr = num1 + '';
console.log(numStr);


// string to number
// just have to give plus(+) before the number
const string = '545';
const stringNum = +string;
console.log(stringNum);



//calling function using ternary operator
const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();
// use and(&&) if the left side is true then the right side will be executed
isActive && showUser();
// use or(||) if the left side is false than the right side will be executed
isActive || hideUser();

// toggle boolean
// toggle boolean converts a boolean if it is true than it will be false if false than it will be true;
isActive = !isActive