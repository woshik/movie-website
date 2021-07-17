import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

// redux
import { useDispatch } from 'react-redux';
import { fetchMovieList } from '../../redux/movie';

// components
import Card from '../Card';

// assets
import './style.css';

const Category = ({ genre, movieCountPerCategory }) => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // get movie API data
  const handleMovieAPIData = (data) => {
    // trim down data
    setMovies(data.slice(0, movieCountPerCategory));
  };

  // only trigger the API call when category in viewport
  useEffect(() => {
    if (inView) {
      dispatch(fetchMovieList({
        with_genres: genre.id,
      }, handleMovieAPIData));
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
        {movies.map((movie) => (
          <div key={movie.id} className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <Card data={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

Category.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  movieCountPerCategory: PropTypes.number,
};

Category.defaultProps = {
  movieCountPerCategory: 5,
};

export default Category;
