import displayComments from './displayReserve.js';

const addReserve = () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IR7MovTrVQtBQVyC6UTK/reservations';
  const reservationForm = document.querySelector('.form-reserve');

  const postReserve = async (data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const okstatus = document.createElement('div');
        okstatus.setAttribute('id', 'message');
        okstatus.innerHTML = ` <p>Reservation Added</p>
        `;
        reservationForm.appendChild(okstatus);
        setTimeout(() => {
          document.getElementById('message').innerHTML = '';
        }, 3000);
      }

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      throw new Error('Network response was not ok', error);
    }
  };

  reservationForm.innerHTML = ` 
            <input class="reserveName" type="text" id="username" name="reservation name" placeholder="Your Name" required>
            <input class="startDate" type="date" name="" id= "start_date" placeholder="Start date" required>
            <input class="endDate" type="date" name="" id="end_date" placeholder="end date" required>
            <button type="submit" id="reserve-btn">Reserve</button>
`;

  reservationForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const MovieId = document.querySelector('.movie-title').id;
    const name = document.getElementById('username');
    const startDate = document.getElementById('start_date');
    const endDate = document.getElementById('end_date');

    const data = {
      item_id: MovieId,
      username: name.value,
      date_start: startDate.value,
      date_end: endDate.value,
    };

    reservationForm.reset();
    await postReserve(data);
    displayComments();
  });
};

export default addReserve;
