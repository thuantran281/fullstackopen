import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState([]);

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    // console.log(event.target.value);
    setFilterName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();

    const nameFound = persons.find((person) => person.name === newName);

    if (nameFound) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(nameObject));
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with{" "}
        <input value={filterName} onChange={handleFilterChange} />
      </p>
      <h1>add a new</h1>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filterName
          ? persons
              .filter((person) =>
                person.name.toLowerCase().includes(filterName)
              )
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
      </ul>
    </div>
  );
};

export default App;
