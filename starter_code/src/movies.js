/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  var moviesCopy = movies.map(function(movie) {
    var total = 0;
    if (typeof movie.duration === "number") {
      total = movie.duration;
    } else {
      var time = movie.duration.split(" ");
      var hour = 0;
      var min = 0;
      time.forEach(function(data) {
        if (data.indexOf("h") > -1) {
          hour = parseInt(data) * 60;
        } else {
          min = parseInt(data);
        }
      });
      total = hour + min;
    }
    var newMovies = Object.assign({}, movie, { duration: total });
    return newMovies;
  });
  return moviesCopy;
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var totalRate = movies.reduce(function(total, movie) {
    if (movie.rate == "") {
      return total;
    }
    return total + parseFloat(movie.rate);
  }, 0);
  return Math.round((totalRate / movies.length) * 100) / 100;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var movieDrama = movies.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
  if (movieDrama.length === 0) {
    return undefined;
  }
  return ratesAverage(movieDrama);
}

// console.log(dramaMoviesRate([{ genre: ['Drama'], rate: 8 }, { genre: ['Drama'], rate: '' }]))

// Order by time duration, in growing order
function orderByDuration(movies) {
  return movies.sort(function(movie1, movie2) {
    if (movie1.duration == movie2.duration) {
      return movie1.title > movie2.title ? 1 : -1;
    } else {
      return movie1.duration - movie2.duration;
    }
  });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies
    .map(function(movie) {
      return movie.title;
    })
    .sort()
    .splice(0, 20);
}

orderAlphabetically(movies);
// Best yearly rate average
