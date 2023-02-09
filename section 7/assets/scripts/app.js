const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const showAddMovieModalButton = document.querySelector('header button');

const showAddMovieModalAndBackdrop = () => {
  addMovieModal.classList.add('visible');
  backdrop.classList.add('visible');
};

showAddMovieModalButton.addEventListener('click', () => {
  showAddMovieModalAndBackdrop();
});
