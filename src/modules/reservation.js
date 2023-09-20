const reservationMovies = async (Title, season, language, type, src) => {
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
            <li>Titel:${Title}</li>
            <li>Gener:${type}</li>
            <li>Season:${season}</li>
            <li>Language:${language}</li>
  
          </ul>
          <p class="reservation-count">Reservation(0)</p>
          <div class="add-reserve">
            <p>Add a reservation</p>
            <input type="text" name="reservation name" placeholder="Your Name">
            <input type="date" name="" placeholder="Start date">
            <input type="date" name="" placeholder="end date">
  
            <button type="submit" id="reserve-btn">Reserve</button>
          </div>
        </section>
        `;
  popup.appendChild(popupWindow);

  const closingIcons = document.querySelectorAll('.closing-icon');
  closingIcons.forEach((closingIcon) => {
    closingIcon.addEventListener('click', () => {
      popupWindow.style.display = 'none';
      // popup.classList.toggle('hidden');
    });
  });
};

export default reservationMovies;
