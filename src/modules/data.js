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

      movieImg.setAttribute('src', `${data[i]._embedded.show.image.medium}`);

      movieItem.appendChild(movieImg);
      movieItem.appendChild(movieOptions);
      movieItem.classList.add('display-center');
      movieItem.setAttribute('id', `${data[i].id}`);
      moviesList.appendChild(movieItem);
    }

    // moviesList.innerHTML = data;
    // .map(
    //   (movie) =>
    //     ` <li><img src="${movie._embedded.show.image.medium}" alt="" /></li>`
    // )
    // .join('');
  } catch {
    // throw new Error();
  }
};

export default fetchMovies;
