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
      const reservationBtn = document.createElement('button');
      const likesCounter = document.createElement('p');
      const likesContainer = document.createElement('div');

      nameP.innerText = `${data[i].name}`;
      heartImg.setAttribute('src', heartIcon);
      likesCounter.innerText = '2';
      heartBtn.appendChild(heartImg);
      likesContainer.appendChild(heartBtn, likesCounter);

      commentsBtn.setAttribute('content', 'comments');
      reservationBtn.setAttribute('content', 'reservation');
      firstRow.appendChild(nameP);
      firstRow.appendChild(likesContainer);

      movieOptions.appendChild(firstRow);
      movieOptions.appendChild(commentsBtn);
      movieOptions.appendChild(reservationBtn);

      //   console.log(data[i]._embedded.show.image.medium);
      const image = ` <li><img src="${data[i]._embedded.show.image.medium}" alt="" /></li>`;
      image.appendChild(movieOptions);
      console.log(movieOptions);
      console.log(image);
      moviesList.innerHTML += image;
      //   moviesList.innerHTML(movieOptions);
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
