import React from "react";
import Toolbar from "./Toolbar";
import CountryCards from "./CountryCards";
import CountriesContext from "@context/CountriesContext";
import useCountries from "@hooks/useCountries";

export default function Home() {
  const [countries, setCountries] = useCountries();

  return (
    <CountriesContext.Provider value={[countries, setCountries]}>
      <Toolbar />
      <CountryCards />
    </CountriesContext.Provider>
  );
}