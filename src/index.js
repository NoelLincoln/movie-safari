import './style.css';
import logo from './assets/img/movie-safari-logo.png';

const logoContainer = document.querySelector('.logo-container');
const imgTag = document.createElement('img');
imgTag.setAttribute('src', logo);
imgTag.classList.add('logo');
logoContainer.appendChild(imgTag);
