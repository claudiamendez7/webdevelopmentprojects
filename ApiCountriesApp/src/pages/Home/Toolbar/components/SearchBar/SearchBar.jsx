import React, { useState, useContext } from "react";
import { ReactComponent as SearchIcon } from "../../assets/images/icon-search.svg";
import CountriesContext from "@context/CountriesContext";
import { getCountries } from "@utils/ManipulateCountriesData";
import "./SearchBar.scss";
export default function SearchBar() {
  const [countrynameInput, setCountrynameInput] = useState("");
  const [countriesData, setCountries] = useContext(CountriesContext);

  function onChange({ target }) {
    setCountrynameInput(target.value);
  }

   function onSubmit(e) {
    e.preventDefault();
    getCountries("name", countrynameInput).then((data) => {
      setCountries(data);
    });
    setCountrynameInput("");
  }

  return (
    <form onSubmit={onSubmit} className="search-bar">
      <SearchIcon  className="search-bar__icon"/>
      <label htmlFor="search-bar__input">Search for a country:</label>
      <input
        id="search-bar__input"
        name="countryname"
        type="text"
        value={countrynameInput}
        onChange={onChange}
        placeholder="search for a country..."
        autoComplete="off"
      />
    </form>
  );
}