import axios from "axios";
function extractCountryRequiredData(country) {
  const {
    flags: { svg: flagImgSvg, png: flagImgPng } = {},
    name = "",
    nativeName = "",
    capital = "",
    topLevelDomain = "",
    region = "",
    population = 0,
    currencies = [],
    languages = [],
    borders = [],
    latlng = [],
    alpha3Code = "",
  } = country;
  return {
    flagImgSvg,
    flagImgPng,
    name,
    nativeName,
    capital,
    topLevelDomain: topLevelDomain[0],
    region,
    population,
    currencies,
    language: languages[0].name || "",
    borders,
    alpha3Code,
    lat: latlng[0],
    lng: latlng[1],
  };
}
function formulateCountriesOutput(countries) {
  return countries.map((country) => extractCountryRequiredData(country));
}

function filterCountries(allCountries, filterName, filterValue) {
  if (filterName) {
    return allCountries.filter(
      (country) =>
        country[filterName].toLowerCase() == filterValue.toLowerCase()
    );
  } else {
    return allCountries;
  }
}

async function getCountries(filterName, filterValue) {
  const { data: allCountries } = await axios("/data.json");
  const requestedCountries = filterCountries(
    allCountries,
    filterName,
    filterValue
  );
  if (requestedCountries.length != 0) {
    return formulateCountriesOutput(requestedCountries);
  } else {
    throw new Error("no country Found");
  }
}

export { getCountries };