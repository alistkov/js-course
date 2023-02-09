const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const showAddMovieModalButton = document.querySelector('header button');
const hideAddMovieModal = addMovieModal.querySelector('.btn--passive');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
}


showAddMovieModalButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
hideAddMovieModal.addEventListener('click', toggleMovieModal);
