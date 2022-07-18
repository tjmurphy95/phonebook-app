const Filter = ({ filter, setFilter }) => {
  const handleFilter = (event) => {
    // console.log(event.target.value);
    setFilter(event.target.value);
  };
  return (
    <div>
      Type to filter{" "}
      <input type="text" value={filter} onChange={handleFilter} />
    </div>
  );
};
export default Filter;
