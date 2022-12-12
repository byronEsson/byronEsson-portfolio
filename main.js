const header = document.querySelector(".navbar");
const home = document.getElementsByClassName("home")[0];

window.onscroll = () => {
  let top = window.scrollY;
  if (top >= 50) {
    header.classList.add("blur-navbar");
    header.classList.remove("unblur-navbar");
  } else {
    header.classList.add("unblur-navbar");
    header.classList.remove("blur-navbar");
  }
  if (top >= window.innerHeight) {
    home.innerHTML = "";
  } else {
    home.innerHTML = `<h1>Hello, my name is Byron.</h1>
    <p class="offset-lg-4 col-lg-4">Full-stack developer.</p>`;
  }
};

(() => {
  "use strict";
  var form = document.querySelector(".needs-validation");

  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  });
})();

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
