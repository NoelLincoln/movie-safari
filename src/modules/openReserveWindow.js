import addReserve from './addReserve.js';
import displayReserve from './displayReserve.js';
import Close from '../assets/img/Close-icon.png';
import { imagePath, showTypePath, showLanguagePath } from './path.js';

const openReserveWindow = (movie) => {
  const ReservePopup = document.querySelector('.reserve-popup');
  ReservePopup.style.display = 'flex';

  ReservePopup.innerHTML = `<div class="top">
                <div></div>
                <div id="close-icon"></div>

            </div>
          <div class=image-container>
                <img class="movie-image" src="${[movie][imagePath]}"></img>

            </div>
            <h4 class="movie-title" id="${movie.id}">${movie.name}</h4>
            <div class="movie-details">
                <p>Season : ${movie.season}</p>
                <p>Genre : ${[movie][showTypePath]}</p>
                <p>Release Date : ${movie.airdate}</p>
                <p>Language : ${[movie][showLanguagePath]}</p>
            </div>
            <h4 class="reserve-counter">reservations (0)</h4>
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
