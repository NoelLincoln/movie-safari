
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
    
        // if (response.ok) {
        //   startDateInput.value = '';
        //   endDateInput.value = '';
        //   reserveNameInput.value = '';
        // } else {
        //   throw new Error('Error submitting score');
        // }
      } catch (error) {
        /* eslint-disable no-console */
        console.error('Error submitting score:', error);
      }
    }
   
  
   

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
}


export default addReservation;