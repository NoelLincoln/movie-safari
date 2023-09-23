import './style.css';
import logo from './assets/img/movie-safari-logo.png';
import fetchMovies from './modules/data.js';

const logoContainer = document.querySelector('.logo-container');
const imgTag = document.createElement('img');
imgTag.setAttribute('src', logo);
imgTag.classList.add('logo');
logoContainer.appendChild(imgTag);

document.addEventListener('DOMContentLoaded', fetchMovies);
