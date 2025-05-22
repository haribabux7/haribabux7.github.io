//PRELOADER
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
    });
const scrollUpBtn = document.getElementById("scrollUpBtn");




document.getElementById('menuToggle').addEventListener('click', function () {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
  this.classList.toggle('close');
  if (this.classList.contains('close')) {
      this.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
      this.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

scrollUpBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


document.documentElement.style.overflow = 'auto'; 
document.body.style.overflow = 'auto'; 

