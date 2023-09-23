/* eslint-disable no-underscore-dangle */
import addReserve from './addReserve.js';
import displayReserve from './displayReserve.js';
import Close from '../assets/img/Close-icon.png';

const openReserveWindow = (movie) => {
  const ReservePopup = document.querySelector('.reserve-popup');
  ReservePopup.style.display = 'flex';

  ReservePopup.innerHTML = `<div class="top">
                <div></div>
                <div id="close-icon"></div>

            </div>
          <div class=image-container>
                <img class="movie-image" src="${movie._embedded.show.image.medium}"></img>

            </div>
            <h4 class="movie-title" id="${movie.id}">${movie.name}</h4>
            <div class="movie-details">
                <p>Season : ${movie.season}</p>
                <p>Genre : ${movie._embedded.show.type}</p>
                <p>Release Date : ${movie.airdate}</p>
                <p>Language : ${movie._embedded.show.language}</p>
            </div>
            <h4 class="reserve-counter">Reservations (0)</h4>
            <ul class="movie-reservation">
                
                
            </ul>
            <h4>Add Reservation</h4>
            <form id="reserve-form" class="form-reserve">
               
            </form>`;
  const CloseIcon = document.getElementById('close-icon');
  const CloseIconImg = document.createElement('img');
  CloseIconImg.src = Close;
  CloseIconImg.classList.add('close-icon');
  CloseIcon.appendChild(CloseIconImg);
  CloseIcon.addEventListener('click', () => {
    const MainContinerBlur = document.querySelector('.main-container');

    ReservePopup.style.display = 'none';
    MainContinerBlur.classList.remove('blur');
  });
  const MainContinerBlur = document.querySelector('.main-container');

  MainContinerBlur.classList.add('blur');
  addReserve();
  displayReserve();
};
export default openReserveWindow;