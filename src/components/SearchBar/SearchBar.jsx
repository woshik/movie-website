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
import defaultPoster from '../../assets/images/default-poster.jpg';
import './style.css';

const searchService = new SearchService();
let timer = null;

// isSearchBarOpen is only for mobile screen
const SearchBar = ({ isSearchBarOpen }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [outSideClick, wrapperRef] = useOutSideClick();

  const handleSearchInput = (e) => {
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
      setSearchMovies([]);
    }
  }, [searchInput]);

  return (
    <div className="d-flex w-100 search-box-wrapper" ref={wrapperRef}>
      <input
        type="text"
        className="form-control"
        placeholder="Search Movie (type minimum 2 character)"
        aria-label="Search Movie"
        onChange={handleSearchInput}
      />
      {isSearchBarOpen && !outSideClick ? (
        <div className="movie-result">
          <ul>
            {searchMovies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : defaultPoster} alt={movie.title || 'movie poster'} />
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
