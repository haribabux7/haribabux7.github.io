//PRELOADER
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
    });

// role
document.addEventListener("DOMContentLoaded", function() {
    const roles = ["Data Analyst", "Web Developer"];
    let i = 0;
    const roleElement = document.querySelector(".roles");

    function displayRole() {
        roleElement.innerText = roles[i];
        roleElement.style.opacity = 1; 
        setTimeout(function() {
            roleElement.style.opacity = 0;
        }, 2000);
        i = (i + 1) % roles.length;
        setTimeout(displayRole, 2500);
    }

    displayRole();
});
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