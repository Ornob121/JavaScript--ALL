const student = {
    name : 'Kodom Ali', 
    money : 5000, 
    study : 'Math', 
    subjects : ['calculus', 'algebra', 'geometry' ], 
    exam : function (){
        return `${this.name} is participating in an exam`;
    }, 
    improveExam : function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    }, 
    treatDay : function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}
const result =  student.exam();
// console.log(result)


const result2 =  student.improveExam('Algebra');
// console.log(result2)


const result3 =  student.treatDay(900);
console.log(result3)
console.log(student.money)