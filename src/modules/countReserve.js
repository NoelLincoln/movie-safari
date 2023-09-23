const countReserve = () => {
  const ReservationNodes = document.querySelectorAll('.user-name');
  const ReserveCounter = document.querySelector('.reserve-counter');

  ReservationNodes.forEach(() => {
    if (ReserveCounter.childNodes.length === 0) {
      ReserveCounter.innerHTML = '<p>reservation (0)</p>';
    } else {
      ReserveCounter.innerHTML = `<p>reservation (${ReservationNodes.length})</p>`;
    }
  });
};

export default countReserve;
