function getData() {
  const url = `./product.json`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
}

const displayData = (data) => {
  console.log(data);
  const container = document.getElementById("cards");
  data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card", "m-2");
    console.log(product);
    card.innerHTML = `
        
        <div class="bookmark-icon">
            <i onclick="removeBookmark(${product.id})" class="fa-solid fa-bookmark"></i>
            <i onclick="handleBookmark('${product.name}', '${product.id}', '${product.price}')" class="fa-regular fa-bookmark"></i>
          </div>
          <div class="product-img-container">
            <img
              class="product-img"
              src="${product.image}"
              alt=""const card = document.createElement("div");
              card.classList.add("card", "m-2");
            />
          </div>
          <h3>${product.name}</h3>
          <p>The Widget 3000 is the latest and greatest in widget</p>
          <div class="priceAndButtons">
            <h2 class="text-primary">${product.price}</h2>
            <button class="btn btn-primary">Buy Now</button>
          </div>
        `;
    container.appendChild(card);
  });
};

const handleBookmark = (name, id, price) => {
  const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
  let bookmark = [];
  const bookmarked = {
    name,
    id,
    price,
    bookmarked: true,
  };
  if (previousBookmark) {
    const matchedId = previousBookmark.find(product => product.id === id);
    if (matchedId) {
      alert("already bookmarked");
    } else {
      const newBookmark = [...previousBookmark, bookmarked];
      localStorage.setItem("bookmark", JSON.stringify(newBookmark));
    }
  } else {
    bookmark.push(bookmarked);
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }
};


const removeBookmark = (id) => {
    const previousBookmark = JSON.parse(localStorage.getItem('bookmark'));
    const matchedId = previousBookmark.filter(product => product.id != id);
    localStorage.setItem('bookmark', JSON.stringify(matchedId))
}
// ({[{([])}]})



getData();