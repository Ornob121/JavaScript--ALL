const student = {
  id: 120504,
  name: "Shadman Tahmid",
  isPassed: true,
  friends: ["Anurag", "Fahad", "Rifat", "Hakim", "Ronok"],
  friend1: {
    id: 120505,
    name: "Limon Hasan",
    isPassed: true,
    marks: [60, 70, 80, 40, 50],
  },
  assembly: function (name) {
    return `${this.name} and ${name} attend the assembly now`;
  },
};

const [first, ...rest] = [...student.friends];
const result = student.assembly(student.friends);

const mainDiv = document.getElementById("document-container");
const div = document.createElement("div");
div.innerHTML = `
<h3>Name : ${student.name}</h3>
<p>id: ${student.id} </p>
<p>isPassed : ${student.isPassed} </p>
<p>First Friend: ${first}</p>
<p>Rest Friends : ${rest}</p>
<P>Told To : ${result}</P>
`;
mainDiv.appendChild(div);

const friendsDiv = document.getElementById("friends-container");
const div2 = document.createElement("div");
div2.innerHTML = `
<h2>This is the friend list</h2>
<ul>
<li>${student.friends[0]}</li>
<li>${student.friends[1]}</li>
<li>${student.friends[2]}</li>
<li>${student.friends[3]}</li>
<li>${student.friends[4]}</li>
</ul>
`;
friendsDiv.appendChild(div2);



const even = (num1, num2) =>{
    const sum = num1 + num2;
    if(sum % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

const result2 = even(20 ,55);
console.log(result2)