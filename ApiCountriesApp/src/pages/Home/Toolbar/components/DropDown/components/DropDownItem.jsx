import React, { useContext } from "react";
import CountriesContext from "@context/CountriesContext";
import { getCountries } from "@src/utils/ManipulateCountriesData";
export default function DropDownItem({ listValue }) {
  const [countriesData, setCountries] = useContext(CountriesContext);

  return (
    <li role="menuitem" className="drop-down__list-item">
      <button
        value={listValue}
        className="drop-down__btn"
        onMouseDown={({ target }) => {
          getCountries("region", target.value).then((data) => {
            setCountries(data);
          });
        }}
      >
        {listValue}
      </button>
    </li>
  );
}