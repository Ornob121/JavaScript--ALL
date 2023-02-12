// First Problem.

// In this function i tried to apply simple math operation of JavaScript. Addition, Subtraction, Multiplication, Division all of them are used in this function.

function mindGame(number) {
    if (typeof number !== 'number') {
        return 'Please enter number as a parameter';
    }
    else {
        const multiplication = number * 3;
        const sum = multiplication + 10;
        const division = sum / 2;
        const subtraction = division - 5;
        return subtraction;
    }
}
const number = 33;
const result = mindGame(number);
console.log(result);


// Second Problem.

// This function finds out if the input parameter strings length is even or odd.

function evenOdd(name) {
    if (typeof name !== 'string') {
        return 'Please input string as a input parameter';
    }
    else {
        if (name.length % 2 == 0) {
            return 'even';
        }
        else if (name.length % 2 != 0) {
            return 'odd';
        }
    }
}

const myName = 'chatgpt';
const answer = evenOdd(myName);
console.log(answer);

// Third Problem.

// This function your input gets subtracted by seven and if that result is less than seven than it returns the result by subtracting another seven from it. And if the result is not less than seven than it returns the result by multiplying it with two.

function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Please enter number as a parameter';
    }
    else {
        let subtraction = number - 7;
        if (subtraction < 7) {
            return number - 7;
        }
        else {
            number *= 2;
            return number;
        }
    }
}

const number1 = 15;
const resultOfProblem3 = isLGSeven(number1);
console.log(resultOfProblem3);


// Fourth Problem.

// This function finds out if the ages are valid or not. If the ages are not valid than it returns how many invalid ages are there

function findingBadData(data) {
    const bad = [];
    if (Array.isArray(data) != true) {
        return 'Please inter array as a input parameter';
    }
    else {
        for (let i = 0; i < data.length; i++) {
            const elements = data[i];
            if (elements < 0) {
                bad.push(elements);
            }
        }
        return bad.length;
    }
}


const ages =[-4, -9, -5, -33, -55];
const badData = findingBadData(ages);
console.log(badData);

// Fifth Problem.

// This function calculates the gems of my friend and returns a result like if total gems are more than or equal to 1000*2 than it subtract 2000 from it and if total is less than 1000*2 than it return the total gem number.


//This is problem five.

function gemsToDiamond(friendOneGems, friendTwoGems, friendThreeGems) {

    if (typeof friendOneGems !== 'number' || typeof friendTwoGems !== 'number' || typeof friendThreeGems !== 'number') {
        return 'Please input all numbers in parameter';
    }

    else {
        const friendOne = friendOneGems * 21;
        const friendTwo = friendTwoGems * 32
        const friendThree = friendThreeGems * 43;
        const totalDiamond = friendOne + friendTwo + friendThree;
        if (totalDiamond >= 1000 * 2) {
            const diamond = totalDiamond - 2000;
            return diamond;
        }
        else {
            return totalDiamond;
        }
    }
}

const firstFriendGem = 100;
const secondFriendGem = 5;
const thirdFriendGem = 1;
const gemsOfFriends = gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem);
console.log(gemsOfFriends);