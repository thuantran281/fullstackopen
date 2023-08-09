import React from "react";

const Countries = ({ filteredCountries }) => {
  if (filteredCountries.length === 0) {
    return null;
  }

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];

    return (
      <>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages: </h3>
        <ul>
          {Object.keys(country.languages).map((key) => (
            <li key={key}>{country.languages[key]}</li>
          ))}
        </ul>
        <img src={country.flags.svg} alt={country.flags.alt} width="200" />
        <p>{country.timezones}</p>
      </>
    );
  }
};

export default Country;
