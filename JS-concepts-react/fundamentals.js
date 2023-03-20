//How to declare a variable using let const

const name = 'Shadman Tahmid Ornob';
let season = 'Rainy';
season = 'Winter';

//conditions > , <, === , !==, <=, >=
//Multiple condition &&, ||

const num = 2;
const fathersName = 'Lala'

if(fathersName === 'Lala'){
    console.log(fathersName)
};

// Array 
const numbers = [89, 35, 12, 45];
numbers[0] = 100;

// Loop
for(let i = 0; i < numbers.length; i++){
    console.log(i)
};

// function 
function multiply (num1, num2){
    return num1 * num2
}

const output = multiply(2, 4);
console.log(output);

// Object

const student = {
    name: 'Sakib Khan', 
    age:32, 
    movies:['King Khan', 'Number One Sakib Khan']
}