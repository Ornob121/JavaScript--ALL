const numbers = [54, 89, 12, 45];

const student = {
    name: 'Sakib Khan', 
    age:32, 
    movies:['King Khan', 'Number One Sakib Khan']
};

const about = `My Name is ${student.name} My age is ${student.age} has number ${numbers[2]} also has movies ${student.movies[1]}`;
console.log(about);



const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x%2 ===0;
const addThree = (num1, num2, num3) => num1 + num2 + num3;
const doMath = (x, y, z) =>{
    return x + y + z
};


// Spread Operator
const newNumbers = [...numbers];
numbers.push(99);
console.log(newNumbers)
console.log(numbers)

// Create an new array from an older array.
const currentNumbers = [...numbers, 55];
console.log(currentNumbers)