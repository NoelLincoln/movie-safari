import likeUrl from './from-api.js';

const domCheck = document.querySelector('.movies-counter');

const addLike = async (movieId = 'movieId', id) => {
  try {
    const response = await fetch(likeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movieId, id }),
    });
    console.log(response);
  } catch {
    throw new Error();
  }
};
const like = () => {
  const likeBtn = document.querySelectorAll('.heart-btn');
  likeBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
      const { id } = e.target.closest('.movie-container');
      addLike(parseInt(id, 10));

      //   console.log(typeof parseInt(id, 10));
    });
  });
};
export { domCheck, like };
