import { populateGenreDropdown, showRandomMovie } from "./helpers";
import { getGenres } from "./api";
import { trimMovieDescription } from "./movieComponents";

document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playBtn");

  // Gets a list of movies and ultimately displays the info of a random movie from the list
  getGenres().then(populateGenreDropdown);
  playBtn.onclick = showRandomMovie;
});

window.addEventListener('resize', function() {
    trimMovieDescription
});