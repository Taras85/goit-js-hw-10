import './css/styles.css';

import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

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
    return;
  }
  fetchCountries(country).then(countryes => {
    countryList.innerHTML = '';
    countryCard.innerHTML = '';
    if ((countryes.length > 1) & (countryes.length < 10)) {
      elementList(countryes);
    } else if (countryes.length === 1) {
      elementCard(countryes);
    } else if (countryes.length > 10) {
      alert('Too many matches found. Please enter a more specific name.');
    }
  });
}

function elementList(countryes) {
  countryes.forEach(function (element) {
    const list = `<li><img class="country-img" src="${element.flags.svg}" alt="flag" width=50px><h2 class="country-text">${element.name}</h2></li>`;
    country.push(list);
  });

  countryList.innerHTML = country;
  country = [];
}
function elementCard(countryes) {
  countryes.forEach(function (element) {
    card = `<p>Official name: ${element.name}</p><p>Capital: ${
      element.capital
    }</p><p class="country-info">Рopulation: ${
      element.population
    }</p><img src="${
      element.flags.svg
    }"></img><p class="country-info">Languages: ${element.languages.map(
      el => el.name
    )}, ${element.languages.map(el => el.nativeName)}</p>`;
  });

  countryCard.innerHTML = card;
  card = '';
}

// console.log(countri);
