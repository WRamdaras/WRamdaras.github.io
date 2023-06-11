let sourceCodeDashboard = document.querySelector(".source-btn");
let = previewBtnDashboard = document.querySelector(".preview-btn");

let sourceCodeWebcatalogus = document.querySelector(".source-btn-one");
let = previewBtnWebcatalogus = document.querySelector(".preview-btn-one");

let sourceCodeNetflix = document.querySelector(".source-btn-two");
sourceCodeNetflix.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://github.com/WRamdaras/netflix");
});
let = previewNetflix = document.querySelector(".preview-btn-two");
previewNetflix.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://wramdaras.github.io/netflix/");
});

let sourceCodeEscapeRoom = document.querySelector(".source-btn-three");
let = previewBtnEscapeRoom = document.querySelector(".preview-btn-three");

let sourceCodeBKE = document.querySelector(".source-btn-four");
let = previewBtnBKE = document.querySelector(".preview-btn-four");

let sourceCodeHogerLager = document.querySelector(".source-btn-five");
let = previewBtnHogerLager = document.querySelector(".preview-btn-five");

let ghLink = document.querySelector(".bi-github");
ghLink.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://github.com/WRamdaras");
});

let linkedinBtn = document.querySelector(".bi-linkedin");
linkedinBtn.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://nl.linkedin.com/in/wiresh-ramdaras-954a09276");
});

const progressBar = document.querySelector(".progress-bar");
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progressHeight + "%";
};
