const displayComments = async () => {
  const commentId = document.querySelector('.movie-title').id;
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IR7MovTrVQtBQVyC6UTK/comments?item_id=${commentId}`;

  const commentsList = document.querySelector('.movie-comments');
  commentsList.innerHTML = ''; // Clear the previous content

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const commentsData = await response.json();
    const commentsCounter = document.querySelector('.comments-counter');
    commentsCounter.innerHTML = `<p>Comments (${commentsData.length})</p>`;
    console.log('comments fetched', commentsData);

    commentsData.forEach((comment) => {
      commentsList.innerHTML += `
        <li>
          <p class="date">${comment.creation_date}</p>
          <p class="user-name">${comment.username}:</p>
          <p class="user-comment">${comment.comment}</p>
        </li>`;
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

export default displayComments;
