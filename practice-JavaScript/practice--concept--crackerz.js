function secondLargest(numbers) {
    const largest = numbers[0];
    let largestNumber = 0;
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        const elements = numbers[i];
        if (elements > largestNumber) {
            largestNumber = elements;
        }
        else if(elements < largestNumber){
            newArray.push(elements);
        }
        console.log(largestNumber);
        console.log(newArray);
    }
}


const lala = [20, 90, 60, 80, 99, 66, 30, 101, 80, 50];
const result = secondLargest(lala);