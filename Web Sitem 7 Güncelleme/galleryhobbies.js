var galleryImages = document.querySelectorAll('.gallery .gallery-image');
var blurBackground = document.querySelector('.gallery .blur-background');
var expandedImage = document.querySelector('.gallery .expanded-image');
var prevButton = document.querySelector('.gallery .navigation .prev');
var nextButton = document.querySelector('.gallery .navigation .next');
var currentIndex = 0;

// Resimlere tıklama olayını yakalayın
galleryImages.forEach(function(img, index) {
  img.addEventListener('click', function() {
    showExpandedImage(index);
  });
});

// Önceki ve sonraki düğmelere tıklama olayını yakalayın
prevButton.addEventListener('click', function() {
  showPreviousImage();
});

nextButton.addEventListener('click', function() {
  showNextImage();
});

// Genişletilmiş resmi göstermek için işlev
function showExpandedImage(index) {
  currentIndex = index;

  // Blur arka planı görünür yap
  blurBackground.style.display = 'block';

  // Tıklanan resmi ortada büyütüp göster
  expandedImage.src = galleryImages[index].src;
  expandedImage.style.display = 'block';
}

// Önceki resmi göstermek için işlev
function showPreviousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = galleryImages.length - 1;
  }
  expandedImage.src = galleryImages[currentIndex].src;
}

// Sonraki resmi göstermek için işlev
function showNextImage() {
  currentIndex++;
  if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }
  expandedImage.src = galleryImages[currentIndex].src;
}

// Resim dışına tıklandığında eski görünüme dön
blurBackground.addEventListener('click', function(event) {
  if (event.target === blurBackground) {
    expandedImage.style.display = 'none';
    blurBackground.style.display = 'none';
  }
});
