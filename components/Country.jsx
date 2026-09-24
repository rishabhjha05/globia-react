import { useEffect, useState } from "react";
import countries from "../data";
import style from "./country.css";
const Country = () => {
  const CountryName = new URLSearchParams(window.location.search).get('name');
  const country=countries.find(country=> country.name===CountryName);
  return (
    <main>
      <button id="back-button">
        <span className="material-symbols-outlined">
          <i className="fa-solid fa-arrow-left"></i>
        </span>
        Back
      </button>
      <div className="country-page">
        <img
          src={country.flags.svg}
          alt={country.name+"'s flag"}
         className="country-page-flag"
        />
        <div className="country-page-info">
          <h2>Åland Islands</h2>
          <div className="country-detail">
            <div className="country-detail-left">
              <p>
                <strong>Native Name:</strong> <span>Åland</span>
              </p>
              <p>
                <strong>Population:</strong> <span>28,875</span>
              </p>
              <p>
                <strong>Region:</strong> <span>Europe</span>
              </p>
              <p>
                <strong>Sub Region:</strong> <span>Northern Europe</span>
              </p>
              <p>
                <strong>Capital:</strong> <span>Mariehamn</span>
              </p>
            </div>
            <div className="country-detail-right">
              <p>
                <strong>Top Level Domain:</strong> <span>.ax</span>
              </p>
              <p>
                <strong>Currencies:</strong> <span>Euro</span>
              </p>
              <p>
                <strong>Languages:</strong> <span>Swedish</span>
              </p>
            </div>
          </div>
          <div className="border-countries">
            <strong>Border Countries:</strong>
            <div className="border-countries-list">
              <span>None</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Country;
