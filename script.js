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
    const slideWidth = slider.offsetWidth; // Get the width of the slider container
    const translateX = -slideIndex * slideWidth; // Adjust for image width
    slider.style.transform = `translateX(${translateX}px)`;
    radioButtons.forEach((radio, index) => {
        radio.checked = index === slideIndex;
    });
}

setInterval(nextSlide, 2500);

let lastScrollTop = 0;

// Function to show the "Scroll down" element
function showScrollDown() {
    document.getElementById('scroll-down').style.display = 'block';
}

// Function to hide the "Scroll down" element
function hideScrollDown() {
    document.getElementById('scroll-down').style.display = 'none';
}

// Function to handle scroll events
function handleScroll() {
    if (window.scrollY > 0) {
        hideScrollDown();
    } else {
        showScrollDown();
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

