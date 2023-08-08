import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterCountry from "./FilterCountry";
import Countries from "./Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const filteredCountries = countries.filter(
    (country) => country.name.common.toLowerCase() === filter.toLowerCase()
  );

  const onSearch = (event) => {
    event.preventDefault();
    setFilter(event.target.value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        find countries <input onChange={onSearch} />
      </form>
      <FilterCountry filteredCountries={filteredCountries} />
      <Countries filteredCountries={filteredCountries} />
    </div>
  );
};

export default App;
