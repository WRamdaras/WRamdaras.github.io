// let sourceCodeNetflix = document.querySelector(".source-btn");
let sourceCodeOne = document.querySelector(".source-btn-one");
let sourceCodeTwo = document.querySelector(".source-btn-two");
let sourceCodeThree = document.querySelector(".source-btn-three");
let sourceCodeFour = document.querySelector(".source-btn-four");
let sourceCodeFive = document.querySelector(".source-btn-five");
// let = previewNetflix = document.querySelector(".preview-btn")
let = previewBtnOne = document.querySelector(".preview-btn-one")
let = previewBtnTwo = document.querySelector(".preview-btn-two")
let = previewBtnThree = document.querySelector(".preview-btn-three")
let = previewBtnFour = document.querySelector(".preview-btn-four")
let = previewBtnFive = document.querySelector(".preview-btn-five")
// let ghLink = document.querySelector(".bi-github");
// let linkedinBtn = document.querySelector(".bi-linkedin");


let sourceCodeNetflix = document.querySelector(".source-btn");
sourceCodeNetflix.addEventListener("click", function(link){
    link.preventDefault();
  window.open("https://github.com/WRamdaras/netflix");
});
let = previewNetflix = document.querySelector(".preview-btn")
previewNetflix.addEventListener("click", function(link){
  link.preventDefault();
  window.open("https://wramdaras.github.io/netflix/");
})

sourceCodeOne.addEventListener("click", function(link){
    link.preventDefault();
  window.open("https://github.com/ROCMondriaanTIN/sd22-themaweek-2-t1k-WRamdaras");
});

sourceCodeTwo.addEventListener("click", function(link){
    link.preventDefault();
  window.open("https://github.com/ROCMondriaanTIN/sd22-design-p2-portfolio-WRamdaras");
});

let ghLink = document.querySelector(".bi-github");
ghLink.addEventListener("click", function(link){
    link.preventDefault();
  window.open("https://github.com/WRamdaras");
});

let linkedinBtn = document.querySelector(".bi-linkedin");
linkedinBtn.addEventListener("click", function(link){
    link.preventDefault();
  window.open("https://nl.linkedin.com/in/wiresh-ramdaras-954a09276");
});

