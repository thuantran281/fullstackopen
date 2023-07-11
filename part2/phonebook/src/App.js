import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import personService from "./services/persons";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // console.log("effect");
    personService.getAll().then((initialPerson) => {
      setPersons(initialPerson);
    });
  }, []);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilterName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();

    const nameFound = persons.find((person) => person.name === newName);

    if (nameFound) {
      if (
        window.confirm(
          `${nameFound.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...nameFound, number: newNumber };

        personService
          .update(nameFound.id, updatedPerson)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === nameFound.id ? updatedPerson : person
              )
            );
            setNewName("");
            setNewNumber("");
            setMessage({
              message: `${nameFound.name}'s phone number has been updated successfully.`,
              type: "success",
            });
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            setMessage({
              message: `${nameFound.name} information has already been removed from the server.`,
              type: "error",
            });
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setPersons(persons.filter((person) => person.id !== nameFound.id));
          });
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      personService
        .create(nameObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
          setMessage({
            message: `Added ${nameObject.name}`,
            type: "success",
          });
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handlePersonDelete = (id) => {
    const personToFind = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${personToFind.name}?`)) {
      personService
        .deleteName(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== personToFind.id));
          setNewName("");
          setNewNumber("");
          setMessage({
            message: `Delete ${personToFind.name} from the phonebook!`,
            type: "error",
          });
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setMessage({
            message: `Information of ${personToFind.name} has already been removed from the server.`,
            type: "error",
          });
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          setPersons(persons.filter((person) => person.id !== personToFind.id));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <Notification message={message?.message} type={message?.type}/>
      <h1>add a new</h1>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        filterName={filterName}
        handlePersonDelete={handlePersonDelete}
        persons={persons}
      />
    </div>
  );
};

export default App;
