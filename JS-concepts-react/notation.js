const person = {
    name: 'Lal Nil Holud Mia', 
    profession: 'Traffic Surgeon', 
    age: 39, 
    25: 'Summer',
    address:'Sahabag'
};

// dot notation
const prof1 =person.profession;
console.log(prof1)
// const season = person.25; cannot do it because it is number

// bracket Notation 
const pName = 'profession'
const prof2 = person['profession']
const prof3 = person[pName]
const season = person[25]
console.log(season)
console.log(prof2)
console.log(prof3)