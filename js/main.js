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