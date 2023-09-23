import countReserve from './countReserve.js';

const displayReserve = async () => {
  const reserveId = document.querySelector('.movie-title').id;
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IR7MovTrVQtBQVyC6UTK/reservations?item_id=${reserveId}`;

  const reservationList = document.querySelector('.movie-reservation');
  reservationList.innerHTML = '';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const reservationData = await response.json();

    reservationData.forEach((reserve) => {
      reservationList.innerHTML += `
        <li class="reservation-list">
          <p class="date">${reserve.date_start}</p>
          <p>-</p>
          <p class="date">${reserve.date_end}</p>
          <p>by:</p>
          <p class="user-name">${reserve.username}</p>


        </li>`;
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching comments:', error);
  }
  countReserve();
};

export default displayReserve;
