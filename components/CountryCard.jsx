import { Link } from "react-router-dom";

const CountryCard = ({name,population,region,capital,flag}) => {

  return (
    <Link className="country-card" id={name} to={`/${name}`}>
      <img
        src={flag}
        alt="{name}'s flag"
        className="flag"
      />
      <div className="country-card-info">  
        <h3>{name}</h3>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
