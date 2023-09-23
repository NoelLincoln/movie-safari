/* eslint-disable no-underscore-dangle */
// import displayComments from './displayComments.js';

import openCommentWindow from './openCommentWindow.js';

const handleCommentPopup = async () => {
  const movieUrl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';

  const CommentsPopup = document.querySelector('.comments-popup');
  CommentsPopup.style.display = 'none';
  const viewcommentsbtn = document.querySelectorAll('.viewcomment');
  console.log(viewcommentsbtn);

  try {
    const data = await (
      await fetch(movieUrl, {
        method: 'GET',
      })
    ).json();
    Array.from(viewcommentsbtn).forEach((element) => {
      element.addEventListener('click', () => {
        const commentId = element.getAttribute('comment-id');
        const movieObj = data.find(
          // eslint-disable-next-line comma-dangle
          (movie) => String(movie.id) === commentId
        );

        openCommentWindow(movieObj);
      });
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    throw new Error('Network response was not ok', error);
  }
};
handleCommentPopup();
// displayComments;

export default handleCommentPopup;
