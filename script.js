// Carousel for Clients Section
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

function prevSlide() {
    slideIndex -= 2;
    if (slideIndex < 0) slideIndex = 0;
    showSlides();
}

function nextSlide() {
    showSlides();
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in Effect on Scroll
const fadeIns = document.querySelectorAll('.about, .projects, .clients, .contacts');

const fadeInOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
};

const fadeInOnScroll = new IntersectionObserver(function(entries, fadeInOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('fade-in');
            fadeInOnScroll.unobserve(entry.target);
        }
    });
}, fadeInOptions);

fadeIns.forEach(fadeIn => {
    fadeInOnScroll.observe(fadeIn);
});