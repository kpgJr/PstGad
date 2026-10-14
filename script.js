// Testimonials slider

const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".slider-pagination .dot");

let currentSlide = 0;

// Show selected testimonial

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

// Automatic sliding every 7 seconds

function nextSlide() {

    currentSlide = (currentSlide + 1) % slides.length;

    showSlide(currentSlide);
}

if (slides.length > 1) {
    setInterval(nextSlide, 7000);
}