import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { removeFromViewList } from '../../redux/viewList/index';

// components
import MovieCard from '../MovieCard';

// assets
import './style.css';

const ViewedList = ({ movieCount, clearData }) => {
  const viewedData = useSelector(({ viewList }) => viewList.movieData);

  const dispatch = useDispatch();

  const viewedKey = Object.keys(viewedData).sort(
    (a, b) => new Date(viewedData[b].time) - new Date(viewedData[a].time),
  );

  const handleClearAll = () => {
    dispatch(removeFromViewList());
  };

  return (
    <>
      <div className="row">
        <div className="genre-heading">
          <h1>Recently Viewed</h1>
          {viewedKey.length ? (
            <span>
              {clearData || viewedKey.length < movieCount ? (
                <span
                  className="clear-all"
                  role="button"
                  tabIndex="-1"
                  onClick={handleClearAll}
                  onKeyPress={handleClearAll}
                >
                  Clear All
                </span>
              ) : (
                <span className="view-all">
                  <Link to="/viewed">View All</Link>
                </span>
              )}
            </span>
          ) : null}
        </div>
      </div>
      {viewedKey.length ? (
        <div className="row">
          {(movieCount === -1
            ? viewedKey
            : viewedKey.splice(0, movieCount)
          ).map((key) => (
            <div key={key} className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <MovieCard data={viewedData[key]} />
            </div>
          ))}
        </div>
      ) : (
        <p>You have no recently viewed movies</p>
      )}
    </>
  );
};

ViewedList.propTypes = {
  movieCount: PropTypes.number,
  clearData: PropTypes.bool,
};

ViewedList.defaultProps = {
  movieCount: -1,
  clearData: true,
};

export default ViewedList;
