
const slider = document.querySelector('.slider-wrapper');
const radioButtons = document.querySelectorAll('.radio-buttons input');
let slideIndex = 0;

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slider.children.length) {
        slideIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    const slideWidth = slider.offsetWidth; 
    const translateX = -slideIndex * slideWidth; 
    slider.style.transform = `translateX(${translateX}px)`;
    radioButtons.forEach((radio, index) => {
        radio.checked = index === slideIndex;
    });
}

setInterval(nextSlide, 2500);

let lastScrollTop = 0;

function showScrollDown() {
    document.getElementById('scroll-down').style.display = 'block';
}

function hideScrollDown() {
    document.getElementById('scroll-down').style.display = 'none';
}

function handleScroll() {
    if (window.scrollY > 0) {
        hideScrollDown();
    } else {
        showScrollDown();
    }
}

window.addEventListener('scroll', handleScroll);

document.getElementById('back-button').addEventListener('click', function() {
    window.history.back(); // Go back to the previous page
});


document.addEventListener("DOMContentLoaded", function() {
    
});

