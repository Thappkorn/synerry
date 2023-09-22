// Navbar
const navbar = document.querySelector(".navbar");
const stickyClass = "sticky";

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const navbarHeight = navbar.clientHeight;

  if (scrollY > navbarHeight) {
    navbar.classList.add(stickyClass);
  } else {
    navbar.classList.remove(stickyClass);
  }
});

// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slides__image");
  const dots = document.getElementsByClassName("slide__item");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.transform = "translateX(100%)";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active__slide", "");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.transform = "translateX(0%)";
  dots[slideIndex - 1].className += " active__slide";
  setTimeout(showSlides, 5000);
}

function plusSlides(n) {
  showSlidesWithIndex((slideIndex += n));
}

function currentSlide(n) {
  showSlidesWithIndex((slideIndex = n));
}

function showSlidesWithIndex(n) {
  let i;
  const slides = document.getElementsByClassName("slides__image");
  const dots = document.getElementsByClassName("slide__item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.transform = "translateX(-100%)";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active__slide", "");
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.transform = "translateX(0%)";
  dots[slideIndex - 1].className += " active__slide";
}

// go to detail page
function goToDetailPage() {
  window.location.href = "detail.html";
}
// go to home page
function goToHomePage() {
  window.location.href = "index.html";
}
