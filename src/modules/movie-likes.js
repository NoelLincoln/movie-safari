import { likeUrl } from './from-api.js';

const domCheck = document.querySelector('.movies-counter');
const addLike = async (item_id = 'item_id', id) => {
  try {
    await fetch(likeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id, id }),
    });
  } catch {
    throw new Error();
  }
};

const fetchLikes = async () => {
  try {
    const data = await (
      await fetch(likeUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
    return data;
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
    });
  });
};

export { domCheck, like, fetchLikes };
