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
