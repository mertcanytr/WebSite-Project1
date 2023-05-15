// İçeriği DOM'un yüklendiği zaman çalıştır
document.addEventListener('DOMContentLoaded', function() {
    // Tüm galeri resimlerini seç
    var galleryImages = document.querySelectorAll('.gallery-image');
  
    // Her resim için olay dinleyicisi ekle
    galleryImages.forEach(function(image) {
      // Fare üzerine gelindiğinde resmi büyüt
      image.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
      });
  
      // Fare resmin üzerinden çekildiğinde resmi küçült
      image.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
      });
    });
  });