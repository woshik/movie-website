import searchIcon from '../../assets/images/icon/search.svg';
import './style.css';

const SearchBar = () => (
  <div className="input-group search-box-wrapper">
    <input
      type="text"
      className="form-control"
      placeholder="Search Movie...."
      aria-label="Search Movie"
    />
    <button className="btn" type="button">
      <img src={searchIcon} alt="search" />
    </button>
  </div>
);

export default SearchBar;
