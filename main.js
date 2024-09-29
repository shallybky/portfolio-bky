const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h5", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .links", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".content", {
  ...scrollRevealOption,
  origin: "top",
});
ScrollReveal().reveal(".image", {
  ...scrollRevealOption,
  origin: "bottom",
});




ScrollReveal().reveal(".footer__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".footer__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".footer__container .mail__to", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".footer__localisation", {
  ...scrollRevealOption,
  delay: 1500,
});


const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centerSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 250,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },

  pagination: {
    el: ".swiper-pagination",
  },
});

const modal = document.getElementById("modal");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");
const images = document.querySelectorAll(".store__card img");
const body = document.body; 


images.forEach(image => {
  image.addEventListener('click', function() {
    const description = this.getAttribute('data-description');
    modalDescription.innerHTML = description;
    modal.style.display = "block";
    body.classList.add('no-scroll'); 
  });
});

closeModal.addEventListener('click', function() {
  modal.style.display = "none";
  body.classList.remove('no-scroll'); 
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    body.classList.remove('no-scroll'); 
  }
});
