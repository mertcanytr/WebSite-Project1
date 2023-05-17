var movieIds = [11104, 147, 121986, 108, 1626];
var currentMovieIndex = 0;
var apiKey = 'cb84b00ddd848923d9eeb84ba0ea951b';

function fetchMoviePoster(movieId) {
  var apiUrl = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + apiKey;

  fetch(apiUrl)
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('API isteği başarısız.');
    })
    .then(function(movie) {
      var galleryImage = document.getElementById('gallery-api-image');
      var posterPath = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
      var altText = movie.title;

      galleryImage.src = posterPath;
      galleryImage.alt = altText;
    })
    .catch(function(error) {
      console.error(error);
    });
}

function showNextMovie() {
  currentMovieIndex++;
  if (currentMovieIndex >= movieIds.length) {
    currentMovieIndex = 0;
  }
  var movieId = movieIds[currentMovieIndex];
  fetchMoviePoster(movieId);
}

function showPreviousMovie() {
  currentMovieIndex--;
  if (currentMovieIndex < 0) {
    currentMovieIndex = movieIds.length - 1;
  }
  var movieId = movieIds[currentMovieIndex];
  fetchMoviePoster(movieId);
}

// İlk filmi göster
var initialMovieId = movieIds[currentMovieIndex];
fetchMoviePoster(initialMovieId);

// İleri ve geri butonlarına olay dinleyicileri ekle
window.onload = function() {
  var nextButton = document.querySelector('.next');
var prevButton = document.querySelector('.prev');
  nextButton.addEventListener('click', showNextMovie);
  prevButton.addEventListener('click', showPreviousMovie);
};

  // Slider için değişkenler
  var isbnList = ['9786257027038','9789750730108', '9786050929812','9789756381106','9789753420839','9780571244591']; // Kitapların ISBN numaralarını içeren liste
  var currentBookIndex = 0;
  
  function fetchBookCover(isbn) {
    var apiUrl = 'https://openlibrary.org/api/books?bibkeys=ISBN:' + isbn + '&jscmd=data&format=json';
  
    fetch(apiUrl)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error('API isteği başarısız.');
      })
      .then(function(data) {
        var bookInfo = data['ISBN:' + isbn];
        if (bookInfo && bookInfo.cover) {
          var coverURL = bookInfo.cover.large; // Büyük boyutta kapağın URL'sini alın
          var bookCover = document.getElementById('bookCover');
          bookCover.src = coverURL;
        }
      })
      .catch(function(error) {
        console.error('API isteği sırasında bir hata oluştu:', error);
      });
  }
  
  function showNextBook() {
    currentBookIndex++;
    if (currentBookIndex >= isbnList.length) {
      currentBookIndex = 0;
    }
    var isbn = isbnList[currentBookIndex];
    fetchBookCover(isbn);
  }
  
  function showPreviousBook() {
    currentBookIndex--;
    if (currentBookIndex < 0) {
      currentBookIndex = isbnList.length - 1;
    }
    var isbn = isbnList[currentBookIndex];
    fetchBookCover(isbn);
  }
  
  // İlk kitabı göster
  var initialISBN = isbnList[currentBookIndex];
  fetchBookCover(initialISBN);