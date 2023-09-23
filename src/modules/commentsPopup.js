import openCommentWindow from './openCommentWindow.js';

const handleCommentPopup = async () => {
  const movieUrl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';

  const CommentsPopup = document.querySelector('.comments-popup');
  CommentsPopup.style.display = 'none';
  const viewcommentsbtn = document.querySelectorAll('.viewcomment');

  try {
    const data = await (
      await fetch(movieUrl, {
        method: 'GET',
      })
    ).json();
    Array.from(viewcommentsbtn).forEach((element) => {
      element.addEventListener('click', () => {
        const commentId = element.getAttribute('comment-id');
        const movieObj = data.find((movie) => String(movie.id) === commentId);
        openCommentWindow(movieObj);
      });
    });
  } catch (error) {
    throw new Error('Network response was not ok', error);
  }
};
handleCommentPopup();
export default handleCommentPopup;
