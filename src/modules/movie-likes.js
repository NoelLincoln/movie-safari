const domCheck = document.querySelector('.movies-counter');

const like = () => {
  const likeBtn = document.querySelectorAll('.heart-btn');
  likeBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
      const { id } = e.target.closest('.movie-container');
      console.log(id);
    });
  });
};
export { domCheck, like };
