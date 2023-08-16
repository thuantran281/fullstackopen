import React from "react";
import Weather from "./Weather";

const Country = ({ selectedCountry }) => {
  if (!selectedCountry) {
    return null;
  }

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
      <Weather capitalCity={selectedCountry.capital} />
    </>
  );
};

export default Country;
