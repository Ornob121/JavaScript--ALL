function add (num1 = 20, num2 = 0){
    return num1 + num2;
}

const sum = add();
console.log(sum);



const aboutMe = ` Hello this is me and I am currently writing template string I can also add variable in this string dynamically like this ${add()}
This is a function with default parameter that i called`;
console.log(aboutMe);