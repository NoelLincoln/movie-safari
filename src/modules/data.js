const moviesList = document.querySelector('.movies-list');
const movieUrl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';
const fetchScores = async () => {
  try {
    const data = await (
      await fetch(movieUrl, {
        method: 'GET',
      })
    ).json();

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]._embedded.show.image.medium);
      const image = ` <li><img src="${data[i]._embedded.show.image.medium}" alt="" /></li>`;
      console.log(moviesList);
      console.log(image);
      moviesList.innerHTML += image;
    }

    // moviesList.innerHTML = data;
    // .map(
    //   (movie) =>
    //     ` <li><img src="${movie._embedded.show.image.medium}" alt="" /></li>`
    // )
    // .join('');
  } catch {
    throw new Error();
  }
};

document.addEventListener('DOMContentLoaded', fetchScores);
