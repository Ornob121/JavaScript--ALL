// Everything inside the second bracket ({}) is a block scope meaning that it can not be accessed out side the bracket. But it is a different story while using VAR. var does not follow the scope rule. it does something which is called hoisting which make the declared variable position outside of the second bracket.


function add(a, b){
    const total = a + b;
    if(b > 5 ){
        const sum = 25 + a + b
    }
    console.log(sum)
    return total;
}
add(5, 7);
// console.log(a, b)
console.log(total)