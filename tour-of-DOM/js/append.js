const newAdd = document.getElementById('places-title');
const li = document.createElement('li');
li.innerText = 'Japan';
newAdd.appendChild(li);



const secondAdd = document.getElementById('second-item-add');
console.log(secondAdd);
const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'My brothers';
section.appendChild(h1);

secondAdd.appendChild(section);
const ul = document.createElement('ul');
section.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText = 'Tamim';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Shawon';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Rahat';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Tanvir';
ul.appendChild(li4);



// Another way to set element on a section
const friendsSection = document.createElement('section');
friendsSection.innerHTML = `
<h1> My friends </h1>
<ul> 
<li>Anurag</li>
<li>Fahad</li>
<li>Rifat</li>
<li>Ronok</li>
<li>Hakim</li>
<li>Siyam</li>
<li>Mahruf</li>
<li>Ove</li>
<li>Shahed</li>
<li>Abdullah</li>
<li>Nahid</li>
</ul>
`
secondAdd.appendChild(friendsSection);



const thirdAdd = document.getElementById('footer-section');
console.log(thirdAdd);

const newSection = document.createElement('section');
thirdAdd.appendChild(newSection);

const bio = document.createElement('p');
bio.innerText = 'Hello how are you I hope that you are doing well.';
newSection.appendChild(bio);

newSection.innerHTML = `
<p><a href ="">Home</a></p>
<p><a href ="">Contact</a></p>
<p><a href ="">Log-In</a></p>
<p><a href ="">Exit</a></p>
<p><a href ="">Lala</a></p>
`