export function fetchCountries(name) {
  // console.log(name.target.value.trim());
  return fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (response === false) {
      throw Error(response.statusText);
      //   return;
    }

    return response.json();
  });
}
