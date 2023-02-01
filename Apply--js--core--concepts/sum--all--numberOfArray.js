function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++ ){
        const element = numbers[i];
        sum = sum + element;
        console.log(i, element, sum);
    }
    return sum;
}

const myNumbers = [30, 20, 60, 80, 64, 90, 75];
let result = getSumOfAnArray(myNumbers);
console.log(result);