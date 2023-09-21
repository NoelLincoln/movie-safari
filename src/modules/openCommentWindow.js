import addComments from './addComments.js';

const openCommentWindow = (movie) => {
  const CommentsPopup = document.querySelector('.comments-popup');
  CommentsPopup.style.display = 'flex';

  CommentsPopup.innerHTML = `<div class="top">
                <div></div>
                <div id="close-icon">X</div>

            </div>
          <div class=image-container>
                <img class="movie-image" src="${movie._embedded.show.image.medium}"></img>

            </div>
            <h4 class="movie-title" id="${movie.id}">${movie.name}</h4>
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
               
            </form>`;
  const CloseIcon = document.getElementById('close-icon');
  CloseIcon.addEventListener('click', () => {
    const MainContinerBlur = document.querySelector('.main-container');

    CommentsPopup.style.display = 'none';
    MainContinerBlur.classList.remove('blur');
  });
  const MainContinerBlur = document.querySelector('.main-container');

  MainContinerBlur.classList.add('blur');
  addComments();
};
export default openCommentWindow;
