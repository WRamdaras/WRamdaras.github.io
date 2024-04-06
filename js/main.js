// Progress bar
const progressBar = document.querySelector(".progress-bar");
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progressHeight + "%";
};

// reset contact
window.addEventListener('unload', function() {
  let contactForm = document.querySelector(".contact-form");
  contactForm.reset();
});