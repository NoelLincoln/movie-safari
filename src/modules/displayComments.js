import countComments from './countComments.js';

const displayComments = async () => {
  const commentId = document.querySelector('.movie-title').id;
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IR7MovTrVQtBQVyC6UTK/comments?item_id=${commentId}`;

  const commentsList = document.querySelector('.movie-comments');
  // commentsList.innerHTML = '';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // const commentsCounter = document.querySelector('.comments-counter');

    // if (response.error === 400) {
    //   commentsCounter.innerHTML = '<p>Comments (0)</p>';
    // }

    const commentsData = await response.json();

    commentsData.forEach((comment) => {
      commentsList.innerHTML += `
        <li>
          <p class="date">${comment.creation_date}</p>
          <p class="user-name">${comment.username}:</p>
          <p class="user-comment">${comment.comment}</p>
        </li>`;
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching comments:', error);
  }
  countComments();
};

export default displayComments;
