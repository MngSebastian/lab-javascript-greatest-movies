/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let sortedArr = arr.slice().sort(function(a, b) {
    if (a["year"] === b["year"]) {
      return a["title"].localeCompare(b["title"]);
    }

    return a["year"] - b["year"];
  });

  return sortedArr;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  const filtered = movies.filter(function(movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    }
  });

  return filtered.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const onlyTitles = movies.map(function(movie) {
    return movie.title;
  });
  const sortedAbc = onlyTitles.sort(function(a, b) {
    return a.localeCompare(b);
  });
  const first20 = sortedAbc.slice(0, 20);
  return first20;
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  const totalRatings = movies.reduce(function(accumulator, currentMovie) {
    if (!currentMovie.rate) {
      return 0 + accumulator;
    }
    return currentMovie.rate + accumulator;
  }, 0);

  const avg = totalRatings / movies.length;
  //   return Math.round(avg * 100) / 100;

  const rounded = avg.toFixed(2);
  return parseFloat(rounded);
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(function(movie) {
    if (movie.genre.indexOf("Drama") !== -1) {
      return true;
    }
  });
  const avg = ratesAverage(dramaMovies);
  return avg;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function convertStrToMinutes(str) {
  // input str can be in these formats:
  // "2h 22min" | "2h" | "45min"
  const splitted = str.split(" ");

  let minConversion;

  if (splitted.length === 2) {
    // "2h 22min"
    let hours = parseInt(splitted[0]);
    let minutes = parseInt(splitted[1]);
    minConversion = hours * 60 + minutes;
  } else if (splitted[0].indexOf("h") !== -1) {
    // "2h"
    let hours = parseInt(splitted[0]);
    minConversion = hours * 60;
  } else if (splitted[0].indexOf("min") !== -1) {
    // "45min"
    let minutes = parseInt(splitted[0]);
    minConversion = minutes;
  }

  return minConversion;
}

function turnHoursToMinutes(movies) {
  return movies.map(function(movie) {
    const durationInMinutes = convertStrToMinutes(movie.duration);

    // return Object.assign({}, movie, { duration: durationInMinutes });

    // return { ...movie, duration: durationInMinutes };

    const newObj = {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      genre: movie.genre,
      rate: movie.rate,
      duration: durationInMinutes //
    };

    return newObj;

    // movie.duration = durationInMinutes; //
    // return movie;
  });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg() {}
