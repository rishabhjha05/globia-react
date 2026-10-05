import Dropdown from './Dropdown';
import countries from '../data';
import { useEffect, useState } from 'react';
import Search from './search';
import CountryCard from './CountryCard';
import { useTheme } from '../contexts/Theme.js';
import HomeShimmer from './HomeShimmer.jsx';
const Home = () => {
  const [query, setQuery] = useState('');
  const [show, setShow] =
    useState(
      true,
    ); /*this state is completely for learning purpose and to implement skeleton loading effect as we are not fetching 
    data from any api and we are using static data for this project
    hence we will show skelton loading for 500ms using timeout */
  setTimeout(() => {
    setShow(false);
  }, 500);
  const [countryArr, setCountryArr] = useState(
    countries
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
      )),
  );
  useEffect(() => {
    setCountryArr(
      countries
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
        )),
    );
  }, [query]);

  function handelRegionFilter(e) {
    console.log(e.target.value);
    if (e.target.value === 'All') {
      setCountryArr(
        countries.map((country) => (
          <CountryCard
            key={country.alpha2Code}
            name={country.name}
            population={country.population.toLocaleString('en-IN')}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
          />
        )),
      );
      return;
    }
    setCountryArr(
      countries
        .filter((country) => country.region === e.target.value)
        .map((country) => (
          <CountryCard
            key={country.alpha2Code}
            name={country.name}
            population={country.population.toLocaleString('en-IN')}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
          />
        )),
    );
  }
  function handleSearch() {
    setCountryArr(
      countries
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
        )),
    );
  }
  const { theme } = useTheme();
  return show ? (
    <HomeShimmer />
  ) : (
    <main className={theme === 'dark' ? 'dark' : 'light'}>
      <div className="search-filter">
        <Search setQuery={setQuery} />
        <div className="wrapper">
          <Dropdown onchange={handelRegionFilter} />
        </div>
      </div>
      <div className="country-card-container">
        {!countryArr.length ? <div>Country Not Found</div> : countryArr}
      </div>
    </main>
  );
};

export default Home;
