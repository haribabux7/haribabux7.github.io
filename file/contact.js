
const scrollUpBtn = document.querySelector("#scrollUpBtn");
if (scrollUpBtn) {
  scrollUpBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.documentElement.style.overflow = "auto";
document.body.style.overflow = "auto";

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