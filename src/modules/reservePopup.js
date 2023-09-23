import openReserveWindow from './openReserveWindow.js';

const handleReservePopup = async () => {
  const movieUrl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';

  const ReservePopup = document.querySelector('.reserve-popup');
  ReservePopup.style.display = 'none';
  const viewReservebtn = document.querySelectorAll('.view-reservation');

  try {
    const data = await (
      await fetch(movieUrl, {
        method: 'GET',
      })
    ).json();
    Array.from(viewReservebtn).forEach((element) => {
      element.addEventListener('click', () => {
        const reserveId = element.getAttribute('reserve-id');
        const movieObj = data.find((movie) => String(movie.id) === reserveId);

        openReserveWindow(movieObj);
      });
    });
  } catch (error) {
    // throw new Error('Network response was not ok', error);
  }
};
handleReservePopup();
export default handleReservePopup;
