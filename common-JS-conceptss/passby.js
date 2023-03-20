// Variables or primitive types are pass by number that means the main variable will not change if i change the value inside a function.

let num1 = 5;
let num2 = 7;

function multiply(a, b) {
    a = 25;
  const result = a * b;
  return result;
}

console.log(num1)
const output = multiply(num1, num2);
console.log(output);
console.log(num1)



// Objects and Array are pass by reference that means if i change the value inside a function the object or array or any non-primitive things will change.
let student1 = {
    name: 'Jalil', 
    partner: 'Borsha'
}
let student2 = {
    name: 'Raj', 
    partner: 'Anika'
}

function makeMovie (couple1, couple2){
    couple1.name = 'Ononto'
    couple2.partner = 'Mim'
};

console.log(student1, student2);
makeMovie(student1 ,student2);
console.log(student1, student2);