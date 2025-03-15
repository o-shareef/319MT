let catFood = [];
let catToys = [];
let dogFood = [];
let dogToys = [];
let allProducts = JSON.parse(sessionStorage.getItem("allProducts")) || [];
let reviews = JSON.parse(sessionStorage.getItem("reviews")) || [];

//promise.all allows us to synchronize the JSON data to
//ensure it has been fetched before we try to use it
Promise.all([
  fetch("../assets/catFood.json").then((response) => response.json()),
  fetch("../assets/catToys.json").then((response) => response.json()),
  fetch("../assets/dogFood.json").then((response) => response.json()),
  fetch("../assets/dogToys.json").then((response) => response.json()),
]).then(([JSON1, JSON2, JSON3, JSON4]) => {
  catFood = JSON1.cat_food;
  catToys = JSON2.cat_toys;
  dogFood = JSON3.dog_food;
  dogToys = JSON4.dog_toys;

  allProducts = [...catFood, ...catToys, ...dogFood, ...dogToys];
  sessionStorage.setItem("allProducts", JSON.stringify(allProducts));
  //test
  console.log("All Products:", allProducts);

  listProducts(allProducts);
});

//function to direct function execution based on current page being viewed
window.onload = function () {
  const path = window.location.pathname;

  if (path.includes("reviews.html")) {
    loadReviews();
  }
  if (path.includes("reviewSubmission.html")) {
    let submitButton = document.getElementById("submit");
    if (submitButton) {
      submitButton.addEventListener("click", function () {
        console.log("submit button clicked");
        getInputData();
      });
    }
  }
};

function listProducts(allProducts) {
  //fill up the dropdown at specified ID
  const productSelect = document.getElementById("productSelect");

  //iterate through all movies
  for (let i = 0; i < allProducts.length; i++) {
    let option = document.createElement("option");
    option.textContent = `${allProducts[i].product_name} -- (${allProducts[i].price})`;
    option.value = allProducts[i].product_name;
    productSelect.appendChild(option);
  }
}

function getInputData() {
  const name = document.getElementById("name").value;
  const productSelect = document.getElementById("productSelect");
  const product = productSelect.value;

  const checkboxes = document.querySelectorAll('input[type="radio"]');
  let rating = "";

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      rating = checkbox.value;
    }
  });

  const reviewText = document.getElementById("review").value;

  //make sure all fields are filled out
  if (!name || !product || !rating || !reviewText) {
    alert("Please fill out all fields before submitting a review!");
    return;
  }

  const newReview = { name, product, rating, reviewText };
  reviews.push(newReview);

  //globalize using session storage
  sessionStorage.setItem("reviews", JSON.stringify(reviews));

  //empty all input boxes
  document.getElementById("name").value = "";
  document.getElementById("productSelect").value = "";
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  document.getElementById("review").value = "";

  alert("Review submitted!");
  //redirect back to movies
  window.location.href = "../html/index.html";
}

function loadReviews() {
  const reviewDiv = document.getElementById("reviewSection");
  reviewDiv.innerHTML = "";

  reviews.forEach((review) => {
    let div = document.createElement("div");
    div.innerHTML = `
  <div class="card text-white bg-primary mb-3 review-card" style="max-width: 300px">
    <div class="card-header">${review.name}</div>
    <div class="card-body">
      <h5 class="card-title">${review.product}</h5>
      <p class="card-text"><strong>Rating:</strong> ${review.rating}/5</P>
      <p class="card-text">${review.reviewText}</p>
    </div>
  </div>`;

    reviewDiv.appendChild(div);
  });
}
