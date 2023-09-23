import './style.css';
import logo from './assets/img/movie-safari-logo.png';
import movieCounter from './modules/movie-counter.js';// import addReservation from './modules/addReservation.js';
import fetchMovies from './modules/data.js';
import { domCheck, like } from './modules/movie-likes.js';

const logoContainer = document.querySelector('.logo-container');
const imgTag = document.createElement('img');
imgTag.setAttribute('src', logo);
imgTag.classList.add('logo');
logoContainer.appendChild(imgTag);

document.addEventListener('DOMContentLoaded', fetchMovies);

domCheck.addEventListener('DOMNodeInserted', () => {
  like();
  movieCounter();
});
