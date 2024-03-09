// Add your JavaScript code here -->
console.log('Bachelor Maid Services Script Loaded!');
// Navigation buttons -->
let currentSlide = 0;

  function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    const translateValue = -currentSlide * 100 + '%';
    slider.style.transform = `translateX(${translateValue})`;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Auto slide (optional) -->
  setInterval(nextSlide, 3000); // Change slide every 3 seconds

  function redirectToLink() {
    // Replace "your_link_url" with the actual URL you want to redirect to
    window.location.href = "";
  }