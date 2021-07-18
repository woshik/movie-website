import { useState, memo } from 'react';
import { Link } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';

// components
import SearchBar from '../SearchBar';

// assets
import closeIcon from '../../assets/images/icon/close.svg';
import searchIcon from '../../assets/images/icon/search.svg';
import './style.css';

const NavBar = () => {
  const watchListIds = useSelector(({ watchList }) => watchList.ids);
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
              <span className="badge bg-danger custom-badge ms-2">
                {watchListIds.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <div
        className="search-mobile-wrapper d-sm-flx align-items-center d-hide fixed-top w-100"
        style={{ top: `${mobileSearchBarShow ? 75 : 0}px` }}
      >
        <SearchBar isSearchBarOpen={mobileSearchBarShow} />
      </div>
    </>
  );
};

export default memo(NavBar);
