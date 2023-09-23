import heartIcon from '../assets/img/heart-icon.png';
import { fetchLikes, like } from './movie-likes.js';
import { movieUrl } from './from-api.js';
import handleCommentPopup from './commentsPopup.js';
import handleReservePopup from './reservePopup.js';
import movieCounter from './movie-counter.js';

const moviesList = document.querySelector('.movies-list');

const likesCheck = (movieId, node) => {
  fetchLikes().then((data) => {
    try {
      const movieLikes = data.filter((movie) => movie.item_id === movieId);
      if (typeof movieLikes[0] === 'undefined') {
        node.innerText = `${0} Likes`;
      } else {
        node.innerText = `${movieLikes[0].likes} Likes`;
      }
    } catch {
      // throw new Error();
    }
  });
};

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
      likesCounter.classList.add('likes-counter');
      likesCheck(data[i].id, likesCounter);
      likesCounter.classList.add('likes-counter');
      likesCheck(data[i].id, likesCounter);
      heartBtn.appendChild(heartImg);
      heartBtn.classList.add('heart-btn');
      likesContainer.appendChild(heartBtn);
      likesContainer.appendChild(likesCounter);

      reservationBtn.innerText = 'reservation';
      reservationBtn.setAttribute('reserve-id', `${data[i].id}`);
      reservationBtn.classList.add('view-reservation');
      commentsBtn.innerText = 'Comments';
      commentsBtn.classList.add('btn-class');
      commentsBtn.classList.add('viewcomment');
      commentsBtn.setAttribute('comment-id', `${data[i].id}`);

      reservationBtn.classList.add('btn-class');
      firstRow.appendChild(nameP);
      firstRow.appendChild(likesContainer);
      firstRow.classList.add('display-flex-row', 'first-row-display');

      movieOptions.appendChild(firstRow);
      movieOptions.appendChild(commentsBtn);
      movieOptions.appendChild(reservationBtn);
      movieOptions.classList.add('display-flex-column');
      const { _embedded } = data[i];
      const imagePath = _embedded.show.image.medium;
      movieImg.setAttribute('src', `${imagePath}`);
      movieItem.appendChild(movieImg);
      movieItem.appendChild(movieOptions);
      movieItem.classList.add('display-center', 'movie-container');
      movieItem.classList.add('display-center', 'movie-container');
      movieItem.setAttribute('id', `${data[i].id}`);
      moviesList.appendChild(movieItem);
    }
  } catch {
    // throw new Error();
  }
  handleCommentPopup();
  handleReservePopup();
  like();
  movieCounter();
};

export default fetchMovies;
