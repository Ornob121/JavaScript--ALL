const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = numbers
console.log(x, y);

function boxify (num1, num2){
    const arr = [num1, num2];
    return arr;
};

const [first, second] = boxify(20, 40);
console.log(first, second);


const student = {
    name: 'Sakib Khan', 
    age:32, 
    movies:['King Khan', 'Number One Sakib Khan']
};

const [movie1, movie2] = student.movies;
console.log(movie1, movie2);



// Object Destructuring

const person ={
    name:'alu', 
    age: 20, 
    id:12, 
    salary: 25000
};

const {name} = person;
console.log(name)


const employee = {
    ide:'VS Code', 
    designation: 'developer', 
    machine: 'mac', 
    languages: ['html', 'css', 'js'], 
    specification:{
        height: 66, 
        weight: 70, 
        address: 'Dhaka, Bangladesh', 
        drink: 'water', 
        watch :{
            color: 'black', 
            price:500, 
            brand: 'casio'
        }
    }
};

const {machine, ide} = employee;
const {height, drink} = employee.specification;
const {brand} = employee?.specification?.watch