import { useEffect, useState } from "react";
import { getCountries } from "@utils/ManipulateCountriesData";
export default function useCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  return [countries, setCountries];
}