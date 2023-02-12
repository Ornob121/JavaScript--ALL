const name = "Shadman Tahmid Ornob";
const isHappy = true;
let age = 18;
age = 19;
console.log(age);




const num1 = 30;
const num2 = 15;

const sum = num1 + num2;
const deduct = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;



const num3 = 30;

num1 > num2
num1 != num2
num1 >= num2
num1 == num3
num1 <= num3
num2 < num1


if((num1 > num2) && (num1 == num3)){
    console.log('This is true');
}
if ((num2 > num1) || (num3 == num1)){
    console.log('This is also true');
}




if(num1 > num2 ){
    console.log('I will eat');
}
else if(num2 > num3 ){
    console.log('I will not eat');
}
else {
    console.log('Whatever is fine');
}

let num4 = 7;
while (num4 <= 19){
    console.log(num4)
    num4++;
}





const numbers = [ 30, 60, 90, 120, 150, 180, 210, 240];
console.log(numbers.length);
numbers[4] = 99;
console.log(numbers[4]);
const sum1 = numbers[4] + numbers[5];
console.log(sum1);
numbers.pop();
numbers.splice(5, 2, 400, 900);
console.log(numbers);

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}


const number = [20, 80, 70, 79, 60, 90, 120, 050, 500, 600, 300];
number.push (81);
for ( let i = 0; i < number.length; i++){
    const elements = number[i];
    if(elements > 80){
        console.log(elements);
    }
}


function sumOfThree(num1, num2, num3){
    return num1 * num2 * num3;
}

const sumThree = sumOfThree(20, 50, 80);
console.log(sumThree);



let me = {
    name: 'Ornob', 
    age: 19, 
    hairColor: 'Black'
}

me.hairColor = 'White';
console.log(Object.keys(me));
// console.log(me);







// This sis problem one.

function feetToInch (feet){
    const inch = 12;
    const toInch = feet * inch;
    const inInch =  toInch.toFixed(2);
    return inInch;
}

const feet = feetToInch(5.6);
console.log(feet);



// This is problem two.
function centimeterToMeter (centimeter){
    const meter = 10;
    const toMeter = centimeter * meter;
    return toMeter;
}
const meter = centimeterToMeter(100);
console.log(meter);


// This is problem three.
function paperRequirements(book1, book2, book3){
    const pageForBook1 = 100;
    const pageForBook2 = 200;
    const pageForBook3 = 300;
    const book1TotalPage = pageForBook1 * book1;
    const book2TotalPage = pageForBook2 * book2;
    const book3TotalPage = pageForBook3 * book3;
    const totalPage = book1TotalPage + book2TotalPage + book3TotalPage;
    return totalPage;
}


const howManyPaper = paperRequirements(3, 5, 2);
console.log('The paper you need to print these books are', howManyPaper);





// This is problem four.
const friends = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];
function bestFriends(friend){
    let bestu = '';
    for (let i = 0; i < friend.length; i++){
        const names = friend[i];
        if(names.length > bestu.length){
            bestu = names;
        }
    }
    return bestu;
}
const myBestu = bestFriends(friends);
console.log(myBestu);





// This is problem number five.
const pNumbers = [45, 87, 96, 11, 63, -56, 71, 28];
function onlyPositive(numbers){
    const positive = [];
    for (let i = 0; i < numbers.length; i++){
        const elements = numbers[i];
        if (elements < 0){
            break;
        }
        positive.push(elements);
    }
    return positive;
}

const positiveNumbers = onlyPositive(pNumbers);

