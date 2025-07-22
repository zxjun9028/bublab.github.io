const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const scrollAmount = carousel.querySelector('img').offsetWidth + 15;
let autoScrollInterval;
let userInteracted = false;
let interactionTimeout;

// Horizontal scroll with mouse wheel
carousel.addEventListener('wheel', function (e) {
  e.preventDefault();
  carousel.scrollLeft += e.deltaY;
  pauseAutoScroll();
});

// Pause auto‑scroll on user interaction
['touchstart', 'mousedown', 'scroll'].forEach(evt => {
  carousel.addEventListener(evt, pauseAutoScroll, { passive: true });
});

function pauseAutoScroll() {
  userInteracted = true;
  clearTimeout(interactionTimeout);
  clearInterval(autoScrollInterval);
  interactionTimeout = setTimeout(() => {
    userInteracted = false;
    startAutoScroll();
  }, 3000);
}

function startAutoScroll() {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  autoScrollInterval = setInterval(() => {
    if (userInteracted) return;
    if (carousel.scrollLeft + scrollAmount >= maxScrollLeft - 5) {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, 3000);
}

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  pauseAutoScroll();
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  pauseAutoScroll();
});

startAutoScroll();