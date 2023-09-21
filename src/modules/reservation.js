import addReservation from "./addReservation.js";

const reservationMovies = async (Title,id, season, language, type,src) => {
  const popup = document.querySelector('.reservation-popup');
  const popupWindow = document.createElement('div');
  popupWindow.className = 'popup-window';
  popupWindow.innerHTML = `
        <section class="popup">
        <i class="fas fa-times closing-icon"></i>

          <div>
          
         <image class="popup-image" src="${src}">
          </div>
          <ul class="about-img">
            <li class="movie-title" id="${id}">Title:${Title}</li>
            <li>Gener:${type}</li>
            <li>Season:${season}</li>
            <li>Language:${language}</li>
  
          </ul>
          <p class="reservation-count">Reservation(0)</p>
            <p>Add a reservation</p>
            <div class="reserve-container"></div>
            <form id="reserve-form">
           
            </form>
           
          </div>
        </section>
        `;
  popup.appendChild(popupWindow);

  const closingIcons = document.querySelectorAll('.closing-icon');
  closingIcons.forEach((closingIcon) => {
    closingIcon.addEventListener('click', () => {
      popupWindow.style.display = 'none';
    });
  });
  // const reserveBtn= document.getElementById('reserve-btn');    
  // reserveBtn.addEventListener('click', addReservation);

  addReservation();
 
};
  

export default reservationMovies;
