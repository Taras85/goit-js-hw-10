import './css/styles.css';

import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 2300;

const searchBox = document.querySelector('#search-box');

searchBox.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));

// fetchCountries(name);

// ?fields={field},{field},{field}
// ?fields=capital,population,flags,languages,coatOfArms.svg

// https://restcountries.com/v2/name/{name}

function fetchCountries(name) {
  console.log(name.target.value);
  count = name.target.value;
  fetch(
    `https://restcountries.com/v2/name/${count}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return response.json();
    })
    .then(contries => {
      console.log(contries);
      elementList(contries);
      // const array = [];
      // const elementList = contries.map(function (value) {
      //   const list = document.createElement('li');
      //   list.classList.add('item');
      //   list.textContent = value.name;
      //   array.push(list);
      // });
      // countryList.append(...array);
    });
}
const array = [];
function elementList(countries) {
  if (countries.length > 0) {
    countries.map(function (value) {
      const list = document.createElement('li');
      list.classList.add('item');
      list.textContent = value.name;
      array.push(list);
    });
  }
  countryList.append(...array);
}

const countryList = document.querySelector('.country-list');
