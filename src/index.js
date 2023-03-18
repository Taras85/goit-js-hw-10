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
    });
}
