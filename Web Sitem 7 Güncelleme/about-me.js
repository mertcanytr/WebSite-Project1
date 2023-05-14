// // JavaScript kodu
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// const images = document.querySelectorAll('.gallery-container img');

// let currentIndex = 0;

// // Önceki resme geç
// prevButton.addEventListener('click', () => {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = images.length - 1;
//   }
//   updateCurrentImage();
// });

// // Sonraki resme geç
// nextButton.addEventListener('click', () => {
//   currentIndex++;
//   if (currentIndex >= images.length) {
//     currentIndex = 0;
//   }
//   updateCurrentImage();
// });

// // Mevcut resmi güncelle
// function updateCurrentImage() {
//   images.forEach((image, index) => {
//     if (index === currentIndex) {
//       image.classList.add('current-image');
//     } else {
//       image.classList.remove('current-image');
//     }
//   });
// }
