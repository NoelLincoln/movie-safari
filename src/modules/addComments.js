const addComments = () => {
  const url =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IR7MovTrVQtBQVyC6UTK/comments';
  const CommentsForm = document.querySelector('.form-comments');

  const postComment = async (data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const okstatus = document.createElement('div');
        okstatus.setAttribute('id', 'message');
        okstatus.innerHTML = ` <p>Comment Added</p>
        `;
        CommentsForm.appendChild(okstatus);
        setTimeout(() => {
          document.getElementById('message').innerHTML = '';
        }, 3000);
      }

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      throw new Error('Network response was not ok', error);
    }
  };

  CommentsForm.innerHTML = ` <h4>Add Comment</h4>
                <input type="text" placeholder="your name" name="username" id="username" required/>
                <textarea maxlength="200" rows="4" cols="7" placeholder="Your insight" name="comment" id="comment"></textarea>
                <button type="submit">Submit</button>
`;

  CommentsForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const MovieId = document.querySelector('.movie-title').id;

    const UsernameInput = document.getElementById('username');
    const Comment = document.getElementById('comment');

    const data = {
      item_id: MovieId,
      username: UsernameInput.value,
      comment: Comment.value,
    };

    CommentsForm.reset();
    await postComment(data);
    // displayComments();
  });
};

export default addComments;
