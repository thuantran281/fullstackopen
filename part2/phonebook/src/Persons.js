import React from "react";

const Persons = ({ filterName, persons }) => {
  return (
    <div>
      {filterName
        ? persons
            .filter((person) => person.name.toLowerCase().includes(filterName))
            .map((person) => (
              <li key={person.id}>
                {person.name} {person.number}
              </li>
            ))
        : persons.map((person) => (
            <li key={person.id}>
              {person.name} {person.number}
            </li>
          ))}
    </div>
  );
};

export default Persons;
