import React from "react";
import "./CountryCard.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
export default function CountryCard({ countryData }) {
  return (
    <NavLink className="country-card" to={`/${countryData.name.split(' ').join("_")}`}>
      <div className="country-card__flag-container">
        <LazyLoadImage
          className="country-card__flag-img"
          alt={`flag for ${countryData.name}`}
          src={countryData.flagImgPng}
        />
      </div>
      <div className="country-card__details">
        <h2 className="country-card__name">{countryData.name}</h2>
        <p className="country-card__population">
          <span className="country-card__label"> population</span> {countryData.population}
        </p>
        <p className="country-card__region">
          <span className="country-card__label"> region:</span> {countryData.region}
        </p>
        <p className="country-card__capital">
          <span className="country-card__label"> capital:</span> {countryData.capital}
        </p>
      </div>
    </NavLink>
  );
}