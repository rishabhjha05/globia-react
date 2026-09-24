import Dropdown from './Dropdown';
import countries from '../data';
import { useState } from 'react';
import Search from './search';
import CountryCard from './CountryCard';
const Home = () => {
  const [query, setQuery] = useState('');
  const body=document.querySelector('body');
  return (
    <main>
      <div className="search-filter">
        <Search setQuery={setQuery} />
        <div className="wrapper">
          <Dropdown />
        </div>
      </div>
      <div
        className="country-card-container"
        onClick={(e) => {
            const country = e.target.closest('.country-card');
            console.log(country.id)
          if (!country) return;
          window.location.href = `Country?name=${country.id}&darkMode=${body.classList.contains('dark-mode')}`;
        }}
      >
        {countries
          .filter((country) => country.name.toLowerCase().includes(query))
          .map((country) => (
            <CountryCard
              key={country.alpha2Code}
              name={country.name}
              population={country.population.toLocaleString('en-IN')}
              region={country.region}
              capital={country.capital}
              flag={country.flags.svg}
            />
          ))}
      </div>
    </main>
  );
};

export default Home;
