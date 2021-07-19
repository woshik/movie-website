/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// service
import SearchService from '../../services/search.service';

// custom hook
import useOutSideClick from '../../hook/useOutSideClick';

// util
import { cancelRequest } from '../../utils/request';

// assets
import { imagePath } from '../../redux/static';
import defaultPoster from '../../assets/images/default-poster.jpg';
import './style.css';

const searchService = new SearchService();
let timer = null;

// isSearchBarOpen is only for mobile screen
const SearchBar = ({ isSearchBarOpen }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [outSideClick, wrapperRef] = useOutSideClick();
  const [showSearchBarList, setShowSearchBarList] = useState(false);

  const handleSearchInput = (e) => {
    setShowSearchBarList(true);
    setSearchInput(e.target.value.trim());
  };

  const handleAPIRequest = async () => {
    const [data, error] = await searchService.get({ query: searchInput });

    if (error) {
      setSearchMovies([]);
      return;
    }

    setSearchMovies(data?.results?.slice(0, 5) || []);
  };

  useEffect(() => {
    if (searchInput && searchInput.length > 1) {
      clearTimeout(timer);
      // cancel previous query request
      cancelRequest();
      timer = setTimeout(handleAPIRequest, 300);
    } else {
      // clear all timer when less than 2 corrector
      // otherwise request will send with last 2 corrector
      clearTimeout(timer);
      setSearchMovies([]);
    }
  }, [searchInput]);

  const handleClick = () => {
    setShowSearchBarList(false);
  };

  return (
    <div className="d-flex w-100 search-box-wrapper" ref={wrapperRef}>
      <input
        type="text"
        className="form-control"
        placeholder="Search Movie (type minimum 2 character)"
        aria-label="Search Movie"
        onChange={handleSearchInput}
        onClick={handleSearchInput}
      />
      {isSearchBarOpen && showSearchBarList && !outSideClick ? (
        <div className="movie-result">
          <ul>
            {searchMovies.map((movie) => (
              <li key={movie.id} role="button" tabIndex="-1" onKeyPress={handleClick} onClick={handleClick}>
                <Link to={`/movie/${movie.id}`}>
                  <img src={movie.poster_path ? `${imagePath}w300${movie.poster_path}` : defaultPoster} alt={movie.title || 'movie poster'} />
                  <span className="ms-2">{movie.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

SearchBar.propTypes = {
  isSearchBarOpen: PropTypes.bool,
};

SearchBar.defaultProps = {
  isSearchBarOpen: true,
};

export default SearchBar;
