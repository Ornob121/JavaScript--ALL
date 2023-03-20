const bottle = {
    color : 'Yellow', 
    isClean: true, 
    capacity: '1L', 
    price: 50
}
const keys = Object.keys(bottle);
// console.log(keys);

const values = Object.values(bottle);
// console.log(values)


const pairs = Object.entries(bottle)
// console.log(pairs)


console.log(bottle);
Object.seal(bottle);
bottle.price = 1000;
bottle.height = 50;
delete bottle.isClean;
console.log(bottle)