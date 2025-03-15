let authorInfo = [];
let courseInfo = [];
let futureInfo = [];

fetch("../assets/about.json")
  .then((response) => response.json())
  .then((info) => {
    authorInfo = info.authors;
    courseInfo = info.course;
    futureInfo = info.future;
    loadAuthorCards(authorInfo);
    loadCourseCards(courseInfo);
    loadFutureCards(futureInfo);
  });

function loadAuthorCards(authorInfo) {
  var authorCard = document.getElementById("nav-author");
  authorCard.innerHTML = "";

  for (var i = 0; i < authorInfo.length; i++) {
    var name = authorInfo[i].name;
    var email = authorInfo[i].email;
    var major = authorInfo[i].major;

    var newAuthorCard = document.createElement("div");

    newAuthorCard.innerHTML = `
          <div
              class="card text-bg-primary mb-3 center"
              style="max-width: 18rem"
            >
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <div class="card-text">
                  <ul>
                    <li><b>Email:</b> ${email}</li>
                    <li><b>Major:</b> ${major}</li>
                  </ul>
                </div>
              </div>
            </div>
          `;
    authorCard.appendChild(newAuthorCard);
  }
}

function loadCourseCards(courseInfo) {
  var courseCard = document.getElementById("course");
  courseCard.innerHTML = "";

  for (var i = 0; i < courseInfo.length; i++) {
    var professor = courseInfo[i].professor;
    var courseName = courseInfo[i].course_name;
    var classDescription = courseInfo[i].class;

    var newCourseCard = document.createElement("div");

    newCourseCard.innerHTML = `
           <div class="card-body">
                <h5 class="card-title">${courseName}</h5>
                <div class="card-text">
                  <ul>
                    <li><b>Class Name:</b> ${classDescription}</li>
                    <li><b>Professor:</b> ${professor}</li>
                  </ul>
                </div>
              </div>
            `;
    courseCard.appendChild(newCourseCard);
  }
}

function loadFutureCards(futureInfo) {
  var futureCard = document.getElementById("future");
  futureCard.innerHTML = "";

  for (var i = 0; i < courseInfo.length; i++) {
    var description1 = futureInfo[i].description1;
    var description2 = futureInfo[i].description2;
    var description3 = futureInfo[i].description3;

    var newFutureCard = document.createElement("div");

    newFutureCard.innerHTML = `
           <div class="card-body">
                <h5 class="card-title">Future:</h5>
                <div class="card-text">
                  <ul>
                    <li>${description1}</li>
                    <li>${description2}</li>
                    <li>${description3}</li>
                  </ul>
                </div>
              </div>
            `;
    futureCard.appendChild(newFutureCard);
  }
}
