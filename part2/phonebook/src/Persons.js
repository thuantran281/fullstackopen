import React from "react";

const Persons = (props) => {
  return (
    <div>
      {props.filterName
        ? props.persons
            .filter((person) =>
              person.name.toLowerCase().includes(props.filterName)
            )
            .map((person) => (
              <li key={person.id}>
                {person.name} {person.number}
              </li>
            ))
        : props.persons.map((person) => (
            <li key={person.id}>
              {person.name} {person.number}
            </li>
          ))}
    </div>
  );
};

export default Persons;
