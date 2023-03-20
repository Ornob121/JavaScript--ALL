// const numbers = [12, 54, 65, 36, 40];
// for(const number of numbers ){
//     console.log(number)
// }


const bottle = {
    color : 'Yellow', 
    isClean: true, 
    capacity: '1L', 
    price: 50
}

// const keys = Object.keys(bottle);
// for (const key of keys){
//     console.log(key, bottle[key])
// }


for(const nani in bottle ){
    console.log(nani, bottle[nani])
};


// this way is only possible because of destructuring method. by using entries i convert the object into an array and than i used destructuring method to make the loop
const pairs = Object.entries(bottle);
for (const [key, value] of pairs){
    console.log(key, value);
}