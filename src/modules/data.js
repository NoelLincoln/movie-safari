/* eslint-disable no-underscore-dangle */
import heartIcon from '../assets/img/heart-icon.png';
import { domCheck, fetchLikes } from './movie-likes.js';
import { movieUrl } from './from-api.js';
import handleCommentPopup from './commentsPopup.js';

const moviesList = document.querySelector('.movies-list');
let counter = 0;

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
      heartBtn.appendChild(heartImg);
      heartBtn.classList.add('heart-btn');
      likesContainer.appendChild(heartBtn);
      likesContainer.appendChild(likesCounter);

      commentsBtn.innerText = 'comments';
      commentsBtn.setAttribute('comment-id', `${data[i].id}`);
      commentsBtn.classList.add('viewcomment');
      // commentsBtn.id(`${data[i].id}`);
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
      movieItem.classList.add('display-center', 'movie-container');
      movieItem.setAttribute('id', `${data[i].id}`);
      moviesList.appendChild(movieItem);
      counter += 1;
    }
  } catch {
    // throw new Error();
  }
  handleCommentPopup();
  domCheck.innerText = `${counter} Movies`;
};

export default fetchMovies;
