function firstFetch (){
  fetch("https://forbes400.onrender.com/api/forbes400?limit=20")
  .then((res) => res.json())
  .then((data) => displayFirstTen(data));
}

function displayFirstTen(data) {
  console.log(data);
  const firstSection = document.getElementById("first-10-container");
  displaySpinner(false)
  document.getElementById('show-all-btn').classList.remove('d-none')
  data.forEach((data) => {
    const div1 = document.createElement("div");
    div1.classList.add('row')
    div1.classList.add('g-0')
    div1.innerHTML = `
  <div class="col-md-4">
  <img src="${data.person.squareImage}" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">Name: ${data.person.name}</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <button onclick="displayDetails('${data}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
</div>
   `;
   firstSection.appendChild(div1);
  });
};

const displaySpinner = (isLoading) =>{
  const spinner = document.getElementById('spinner-section');
  if(isLoading){
    spinner.classList.remove('d-none')
  }
  else{
    spinner.classList.add('d-none')
  }
}
displaySpinner(true);

function allData (search){
  const url = 'https://forbes400.onrender.com/api/forbes400/${search}'
  fetch(url)
.then(res => res.json())
.then(data => displayAll(data));
}

const displayAll = data =>{
  console.log(data);
  const allContainer = document.getElementById('show-all-container');
  displaySpinner(false)
  data.forEach (data =>{
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
    <img src="${data.person.squareImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Name: ${data.person.name}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
    `
    allContainer.appendChild(div);
  });
  document.getElementById('show-all-btn').classList.add('d-none')
};


document.getElementById('show-all-btn').addEventListener('click', function(){
  document.getElementById('show-all-btn').classList.add('d-none')
  document.getElementById('first-10-container').innerText = '';
  displaySpinner(true);
  allData()
});



function displayDetails2 (data){
  console.log('hello hwo ' , data)
}


function search(){
  const search = document.getElementById('search-box');
  const searchValue = search.value;
  allData(searchValue);
}

document.getElementById('search-box').addEventListener('keyup', function(key){
  if(key.key === 'Enter'){
    displayAll()
  }
});

firstFetch()