import { getSelectedGenre } from "./helpers";

const tmdbKey = process.env.TMDB_API_KEY;
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + tmdbKey,
  },
};

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint;

  try {
    const response = await fetch(urlToFetch, options);

    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (err) {
    console.log(err);
  }
};

const getMovies = async () => {
  const discoverMovieEndpoint = "/discover/movie";
  const selectedGenre = getSelectedGenre();
  const requestParams = "?with_genres=" + selectedGenre;

  const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint;

  try {
    const response = await fetch(urlToFetch, options);

    if (response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      return movies;
    }
  } catch (err) {
    console.log(err);
  }
};

const getMovieInfo = async (movieId) => {
  const movieEndpoint = `/movie/${movieId}`;
  const urlToFetch = tmdbBaseUrl + movieEndpoint;
  try {
    const response = await fetch(urlToFetch, options);

    if (response.ok) {
      const movieInfo = await response.json();
      return movieInfo;
    }
  } catch (err) {
    console.log(err);
  }
};

export { getGenres, getMovieInfo, getMovies };
