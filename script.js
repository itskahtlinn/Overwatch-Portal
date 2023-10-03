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

function handleScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDownText = document.querySelector('.scroll-down-text');

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down, hide the text by moving it off the screen
        scrollDownText.style.transform = 'translateY(100%)';
    } else {
        // Scrolling up, show the text by resetting its transform
        scrollDownText.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScrollTop;
}

const scrollDownElement = document.getElementById('scroll-down');
let isScrollingUp = false;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0 && !isScrollingUp) {
        // Scrolling down
        scrollDownElement.classList.add('hidden');
        isScrollingUp = true;
    } else if (scrollTop === 0 && isScrollingUp) {
        // Scrolling back to the top
        scrollDownElement.classList.remove('hidden');
        isScrollingUp = false;
    }  
});

