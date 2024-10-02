window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


/*clients Section*/
let currentIndex = 1;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const totalItems = items.length;
const carouselInner = document.querySelector('.carousel-inner');

// Initial setup: show the first actual item
showSlide(currentIndex);

function showSlide(index) {
    if (index >= totalItems - 1) {
        currentIndex = 1; // Loop back to the first item
        carouselInner.style.transition = 'none'; // Disable transition for immediate effect
    } else if (index <= 0) {
        currentIndex = totalItems - 2; // Loop to the last real item
        carouselInner.style.transition = 'none';
    } else {
        carouselInner.style.transition = 'transform 0.5s ease-in-out'; // Normal transition
    }

    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Reset dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[(currentIndex - 1) % dots.length].classList.add('active');
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

function currentSlide(n) {
    currentIndex = n + 1; // Since we have duplicated items, account for index offset
    showSlide(currentIndex);
}