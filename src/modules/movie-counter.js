const movieCounter = () => {
  const movies = document.querySelectorAll('.movie-container');
  const moviesNumber = document.querySelector('.movies-count');
  moviesNumber.innerText = `(${movies.length})`;
};

export default movieCounter;
