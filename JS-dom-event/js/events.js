console.log('events js');

// way one

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


// way two

const makeRedButton = document.getElementById('make-red');
makeRedButton.onclick = makeRed;
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

document.getElementById('make-steelblue').onclick = makeSteelBlue;


function makeSteelBlue(){
    document.body.style.backgroundColor = 'steelblue';
}



const makeViolet = document.getElementById('make-violet');
makeViolet.addEventListener('click', makeVioletColor);

function makeVioletColor(){
    document.body.style.backgroundColor = 'violet';
}


document.getElementById('make-pink').addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

