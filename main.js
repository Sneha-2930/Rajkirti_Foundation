// ========== SLIDER ==========
let currentSlide = 0;
const totalSlides = 3;

function updateSlider() {
  document.getElementById('aboutSlider').style.transform =
    `translateX(-${currentSlide * 100}%)`;

  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.style.opacity   = i === currentSlide ? '1'      : '0.5';
    dot.style.transform = i === currentSlide ? 'scale(1.3)' : 'scale(1)';
  });
}

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

// Auto-slide every 4 seconds
setInterval(() => moveSlide(1), 4000);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateSlider();
});


// ========== DONATE PROJECT SELECTOR ==========
function selectProject(card) {
  document.querySelectorAll('.project-option').forEach(c => {
    c.style.borderColor      = 'transparent';
    c.style.backgroundColor  = '#f9fafb';
  });
  card.style.borderColor     = '#347928';
  card.style.backgroundColor = '#f0f7ee';
}