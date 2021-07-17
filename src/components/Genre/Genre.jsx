import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchMovieList } from '../../redux/movie';

// components
import Card from '../Card';

// assets
import './style.css';

const Category = ({ genre }) => {
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // only trigger the API call when category in viewport
  useEffect(() => {
    if (inView) {
      dispatch(fetchMovieList({
        with_genres: genre.id,
      }));
    }
  }, [inView]);

  return (
    <>
      <div className="row" ref={ref}>
        <div className="genre-heading">
          <h1>{genre.name}</h1>
          <span className="view-all">
            <Link to={`genre/${genre.id}`}>View More</Link>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
          <Card />
        </div>
        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
          <Card />
        </div>
        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
          <Card />
        </div>
        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
          <Card />
        </div>
        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
          <Card />
        </div>
      </div>
    </>
  );
};

Category.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Category;
