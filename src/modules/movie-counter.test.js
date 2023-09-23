/**
 * @jest-environment jsdom
 */
import movieCounter from './movie-counter.js';

document.body.innerHTML = `
  <div class="movie-container"></div>
  <div class="movie-container"></div>
  <div class="movies-count"></div>
`;

test('movieCounter updates the movies count correctly', () => {
  movieCounter();

  const moviesNumber = document.querySelector('.movies-count');
  expect(moviesNumber.innerText).toBe('(2)');
});
