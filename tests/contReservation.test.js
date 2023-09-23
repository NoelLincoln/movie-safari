/**
 * @jest-environment jsdom
 */
import countReserve from '../src/modules/countReserve.js';

describe('countreservation', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="reserve-counter"></div>
      <div class="user-name">reservation 1</div>
      <div class="user-name">reservation 2</div>
    `;
  });

  it('should update reservation counter when there are reservations', () => {
    countReserve();

    const reservationCounter = document.querySelector('.reserve-counter');
    expect(reservationCounter.innerHTML).toContain('<p>reservation (2)</p>');
  });

  it('should display "reservation (0)" when there are no reservations', () => {
    const reservationNodes = document.querySelectorAll('.user-name');
    reservationNodes.forEach((node) => {
      node.parentNode.removeChild(node);
    });

    countReserve();

    const reservationCounter = document.querySelector('.reserve-counter');
    expect(reservationCounter.innerHTML).toContain('');
  });
});
