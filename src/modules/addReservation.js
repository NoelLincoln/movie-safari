
const addReservation =  () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IR7MovTrVQtBQVyC6UTK/reservations';
  
    const postReservation=  async (data ) =>{
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
  
          body: JSON.stringify(data),
        });
    
        if (response.ok) {
          // startDateInput.value = '';
          // endDateInput.value = '';
          // reserveNameInput.value = '';
          displayReservation(data);
          saveReservation(data);
        } else {
          throw new Error('Error submitting score');
        }

      } catch (error) {
        /* eslint-disable no-console */
        console.error('Error submitting score:', error);
      }
    }
   
    const displayReservation = (reservation) =>{
      const container= document.getElementById('reserve-container');
      const containerElement= document.createElement('div');
      containerElement.innerHTML= `
      <P>${reservation.date_start}-${reservation.date_end} by ${reservation.username}</P>
      `;
    container.appendChild(containerElement);
    }
    const saveReservation = (reservation) => {
      let reservations = localStorage.getItem('reservations');
      if (reservations) {
        reservations = JSON.parse(reservations);
        reservations.push(reservation);
      } else {
        reservations = [reservation];
      }
      localStorage.setItem('reservations', JSON.stringify(reservations));
    };
    const loadReservations = () => {
      const reservations = localStorage.getItem('reservations');
      if (reservations) {
        const parsedReservations = JSON.parse(reservations);
        parsedReservations.forEach((reservation) => {
          displayReservation(reservation);
        });
      }
    };
    const reservationForm = document.getElementById('reserve-form');
reservationForm.innerHTML=`
<input class="reserveName" type="text" name="reservation name" placeholder="Your Name">
<input class="startDate" type="date" name="" placeholder="Start date">
<input class="endDate" type="date" name="" placeholder="end date">
<button type="submit" id="reserve-btn">Reserve</button>
`;
reservationForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const reserveNameInput = document.querySelector('.reserveName');
  const startDateInput = document.querySelector('.startDate'); 
  const endDateInput = document.querySelector('.endDate');
  const movieId= document.querySelector('.movie-title').id;
  const data = {
    item_id:movieId,
    username: reserveNameInput.value,
    date_start: startDateInput.value,
        date_end: endDateInput.value
  };
  event.preventDefault();
  reservationForm.reset();
  console.log(data);

  await postReservation(data);
});
loadReservations();
}


export default addReservation;