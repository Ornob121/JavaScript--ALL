function oddNumbersOfAnArray (numbers){
    const oddNumbers = [];
   for(let i = 0; i < numbers.length; i++){
    const index = i;
    const elements = numbers[i];
    if(elements % 2 == 0){
        continue;  
    }
    console.log(elements);
    oddNumbers.push(elements);
   } 
   return oddNumbers;
    }

const marks = [30, 80, 60, 89, 9645, 40, 64, 7788];
const oddNumbers = oddNumbersOfAnArray(marks);
console.log(oddNumbers);




function oddSum(num){
    let sumOfOdd = 0;
    const oddNumbers1 = []
    for(let i = 0; i < num.length; i++){
        const index = i;
        const elements = num[index];
        if(elements % 2 == 0){
            continue;
        }
        sumOfOdd = sumOfOdd + elements;
        oddNumbers1.push(elements);
        console.log(elements, sumOfOdd, oddNumbers1);
    }
    return sumOfOdd;
}

const numbers3 = [21, 31, 50, 90, 36 ,63, 45, 87];
const result3 = oddSum(numbers3);
console.log(result3);