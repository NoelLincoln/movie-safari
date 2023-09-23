/**
 * @jest-environment jsdom
 */
import countReserve from '../src/modules/countReserve.js';

describe('countreservation', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="comments-counter"></div>
      <div class="user-comment">Comment 1</div>
      <div class="user-comment">Comment 2</div>
    `;
  });

  it('should update comments counter when there are comments', () => {
    countReserve();

    const reservationCounter = document.querySelector('.reservation-counter');
    expect(reservationCounter.innerHTML).toContain('Comments (2)');
  });

  it('should display "Comments (0)" when there are no comments', () => {
    const reservationNodes = document.querySelectorAll('.user-name');
    reservationNodes.forEach((node) => {
      node.parentNode.removeChild(node);
    });

    countReserve();

    const commentsCounter = document.querySelector('.comments-counter');
    expect(commentsCounter.innerHTML).toContain('');
  });
});