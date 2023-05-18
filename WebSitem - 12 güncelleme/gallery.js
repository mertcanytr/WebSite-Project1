document.addEventListener('DOMContentLoaded', function() {
    var galleryImages = document.querySelectorAll('.gallery-image');
  
    galleryImages.forEach(function(image) {
      image.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
      });
  
      image.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
      });
    });
  });