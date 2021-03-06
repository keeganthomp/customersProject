var customerDiv = document.querySelector(".customers");

(function() {
  "use strict";
  fetch("https://randomuser.me/api/?results=12")
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log("Here is the data:", data);
        for (let i = 0; i < data.results.length; i++) {
          makeProfile(data.results[i]);
        }
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });

  function makeProfile(data) {
    function addProfDiv() {
      var createDiv = document.createElement("div");
      createDiv.classList.add("profileWrapper");
      customerDiv.appendChild(createDiv);

        var createImgTag = document.createElement("img");
        createImgTag.classList.add("profPic");
        createDiv.appendChild(createImgTag);
        createImgTag.src = data.picture.large;

        var createName = document.createElement("p");
        createName.classList.add("name");
        createDiv.appendChild(createName);
        createName.innerHTML = data.name.first + " " + data.name.last;

        var createEmail = document.createElement("p");
        createEmail.classList.add("email");
        createDiv.appendChild(createEmail);
        createEmail.innerHTML = data.email

        var createAddress = document.createElement("p");
        createAddress.classList.add("address");
        createDiv.appendChild(createAddress);
        createAddress.innerHTML = data.location.street + "<br>" + data.location.city + ", " + data.location.state + " " + data.location.postcode;

        var createPhone = document.createElement("p");
        createPhone.classList.add("phone");
        createDiv.appendChild(createPhone);
        createPhone.innerHTML = data.phone;
        }
    addProfDiv();
  }
})();
