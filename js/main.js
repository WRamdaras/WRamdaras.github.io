// Dashboard
let sourceCodeDashboard = document.querySelector(".source-btn");
sourceCodeDashboard.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("");
});
let = previewBtnDashboard = document.querySelector(".preview-btn");
previewBtnDashboard.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("");
});

// Webcatalogus
let sourceCodeWebcatalogus = document.querySelector(".source-btn-one");
sourceCodeWebcatalogus.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://github.com/WRamdaras/Webcatalogus");
});
let = previewBtnWebcatalogus = document.querySelector(".preview-btn-one");
previewBtnWebcatalogus.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://wramdaras.github.io/Webcatalogus/");
});

// Netflix
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

// Escape Room
let sourceCodeEscapeRoom = document.querySelector(".source-btn-three");
sourceCodeEscapeRoom.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://github.com/WRamdaras/Escape-Room");
});
let = previewBtnEscapeRoom = document.querySelector(".preview-btn-three");
previewBtnEscapeRoom.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://wramdaras.github.io/Escape-Room/");
});

// Tic Tac Toe
let sourceCodeBKE = document.querySelector(".source-btn-four");
sourceCodeBKE.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://github.com/WRamdaras/TicTacToe");
});
let = previewBtnBKE = document.querySelector(".preview-btn-four");
previewBtnBKE.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://wramdaras.github.io/TicTacToe/");
});

// Higher Lower
let sourceCodeHogerLager = document.querySelector(".source-btn-five");
sourceCodeHogerLager.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://github.com/WRamdaras/HigherLower");
});
let = previewBtnHogerLager = document.querySelector(".preview-btn-five");
previewBtnHogerLager.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://wramdaras.github.io/HigherLower/");
});

// Github link
let ghLink = document.querySelector(".bi-github");
ghLink.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://github.com/WRamdaras");
});

// Linkedin link
let linkedinBtn = document.querySelector(".bi-linkedin");
linkedinBtn.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://nl.linkedin.com/in/wiresh-ramdaras-954a09276");
});

// Inspiration link
let inspirationLink = document.querySelector(".inspiration-link");
inspirationLink.addEventListener("click", function(link){
  link.preventDefault();
  window.open("https://sbechoe.github.io/");
})

// Progress bar
const progressBar = document.querySelector(".progress-bar");
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progressHeight + "%";
};
