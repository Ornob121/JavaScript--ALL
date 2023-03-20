const player = {};

player.name = 'Small Nirob';
player.specialty = 'Batsman';
player.bat = () => {
    console.log('hello how are you?')
}
// console.log(player);
// player.bat()

const student = {
    name: 'Panday', 
    job: 'Khay Anday', 
    work: function () {
        console.log('Daily go to firm to get anday')
    }, 
    salary : 25000
};
// console.log(student)

// 2. Object constructor 
const person = new Object();
person.name = 'lala khan';
person.age = 200;
// console.log(person)




// 3. Object create method
const item = Object.create(null)
// console.log(item)



class Person {
    name = 'Babul';
    address = 'sodor ghat';
    age;
    constructor(age){
        this.age = age
    }
}

const person3 = new Person(56);
console.log(person3)