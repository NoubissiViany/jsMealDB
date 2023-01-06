import './styles/styles.css';

const appContainer = document.getElementById('app');
let mainContainer;

function createSearchBar(options) {
  const searchBar = document.createElement('form');
  searchBar.classList.add('search');
  searchBar.innerHTML = '<input type="search" name="searchTerm"><button>Search</button>';

  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    options.onSearch(e.target.searchTerm.value);
  });

  return searchBar;
}

function createHeader({ onSearch }) {
  const header = document.createElement('header');
  header.classList.add('hero');
  header.innerHTML = '<h1 class="title">The Meal DB Trial</h1>';
  header.appendChild(createSearchBar({ onSearch }));
  return header;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('body');
  return main;
}

function createMeals(meals) {
  const mealsElement = document.createElement('div');
  mealsElement.classList.add('meals');
  mealsElement.innerHTML = `<h2>${meals.strMeal}</h2>`;
  const img = `${meals.strMealThumb}`;
  mealsElement.style.backgroundImage = `url(${img})`;
  return mealsElement;
}

function renderPage({ onSearch }) {
  appContainer.innerHTML = '';
  appContainer.appendChild(createHeader({ onSearch }));
  mainContainer = createMain();
  appContainer.appendChild(mainContainer);
}

function renderMeals(meals) {
  mainContainer.innerHTML = '';
  meals.forEach((meal) => {
    mainContainer.appendChild(createMeals(meal));
  });
}

export default {
  renderPage,
  renderMeals,
};
