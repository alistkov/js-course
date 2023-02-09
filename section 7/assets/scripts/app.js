const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const showAddMovieModalButton = document.querySelector('header button');
const hideAddMovieModal = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = addMovieModal.querySelector('.btn--success');
const inputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
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

  const listRoot = document.getElementById('movie-list');
  listRoot.append(movieEl);
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
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  hideModalAndBackdrop();
  clearMovieInputs();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};


showAddMovieModalButton.addEventListener('click', showModalAndBackdrop);
backdrop.addEventListener('click', hideModalAndBackdrop);
hideAddMovieModal.addEventListener('click', hideModalAndBackdrop);
confirmAddMovieButton.addEventListener('click', addMovieHandler)
