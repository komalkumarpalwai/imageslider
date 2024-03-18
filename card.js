let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideWidth = slides.clientWidth;
const images = document.querySelectorAll('.slides img');

function showSlide(index) {
  if (index < 0) {
    slideIndex = images.length - 1;
  } else if (index >= images.length) {
    slideIndex = 0;
  }

  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

// Display the first slide initially
showSlide(slideIndex);