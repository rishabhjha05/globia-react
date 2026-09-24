const Dropdown = () => {
  return (
    <>
      <select name="region" id="region-filter" defaultValue="Filter by Region">
        <option value="" hidden="">
          Filter by Region
        </option>
        <option value="All">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <i className="fa-solid fa-chevron-down" id="dropdownArr"></i>
    </>
  );
};
export default Dropdown;
