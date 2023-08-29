import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountries } from "@src/utils/ManipulateCountriesData";
import { ReactComponent as ArrowIcon } from "./assets/images/icon-arrow.svg";
import DetailsList from "./components/DetailsList/DetailsList";
import "./CountryDetails.scss";
export default function CountryDetails() {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState({});
  useEffect(() => {
    getCountries("name", countryName.split("_").join(" "))
      .then(([data]) => {
        setCountryData(data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/notFound");
      });
  }, [countryName]);

  return (
    <>
      <button
        title="Go back to previous page"
        role="button"
        aria-label="Back"
        className="back-btn"
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowIcon />
        Back
      </button>
      {Object.keys(countryData).length != 0 && (
        <>
          <section className="country">
            <img
              src={countryData.flagImgSvg}
              className="country__flag"
              alt={`flag for ${countryData.name}`}
            />

            <div className="country__details">
              <h3 className="country__name">{countryData.name}</h3>
              <DetailsList countryData={countryData} />
            </div>
          </section>
        </>
      )}
    </>
  );
}