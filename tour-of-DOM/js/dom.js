console.log('Hello from JS');
const liCollection = document.getElementsByTagName('li');
console.log(liCollection);
for (let i = 0; i < liCollection.length; i++) {
    const elements = liCollection[i];
    console.log(elements.innerText);
}


const firstHeader = document.getElementById('places-title')
console.log(firstHeader);



const places = document.getElementsByClassName('important-places');
for (place of places) {
    console.log(place.innerText);
}

const somethings = document.querySelector('.important-places').style.backgroundColor = 'yellow';
const something = document.querySelector('.important-places').style.color = 'red';
console.log(somethings);
console.log(something);


const result = document.getElementsByClassName('lala')[0].innerHTML;
console.log(result);


const sections = document.getElementsByTagName('section');
for (const section of sections) {
    console.log(section);
    section.style.border = '2px solid blue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.background = 'lightGray'
    section.style.paddingLeft = '10px';
}

const placesContainer = document.getElementById('places-title');
placesContainer.classList.add('text-flex');