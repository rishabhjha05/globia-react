import { useEffect, useState } from 'react';
import countries from '../data';
import style from './country.css';
import Button from './Button';
const Country = () => {
  const body = document.querySelector('body');
  const CountryName = new URLSearchParams(window.location.search).get('name');
  const darkMode=new URLSearchParams(window.location.search).get('darkMode');
  if(darkMode==='true')
    body.classList.add('dark-mode');
  const country = countries.find((country) => country.name === CountryName);
  return (
    country && (
      <main>
        <button id="back-button" onClick={(e) => history.back()}>
          <span className="material-symbols-outlined">
            <i className="fa-solid fa-arrow-left"></i>
          </span>
          Back
        </button>
        <div className="country-page">
          <img
            src={country.flags.svg}
            alt={country.name + "'s flag"}
            className="country-page-flag"
          />
          <div className="country-page-info">
            <h2>{country.name}</h2>
            <div className="country-detail">
              <div className="country-detail-left">
                <p>
                  <strong>Native Name:</strong>{' '}
                  <span>{country.nativeName}</span>
                </p>
                <p>
                  <strong>Population:</strong>{' '}
                  <span>{country.population.toLocaleString('en-IN')}</span>
                </p>
                <p>
                  <strong>Region:</strong> <span>{country.region}</span>
                </p>
                <p>
                  <strong>Sub Region:</strong> <span>{country.subregion}</span>
                </p>
                <p>
                  <strong>Capital:</strong> <span>{country.capital}</span>
                </p>
              </div>
              <div className="country-detail-right">
                <p>
                  <strong>Top Level Domain:</strong>{' '}
                  <span>{country.topLevelDomain}</span>
                </p>
                <p>
                  <strong>Currencies:</strong>{' '}
                  <span>
                    {country.currencies.map((cur) => cur.name).join(', ')}
                  </span>
                </p>
                <p>
                  <strong>Languages:</strong>{' '}
                  <span>
                    {country.languages.map((lang) => lang.name).join(', ')}
                  </span>
                </p>
              </div>
            </div>
            <div className="border-countries">
              <strong>Border Countries:</strong>
              <div
                className="border-countries-list"
                onClick={(e) => {
                  const country = e.target.closest('.border-country');
                  if (!country) return;
                  window.location.href = `Country?name=${country.innerText}&darkMode=${body.classList.contains('dark-mode')}`;
                }}
              >
                {country.borders
                  ? country.borders?.map((a3c) => {
                      const borderCountry = countries.find(
                        (country) => country.alpha3Code === a3c,
                      );
                      return <Button name={borderCountry.name} key={a3c} />;
                    })
                  : <p>None</p>}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  );
};
export default Country;
