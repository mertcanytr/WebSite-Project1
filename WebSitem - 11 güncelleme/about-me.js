var currentSlideIndex = 0;
var slideElements = document.querySelectorAll('.me-slider .st');
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');

// Önceki düğmeye tıklama olayı
prevButton.addEventListener('click', function() {
  if (currentSlideIndex === 0) {
    // İlk slaytta ise son slayta geç
    currentSlideIndex = slideElements.length - 1;
  } else {
    // Diğer durumlarda bir önceki slayta geç
    currentSlideIndex--;
  }
  showSlide(currentSlideIndex);
});

// Sonraki düğmeye tıklama olayı
nextButton.addEventListener('click', function() {
  if (currentSlideIndex === slideElements.length - 1) {
    // Son slaytta ise ilk slayta geç
    currentSlideIndex = 0;
  } else {
    // Diğer durumlarda bir sonraki slayta geç
    currentSlideIndex++;
  }
  showSlide(currentSlideIndex);
});

function showSlide(index) {
  // Tüm slayt elementlerini gizle
  slideElements.forEach(function(element) {
    element.classList.remove('active');
  });

  // İstenen slaytı göster
  slideElements[index].classList.add('active');
}

// İlk slaytı göster
showSlide(currentSlideIndex);
