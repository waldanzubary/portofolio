// // JavaScript for the image slider
// let slideIndex = 0;
// const slides = document.querySelectorAll('.slider img');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// // Function to show slides
// function showSlides() {
//     // Hide all slides
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     // Show the slide with the current slideIndex
//     slides[slideIndex].style.display = 'block';
// }

// // Function to move to the next slide
// function nextSlide() {
//     if (slideIndex < slides.length - 1) {
//         slideIndex++;
//     } else {
//         slideIndex = 0;
//     }
//     showSlides();
// }

// // Function to move to the previous slide
// function prevSlide() {
//     if (slideIndex > 0) {
//         slideIndex--;
//     } else {
//         slideIndex = slides.length - 1;
//     }
//     showSlides();
// }

// // Event listeners for next and previous buttons
// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);

// // Automatic slideshow
// setInterval(nextSlide, 3000); // Change slides every 3 seconds
