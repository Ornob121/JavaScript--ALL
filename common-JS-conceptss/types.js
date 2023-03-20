// JS is a dynamic type language while other language is static or strong type language.    


// Primitive type variable
const a = 1;
const b = 'hello how are you';
const c = true;


//Non-Primitive variable
const numbers = [20, 30, 80, 405, 60];
const student = {
    name: 'lala', 
    id: 20, 
    class:7, 
    isFailed: false
};







let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);



const p = {
    job : 'Web Developer'
}
const q = p;
console.log(p, q);
q.job = 'Full-Stack-Web-Developer';
console.log(p, q);