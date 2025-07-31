 // PRELOADER + PARTICLES INIT (Optimized)
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";

  document.documentElement.style.overflow = 'auto';
  document.body.style.overflow = 'auto';

  // Initialize particles only if library is available
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 70,
          density: { enable: true, value_area: 800 }
        },
        color: { value: "#b38b6d" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 }
        },
        opacity: {
          value: 0.3,
          random: false,
          anim: { enable: false }
        },
        size: {
          value: 2.5,
          random: true,
          anim: { enable: false }
        },
        line_linked: {
          enable: true,
          distance: 120,
          color: "#ffffff",
          opacity: 0.25,
          width: 2
        },
        move: {
          enable: true,
          speed: 1.2, 
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: false
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: { opacity: 0.4 }
          }
        }
      },
      retina_detect: true
    });
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
function flipCard(button) {
  const cardInner = button.closest('.flip-card-inner');
  cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)'
      ? ''
      : 'rotateY(180deg)';
} 