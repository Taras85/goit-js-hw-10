import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '30%',
  position: 'center-center',
  fontSize: '16px',
  timeout: 2000,
  backOverlay: true,
  messageMaxLength: 150,
});

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryCard = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(countrySearch, DEBOUNCE_DELAY));

let country = [];
let card = '';

function countrySearch() {
  const country = searchBox.value.trim();
  if (country.length === 0) {
    countryCard.innerHTML = '';
    countryList.innerHTML = '';
    return;
  }
  fetchCountries(country)
    .then(countryes => {
      countryList.innerHTML = '';
      countryCard.innerHTML = '';
      if ((countryes.length > 1) & (countryes.length <= 10)) {
        elementList(countryes);
      } else if (countryes.length === 1) {
        elementCard(countryes);
      } else if (countryes.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name. Знайдено забагато збігів. Будь ласка, введіть більш конкретну назву'
        );
      }
    })
    .catch(error => {
      countryCard.innerHTML = '';
      countryList.innerHTML = '';
      Notiflix.Notify.failure(
        'Oops, there is no country with that name Ой, такої країни немає'
      );
    });
}

function elementList(countryes) {
  countryes.forEach(function (element) {
    const list = `<li class="country-item"><div class="country-image"><img  src="${element.flags.svg}" alt="${element.name}" > </div> <p class="country-name">${element.name}</p></li>`;
    country.push(list);
  });

  countryList.innerHTML = country.join('');
  country = [];
}
function elementCard(countryes) {
  countryes.forEach(function (element) {
    card = `<div class="country-title"> <div class="country-image"> <img src="${
      element.flags.svg
    }" alt="${element.name}"></img></div> <p class="country-name__card" >${
      element.name
    }</p></div>
    <p class="country-info"> Capital: <span class="country-info__title">${
      element.capital
    }</span></p> <p class="country-info">Рopulation: <span class="country-info__title">${
      element.population
    }</span></p> <p class="country-info">Languages: <span class="country-info__title">${element.languages.map(
      el => el.name
    )}, ${element.languages.map(el => el.nativeName)}</span></p>`;
  });

  countryCard.innerHTML = card;
  card = '';
}
