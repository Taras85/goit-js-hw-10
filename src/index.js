import './css/styles.css';

import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 2300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));
const array = [];
let countri = [];
let card = '';

// fetchCountries(name);

// ?fields={field},{field},{field}
// ?fields=capital,population,flags,languages,coatOfArms.svg

// https://restcountries.com/v2/name/{name}

function fetchCountries(name) {
  console.log(name.target.value);
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  const count = name.target.value;
  fetch(
    `https://restcountries.com/v2/name/${count}?fields=name,capital,population,flags,languages`
    // `https://restcountries.com/v2/name/${count}`
  )
    .then(response => {
      console.log(response);

      return response.json();
    })
    .then(countries => {
      if (!countries) {
        // console.log(countries.length);
        // console.log('000');
        return;
      } else if (countries.length > 1) {
        console.log(countries.length);
        console.log('1++');
        elementList(countries);
      } else if (countries.length === 1) {
        console.log(countries.length);
        console.log(1);
        elementCard(countries);
      }
    })
    .catch(error => {
      console.log('ERROR');
    });
}

function elementList(countries) {
  countries.forEach(function (element) {
    const list = `<li><img class="country-img" src="${element.flags.svg}" alt="flag" width=50px><h2 class="country-text">${element.name}</h2></li>`;
    countri.push(list);
  });

  countryList.innerHTML = countri;
  countri = [];
}
function elementCard(countries) {
  countries.forEach(function (element) {
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

  countryInfo.innerHTML = card;
  card = '';
}

// console.log(countri);