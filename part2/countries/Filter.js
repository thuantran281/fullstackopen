import React from "react";

const Filter = ({ filteredCountries, countryShowButton }) => {
  if (filteredCountries.length === 0) {
    return null;
  }

  if (filteredCountries.length > 10) {
    return (
      <>
        <p>Too many matches, specify another filter</p>
      </>
    );
  }

  if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
    return filteredCountries.map((country) => (
      <li key={country.name.common}>
        {country.name.common}
        <button onClick={() => countryShowButton(country)}>Show</button>
      </li>
    ));
  }

  if (filteredCountries.length === 1) {
    return (
      <li key={filteredCountries[0]}>{filteredCountries[0].name.common}</li>
    );
  }
};

export default Filter;
