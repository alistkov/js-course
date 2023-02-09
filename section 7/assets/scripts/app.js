const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const showAddMovieModalButton = document.querySelector('header button');
const hideAddMovieModal = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = addMovieModal.querySelector('.btn--success');
const inputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const deleteMovie = (id) => {
  const movieIndex = movies.findIndex((movie) => movie.id === id);
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const movieEl = document.createElement('li');
  movieEl.classList.add('movie-element');
  movieEl.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}" />
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
  `;

  movieEl.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(movieEl);
};

const deleteMovieHandler = (id) => {

  deleteMovieModal.classList.add('visible');
  backdrop.classList.add('visible');
  // deleteMovieHandler(id);
};

const clearMovieInputs = () => {
  for (const input of inputs) {
    input.value = '';
  }
};

const showModalAndBackdrop = () => {
  addMovieModal.classList.add('visible');
  backdrop.classList.add('visible');
};

const hideModalAndBackdrop = () => {
  addMovieModal.classList.remove('visible');
  backdrop.classList.remove('visible');
  deleteMovieModal.classList.remove('visible');
  clearMovieInputs();
};

const addMovieHandler = () => {
  const titleValue = inputs[0].value;
  const imageUrlValue = inputs[1].value;
  const ratingValue = inputs[2].value;

  if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  hideModalAndBackdrop();
  clearMovieInputs();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};


showAddMovieModalButton.addEventListener('click', showModalAndBackdrop);
backdrop.addEventListener('click', hideModalAndBackdrop);
hideAddMovieModal.addEventListener('click', hideModalAndBackdrop);
confirmAddMovieButton.addEventListener('click', addMovieHandler)
