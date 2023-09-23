import addComments from './addComments.js';
import displayComments from './displayComments.js';
import Close from '../assets/img/Close-icon.png';
import { showTypePath, imagePath, showLanguagePath } from './path.js';

const openCommentWindow = (movie) => {
  const CommentsPopup = document.querySelector('.comments-popup');
  CommentsPopup.style.display = 'flex';

  CommentsPopup.innerHTML = `<div class="top">
                <div></div>
                <div id="close-icon"></div>

            </div>
          <div class=image-container>
                <img class="movie-image" src="${[movie][imagePath]}"></img>
            </div>
            <h4 class="movie-title" id="${movie.id}">${movie.name}</h4>
            <div class="movie-details">
                <p>Season : ${[movie][showTypePath]}</p>
                <p>Genre : ${[movie][showTypePath]}</p>
                <p>Release Date : ${movie.airdate}</p>
                <p>Language : ${[movie][showLanguagePath]}</p>
            </div>
            <h4 class="comments-counter">Comments(0)</h4>
            <ul class="movie-comments">
                
                
            </ul>
            <h4>Add Comment</h4>
            <form id="movie-comments" class="form-comments">
               
            </form>`;
  const CloseIcon = document.getElementById('close-icon');
  const CloseIconImg = document.createElement('img');
  CloseIconImg.src = Close;
  CloseIconImg.classList.add('close-icon');
  CloseIcon.appendChild(CloseIconImg);
  CloseIcon.addEventListener('click', () => {
    const MainContinerBlur = document.querySelector('.main-container');

    CommentsPopup.style.display = 'none';
    MainContinerBlur.classList.remove('blur');
  });
  const MainContinerBlur = document.querySelector('.main-container');

  MainContinerBlur.classList.add('blur');
  addComments();
  displayComments();
};
export default openCommentWindow;
