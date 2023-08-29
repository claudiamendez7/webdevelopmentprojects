import React from "react";
import { getCountries } from "@src/utils/ManipulateCountriesData";
import { useNavigate } from "react-router-dom";
import './detailsList.scss'
export default function DetailsList({ countryData }) {
  const navigate = useNavigate();

  return (
    <ul className="country__info-list">
      <li className="country__info-item">
        <span>native name: </span>
        {countryData.name}
      </li>
      <li className="country__info-item">
        <span>population: </span>
        {countryData.population}
      </li>
      <li className="country__info-item">
        <span>Region: </span>
        {countryData.region}
      </li>
      <li className="country__info-item">
        <span>sub Region: </span>
        {countryData.region}
      </li>
      <li className="country__info-item">
        <span>capital: </span>
        {countryData.capital}
      </li>
      <li className="country__info-item">
        <span>Top Level Domain: </span>
        {countryData.topLevelDomain}
      </li>
      <li className="country__info-item">
        <span>currencies: </span>
        {countryData.currencies.map((currency) => {
          return `${currency.name}`;
        })}
      </li>
      <li className="country__info-item">
        <span>Languages: </span>
        {countryData.language}
      </li>
      <li className="country__info-item" id="country-borders">
        <span>Borders: </span>
        {countryData.borders.map((border) => {
          return (
            <button
              aria-labelledby="country-borders"
              key={border}
              className="border-btn"
              onClick={() => {
                getCountries("alpha3Code", border).then(([data]) => {
                  navigate(`/${data.name}`);
                });
              }}
            >
              {border}
            </button>
          );
        })}
      </li>
    </ul>
  );
}