import React, { useContext } from "react";
import CountriesContext from "@src/context/CountriesContext";
import CountryCard from "./components/CountryCard/CountryCard";
import "./CountryCards.scss";

export default function CountryCards() {
  const [countriesData] = useContext(CountriesContext);
  return (
    <div className="country-cards">
      {countriesData.map((countryData) => {
        return (
          <CountryCard
            key={`${countryData.name}+${countryData.capital}`}
            countryData={countryData}
          />
        );
      })}
    </div>
  );
}