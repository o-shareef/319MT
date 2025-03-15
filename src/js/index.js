let petPics = [];
let productPics = [];

fetch("../assets/index.json")
  .then((response) => response.json())
  .then((pics) => {
    petPics = pics.pet_images;
    productPics = pics.product_images;
    loadPetPics(petPics);
    loadProductPics(productPics);
  });

function loadPetPics(petPics) {
  var carouselCard = document.getElementById("carousel");
  carouselCard.innerHTML = "";

  for (var i = 0; i < petPics.length; i++) {
    var imageURL = petPics[i].image;
    var imageDescription = petPics[i].description;

    var newCarouselCard = document.createElement("div");

    if (i === 0) {
      newCarouselCard.innerHTML = `
        <div class="carousel-item active" style="background-color: white; padding: 20px">
            <img class="bd-placeholder-img centered-img" src=${imageURL} alt="..." />
            <div class="container">
              <div class="carousel-caption">
                <p style="color: white; background-color: black; width: fit-content; margin: 0 auto; padding: 5px;"><strong>${imageDescription}</strong></p>
              </div>
            </div>
          </div>
        `;
    } else {
      newCarouselCard.innerHTML = `
      <div class="carousel-item" style="background-color: white; padding: 20px">
          <img class="bd-placeholder-img centered-img" src=${imageURL} alt="..." />
          <div class="container">
            <div class="carousel-caption">
              <p style="color: white; background-color: black; width: fit-content; margin: 0 auto; padding: 5px;"><strong>${imageDescription}</strong></p>
            </div>
          </div>
        </div>
      `;
    }
    carouselCard.appendChild(newCarouselCard);
  }
}

function loadProductPics(productPics) {
  var carouselCard = document.getElementById("featured");
  carouselCard.innerHTML = "";

  for (var i = 0; i < productPics.length; i++) {
    var imageURL = productPics[i].image;
    var featuredHeadline = productPics[i].headline;
    var featuredDescription = productPics[i].description;

    var newCarouselCard = document.createElement("div");

    if (i == 0) {
      newCarouselCard.innerHTML = `
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              ${featuredHeadline}
            </h2>
            <p class="lead">
              ${featuredDescription}
            </p>
          </div>
          <div class="col-md-5">
            <img src=${imageURL} alt="..." />
          </div>
        </div>

        <hr class="featurette-divider" />
        `;
    }

    if (i == 1) {
      newCarouselCard.innerHTML = `
      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">
            ${featuredHeadline}
          </h2>
          <p class="lead">
            ${featuredDescription}
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img src=${imageURL} alt="..." />
        </div>
      </div>

      <hr class="featurette-divider" />
      `;
    }

    if (i == 2) {
      newCarouselCard.innerHTML = `
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">
            ${featuredHeadline}
          </h2>
          <p class="lead">
            ${featuredDescription}
          </p>
        </div>
        <div class="col-md-5">
          <img src=${imageURL} alt="..." />
        </div>
      </div>

      <hr class="featurette-divider" />
      `;
    }
    carouselCard.appendChild(newCarouselCard);
  }
}
