/*
There are 8 ways where i will get undefine.

1. Variable that is not initialized will give undefined.

2. function with no return

3. Parameter that is not passed while calling the function.

4. if return has nothing on the right side than it will return undefined.

5. Property that does not exist on an object will give me an undefined value.

6. Accessing array elements outside the index range will give me undefined

7. deleting an element inside an array and accessing that will give an undefined

8. Setting the value of the variable to undefined though i should not use it if there is no value than i should use null as the value of that variable.
*/

let first ;
console.log(first)

function second (a, b) {
    const total = a + b;
};
const result = second();
console.log(result);



function third (a, b, c, d){
    const sum = a + b + c + d;
    console.log(a, b, c, d);
}
third(2, 4);


function noNegative (a, b){
    if(a<0 || b<0){
        return;
    }
    return a + b;
};

const lala = noNegative(2, -4)
console.log(lala);

const fifth = {
    id: 2, 
    name: 'lala Khan', 
    age: 40
}

console.log(fifth.age, fifth.salary);





const sixth = [50, 80, 650, 70, 86];
console.log(sixth[1], sixth[7], sixth[120]);




const eighth = undefined;
console.log(eighth);

const ninth = null;

const data = {
    result: [], 
    updated : null
};

console.log(typeof undefined, typeof null)