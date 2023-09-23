const countComments = () => {
  const CommentNodes = document.querySelectorAll('.user-comment');
  const commentsCounter = document.querySelector('.comments-counter');

  CommentNodes.forEach(() => {
    if (commentsCounter.childNodes.length === 0) {
      commentsCounter.innerHTML = '<p>Comments (0)</p>';
    } else {
      commentsCounter.innerHTML = `<p>Comments (${CommentNodes.length})</p>`;
    }
  });
};

export default countComments;
