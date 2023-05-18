var currentSlideIndex = 0;
var slideElements = document.querySelectorAll('.me-slider .st');
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');


prevButton.addEventListener('click', function() {
  if (currentSlideIndex === 0) {
    
    currentSlideIndex = slideElements.length - 1;
  } else {
    
    currentSlideIndex--;
  }
  showSlide(currentSlideIndex);
});


nextButton.addEventListener('click', function() {
  if (currentSlideIndex === slideElements.length - 1) {
    
    currentSlideIndex = 0;
  } else {
    
    currentSlideIndex++;
  }
  showSlide(currentSlideIndex);
});

function showSlide(index) {
  
  slideElements.forEach(function(element) {
    element.classList.remove('active');
  });

  
  slideElements[index].classList.add('active');
}


showSlide(currentSlideIndex);
