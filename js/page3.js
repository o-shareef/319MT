let food = [];

fetch("../assets/catFood.json")
  .then((response) => response.json())
  .then((toysData) => {
    food = toysData.cat_food;
    loadToys(food);
  });

function loadToys(food) {
  var productCard = document.getElementById("col");
  productCard.innerHTML = "";

  //grab content from each JSON input
  for (var i = 0; i < food.length; i++) {
    let product_name = food[i].product_name;
    let description = food[i].description;
    let price = food[i].price;
    let image = food[i].image;

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
