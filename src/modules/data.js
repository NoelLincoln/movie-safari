import heartIcon from '../assets/img/heart-icon.png';

const moviesList = document.querySelector('.movies-list');
const movieUrl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';

const fetchMovies = async () => {
  try {
    const data = await (
      await fetch(movieUrl, {
        method: 'GET',
      })
    ).json();

    for (let i = 0; i < data.length; i += 1) {
      const movieOptions = document.createElement('div');
      const firstRow = document.createElement('div');
      const nameP = document.createElement('p');
      const commentsBtn = document.createElement('button');
      const heartBtn = document.createElement('button');
      const heartImg = document.createElement('img');
      const movieImg = document.createElement('img');
      const reservationBtn = document.createElement('button');
      const likesCounter = document.createElement('p');
      const likesContainer = document.createElement('div');
      const movieItem = document.createElement('li');

      nameP.innerText = `${data[i].name}`;
      heartImg.setAttribute('src', heartIcon);
      likesCounter.innerText = '2 Likes';
      heartBtn.appendChild(heartImg);
      heartBtn.classList.add('heart-btn');
      likesContainer.appendChild(heartBtn);
      likesContainer.appendChild(likesCounter);

      commentsBtn.innerText = 'comments';
      reservationBtn.innerText = 'reservation';
      commentsBtn.classList.add('btn-class');
      reservationBtn.classList.add('btn-class');
      firstRow.appendChild(nameP);
      firstRow.appendChild(likesContainer);
      firstRow.classList.add('display-flex-row', 'first-row-display');

      movieOptions.appendChild(firstRow);
      movieOptions.appendChild(commentsBtn);
      movieOptions.appendChild(reservationBtn);
      movieOptions.classList.add('display-flex-column');

      // eslint-disable-next-line no-underscore-dangle
      movieImg.setAttribute('src', `${data[i]._embedded.show.image.medium}`);

      movieItem.appendChild(movieImg);
      movieItem.appendChild(movieOptions);
      movieItem.classList.add('display-center');
      movieItem.setAttribute('id', `${data[i].id}`);
      moviesList.appendChild(movieItem);
      reservationBtn.addEventListener('click', () => {
        reservationMovies(data[i].name,data[i].seasone,data[i].language, data[i].type,data[i]._embedded.show.image.medium);
        
         })
    }
  } catch {
    // throw new Error();
  }
};
const reservationMovies = async (Title,seasone,language,type,src) => {
  const popup=document.querySelector('.reservation-popup');
      const popupWindow = document.createElement('div');
      popupWindow.className = 'popup-window';
console.log('popupWindow');
      popupWindow.innerHTML = `
      <section class="popup">
        <div>
          <i class="closing-icon"></i>
          <image class="popup-image" src="${src}">
        </div>
        <ul>
          <li>${Title}</li>
          <li>${type}</li>
          <li>${seasone}</li>
          <li>${language}</li>

        </ul>
        <div>
          <p>Add a reservation</p>
          <input type="text" name="reservation name" placeholder="Your Name">
          <input type="number" name="" placeholder="Start date">
          <button type="submit" id="reserve-btn">Reserve</button>
        </div>
      </section>
      `;

      popup.appendChild(popupWindow);
    };
  


export default fetchMovies;
