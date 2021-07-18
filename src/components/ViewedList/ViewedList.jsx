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

  const handleClearAll = () => {
    dispatch(removeFromViewList());
  };

  return (
    <>
      <div className="row">
        <div className="genre-heading">
          {clearData || Object.keys(viewedData).length < 5 ? (
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
            <>
              <h1>Recently Viewed</h1>
              <span className="view-all">
                <Link to="/viewed">View All</Link>
              </span>
            </>
          )}
        </div>
      </div>
      <div className="row">
        {(movieCount === -1
          ? Object.keys(viewedData)
          : Object.keys(viewedData).splice(0, movieCount)
        ).map((key) => (
          <div key={key} className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <MovieCard data={viewedData[key]} />
          </div>
        ))}
      </div>
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
