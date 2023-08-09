import React from "react";

const Country = ({ selectedCountry }) => {
  if (!selectedCountry) {
    return null;
  }

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];

    return (
      <>
        <h1>{selectedCountry.name.common}</h1>
        <p>capital {selectedCountry.capital}</p>
        <p>area {selectedCountry.area}</p>
        <h3>languages: </h3>
        <ul>
          {Object.keys(selectedCountry.languages).map((key) => (
            <li key={key}>{selectedCountry.languages[key]}</li>
          ))}
        </ul>
        <img
          src={selectedCountry.flags.svg}
          alt={selectedCountry.flags.alt}
          width="200"
        />
        <p>{selectedCountry.timezones}</p>
      </>
    );
  }
};

export default Country;
