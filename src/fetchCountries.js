export function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v2/name/';
  const BASE_SEARCH_PARAMS = 'fields=name,capital,population,flags,languages';

  return fetch(`${BASE_URL}${name}?${BASE_SEARCH_PARAMS}`).then(response => {
    if (!response.ok) {
      throw Error(response.status);
      //   return;
    }

    return response.json();
  });
}
