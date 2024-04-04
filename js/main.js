// AnimeHub
let sourceCodeAnimeHub = document.querySelector(".source-btn-six");
sourceCodeAnimeHub.addEventListener("click", function (link) {
  link.preventDefault();
  window.open("https://github.com/WRamdaras/animehub");
});
// let = previewBtnAnimeHub = document.querySelector(".preview-btn-six");
// previewBtnAnimeHub.addEventListener("click", function (link) {
//   link.preventDefault();
//   window.open("https://wramdaras.github.io/HigherLower/");
// });

// Football-shirts
let sourceCodeFBshirts = document.querySelector(".source-btn-seven");
sourceCodeFBshirts.addEventListener("click", function (link) {
  link.preventDefault();
  // window.open("https://github.com/WRamdaras/animehub");
});
let = previewBtnFBshirts = document.querySelector(".preview-btn-seven");
previewBtnFBshirts.addEventListener("click", function (link) {
  link.preventDefault();
  // window.open("https://wramdaras.github.io/HigherLower/");
});


// Progress bar
const progressBar = document.querySelector(".progress-bar");
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progressHeight + "%";
};

// reset contact
let contactReset = document.querySelector(".contact-form")
contactReset.addEventListener("submit",   function(){
  this.reset();
})