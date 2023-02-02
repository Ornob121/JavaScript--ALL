// This is problem one.
function hourToMunite(hour) {
    const hourInMinute = 60;
    let minute = hour * hourInMinute;
    return minute;
}

let hour1 = 6;
const result = hourToMunite(hour1);
console.log(result);




// This is problem number two.
function leapYears(years) {
    const realLeapYears = [];
    for (let i = 0; i <= years.length; i++) {
        const index = i;
        const element = years[index];
        if ((element % 4 == 0) && (element % 100 != 0) || (element % 400 == 0)) {
            console.log('This is a leap Year', element);
            realLeapYears.push(element);
        }
    }
    return realLeapYears;
}
const years = [2023, 2024, 2025, 2028, 2030];
const theRealLeapYears = leapYears(years);
console.log(theRealLeapYears);




// This is problem number three.
function findOddSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        if (elements % 2 == 0) {
            continue;
        }
        console.log('These are the odd numbers.', elements);
        sum = sum + elements;
    }
    return sum;
}
const number = [5, 7, 8, 10, 45, 30];
const resultOfSum = findOddSum(number);
console.log(resultOfSum);