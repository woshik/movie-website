import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import closeIcon from '../../assets/images/icon/close.svg';
import searchIcon from '../../assets/images/icon/search.svg';

import './style.css';

const NavBar = () => {
  const [mobileSearchBarShow, setMobileSearchBarShow] = useState(false);

  const handleMobileSearchClick = () => {
    setMobileSearchBarShow((preState) => !preState);
  };

  return (
    <>
      <nav className="navbar nav-style fixed-top">
        <div className="container">
          <Link to="/movies" className="logo">
            TMDB
          </Link>
          <div className="w-50 d-sm-hide">
            <SearchBar />
          </div>
          <div>
            <button
              className="btn d-hide d-sm-inline-show mobile-search-btn nav-button"
              type="button"
              onClick={handleMobileSearchClick}
            >
              <img
                src={mobileSearchBarShow ? closeIcon : searchIcon}
                alt="search"
              />
            </button>
            <Link to="/watchlist" className="btn nav-button">
              Watchlist
            </Link>
          </div>
        </div>
      </nav>
      <div
        className={`search-mobile-wrapper d-flex align-items-center fixed-top w-100 ${mobileSearchBarShow ? 'top-78' : ''}`}
      >
        <SearchBar />
      </div>
    </>
  );
};

export default NavBar;
