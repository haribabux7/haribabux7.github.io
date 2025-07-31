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

// ROLE TEXT SWITCHER
document.addEventListener("DOMContentLoaded", function () {
  const roles = ["Data Analyst", "Web Developer"];
  const roleElement = document.querySelector(".roles");

  if (!roleElement) return;

  let i = 0;
  roleElement.style.transition = "opacity 0.5s ease";

  function displayRole() {
    roleElement.innerText = roles[i];
    roleElement.style.opacity = 1;
    setTimeout(() => {
      roleElement.style.opacity = 0;
    }, 2000);
    i = (i + 1) % roles.length;
    setTimeout(displayRole, 2500);
  }

  displayRole();
});

// MENU TOGGLE

const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    const menu = document.getElementById('menu');
    if (!menu) return;

    menu.classList.toggle('active');
    this.classList.toggle('close');
    this.innerHTML = this.classList.contains('close')
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });
}

// SCROLL TO TOP BUTTON

const scrollUpBtn = document.getElementById("scrollUpBtn");
if (scrollUpBtn) {
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  };

  scrollUpBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

//paragraph 

const lines = [
      {
        id: "line1",
        text: "Welcome to my portfolio. I’m a beginner data analyst and web developer with a growing passion for transforming data into meaningful insights and building clean, responsive websites. With foundational experience in HTML, CSS, JavaScript, Python, and SQL, I specialize in turning complex datasets into clear, actionable strategies and creating user-friendly web applications. I also utilize data visualization tools to bring clarity to patterns and trends that drive better decision-making."
      }
    ];

    function typeLine(lineIndex = 0, charIndex = 0) {
      if (lineIndex >= lines.length) return;

      const line = document.getElementById(lines[lineIndex].id);
      const text = lines[lineIndex].text;

      if (charIndex < text.length) {
        line.textContent += text.charAt(charIndex);
        setTimeout(() => typeLine(lineIndex, charIndex + 1), 23);
      } else {
        setTimeout(() => typeLine(lineIndex + 1, 0), 500);
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      typeLine();
    });