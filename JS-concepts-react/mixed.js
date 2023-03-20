// JSON
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

console.log(employee)
const employeeJSON = JSON.stringify(employee);
console.log(employeeJSON);

const employeeObj = JSON.parse(employeeJSON);
console.log(employeeObj)



// Fetch

fetch('url')
.then(res => res.json())
.then(data => console.log(data));


// Keys, Values
const keys = Object.keys(employee);
const values = Object.values(employee);

// for
const numbers = [21, 54, 84, 52];


const products = [
    {name: 'laptop', price: '32000', brand: 'lenovo', color: 'silver'},
    {name: 'Phone', price: '132000', brand: 'iPhone', color: 'golden'},
    {name: 'watch', price: '2000', brand: 'casio', color: 'black'},
    {name: 'camera', price: '3000', brand: 'canon', color: 'white'},
    {name: 'tablet', price: '12000', brand: 'samsung', color: 'blue'},
];

const newProduct = {name:'web-cam', price: 17542, brand:'lal'};

const newProducts = [...products, newProduct];

// remove phone means create new array without the phone
const remaining = products.filter(p => p.name !== 'Phone')
console.log(remaining)