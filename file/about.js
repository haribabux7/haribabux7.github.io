//PRELOADER
    window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
    });


  // Select the button
  document.getElementById('download-btn').addEventListener('click', function(event) {
    event.preventDefault();

    this.style.display = 'none';

    const openWrapper = document.getElementById('open-wrapper');
    openWrapper.style.display = 'block';

    window.location.href = event.target.href;
  });

    
//MENU

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
const scrollUpBtn = document.getElementById("scrollUpBtn");

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

const skills = document.querySelectorAll('.skill');
  let current = 0;

  setInterval(() => {
    skills.forEach(skill => skill.classList.remove('active'));

    skills[current].classList.add('active');

    current = (current + 1) % skills.length;
  }, 1500); // 
