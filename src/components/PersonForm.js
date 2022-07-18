const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumbers,
  setNewNumbers,
}) => {
  const addNameNumber = (event) => {
    event.preventDefault();
    console.log(persons);
    if (persons.some((e) => e.name === newName)) {
      alert(`${newName} is already in the phonebook`);
    } else {
      const newObj = {
        name: newName,
        number: newNumbers,
        id: persons.length + 1,
      };
      setPersons(persons.concat(newObj));
      setNewName("");
      setNewNumbers("");
    }
  };
  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumbers(event.target.value);
  };
  return (
    <form onSubmit={addNameNumber}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumbers} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
