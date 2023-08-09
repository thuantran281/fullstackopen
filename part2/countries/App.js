import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterCountry from "./FilterCountry";
import Countries from "./Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  const countryShowButton = (country) => {
    setSelectedCountry(country);
  };

  const onSearch = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
    setSelectedCountry(null);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        find countries <input onChange={onSearch} />
      </form>
      <FilterCountry
        filteredCountries={filteredCountries}
        countryShowButton={countryShowButton}
      />
      <Countries selectedCountry={selectedCountry} />
    </div>
  );
};

export default App;
