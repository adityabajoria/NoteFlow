import { MdSearch } from "react-icons/md";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.2em" />
      <input
        type="text"
        placeholder="Search for note: "
        onChange={(e) => onSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.string.isRequired,
};

export default SearchBar;
