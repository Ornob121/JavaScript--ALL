function sum(a, b, c){
    console.log(arguments)
    const args = [...arguments]
    console.log(args)
    const result = a + b + c;
    return result;
};

const total = sum(20, 90, 60, 45, 64, 80, 78);
console.log(total)