let toys = [];

fetch("../assets/catToys.json")
  .then((response) => response.json())
  .then((toysData) => {
    toys = toysData.cat_toys;
    loadToys(toys);
  });

function loadToys(toys) {
  var productCard = document.getElementById("col");
  productCard.innerHTML = "";

  //grab content from each JSON input
  for (var i = 0; i < toys.length; i++) {
    let product_name = toys[i].product_name;
    let description = toys[i].description;
    let price = toys[i].price;
    let image = toys[i].image;

    //create a new HTML div division
    let newProductCard = document.createElement("div");

    //add class = “col” to new division for Bootstrap
    newProductCard.classList.add("col");
    newProductCard.innerHTML = `
  
      <div class="card shadow-sm fill-space">
        <img src=${image} alt="..." />
        <div class="card-body">
          <h1 class="card-product_name card-title center" style="color: #0b5ed7">${product_name}</h1>
          <p class="card-text">
          <ul style="list-style-type: none; padding: 0px"> 
          <li><strong>Price:</strong> ${price}</li>
          </ul>
          </p>
          <p class="card-text">${description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <a href="../html/reviews.html">
              </a>
            </div>
          </div>
        </div>
      </div>
      `;

    // append new division
    productCard.appendChild(newProductCard);
  }
}
