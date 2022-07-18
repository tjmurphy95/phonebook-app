const Persons = ({ persons, filter }) => {
  return (
    <ul>
      {persons
        .filter((f) => f.name.includes(filter) || filter === "")
        .map((x) => {
          return (
            <li key={x.id}>
              {x.name} {x.number}
            </li>
          );
        })}
    </ul>
  );
};

export default Persons;
