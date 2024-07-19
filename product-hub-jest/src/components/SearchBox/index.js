import "./styles.css";

const SearchBox = ({ onSearchChange }) => {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="container search-container">
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBox;
