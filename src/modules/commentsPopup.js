const openCommentWindow = (movie) => {
  const CommentsPopup = document.querySelector('.comments-popup');
  CommentsPopup.style.display = 'flex';

  CommentsPopup.innerHTML = `<div class="top">
                <img class="movie-image" src="${movie._embedded.show.image.medium}"></img>
                <div id="close-icon">X</div>
            </div>

            <h4 class="movie-title">${movie.name}</h4>
            <div class="movie-details">
                <p>Season : ${movie.season}</p>
                <p>Genre : ${movie._embedded.show.type}</p>
                <p>Release Date : ${movie.airdate}</p>
                <p>Language : ${movie._embedded.show.language}</p>
            </div>
            <h4>Comments</h4>
            <div class="movie-comments">
                <div class="date">12-01-2023</div>
                <div class="user">Alex</div>
                <div class="user-comment">awesome movie</div>
            </div>
            <form id="movie-comments" class="form-comments">
                <h4>Add Comment</h4>
                <input type="text" placeholder="your name" required/>
                <textarea maxlength="200" rows="4" cols="7" placeholder="Your insight"></textarea>
            </form>`;
  const CloseIcon = document.getElementById('close-icon');
  CloseIcon.addEventListener('click', () => {
    const MainContinerBlur = document.querySelector('.main-container');

    CommentsPopup.style.display = 'none';
    MainContinerBlur.classList.remove('blur');
  });
  const MainContinerBlur = document.querySelector('.main-container');

  MainContinerBlur.classList.add('blur');
};

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
    console.log(data);
    Array.from(viewcommentsbtn).forEach((element) => {
      element.addEventListener('click', () => {
        const commentId = element.getAttribute('comment-id');
        const movieObj = data.find(
          // eslint-disable-next-line comma-dangle
          (movie) => String(movie.id) === commentId
        );
        console.log(commentId);
        console.log(
          'All movie IDs:',
          data.map((movie) => movie.id)
        ); // Output all IDs

        console.log(movieObj);

        openCommentWindow(movieObj);
      });
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    throw new Error('Network response was not ok', error);
  }
};
handleCommentPopup();

export default handleCommentPopup;
