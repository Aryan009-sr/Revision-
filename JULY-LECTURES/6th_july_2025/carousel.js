const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
const totalSlides = slides.length;
const intervalTime = 2000; 

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}
const carouselInterval = setInterval(nextSlide, intervalTime);
