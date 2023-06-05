const ghLink = document.querySelector('.bi-github');
const sourceCode = document.querySelector('.source-btn');
const sourceCodeOne = document.querySelector('.source-btn-one');
const sourceCodeTwo = document.querySelector('.source-btn-two');
const linkedinBtn = document.querySelector('.bi-linkedin');

ghLink.addEventListener('click', function(link){
    link.preventDefault();
  window.open("https://github.com/WRamdaras");

});

sourceCode.addEventListener('click', function(link){
    link.preventDefault();
  window.open("https://github.com/WRamdaras/Shoe-Site");

});

sourceCodeOne.addEventListener('click', function(link){
    link.preventDefault();
  window.open("https://github.com/ROCMondriaanTIN/sd22-themaweek-2-t1k-WRamdaras");

});

sourceCodeTwo.addEventListener('click', function(link){
    link.preventDefault();
  window.open("https://github.com/ROCMondriaanTIN/sd22-design-p2-portfolio-WRamdaras");

});

linkedinBtn.addEventListener('click', function(link){
    link.preventDefault();
  window.open("https://nl.linkedin.com/in/wiresh-ramdaras-954a09276");

});