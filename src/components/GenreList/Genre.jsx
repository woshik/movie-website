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

const Category = ({
  genre,
  movieCountPerGenre,
  viewMore,
  queryParams,
}) => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // get movie API data
  const handleMovieAPIData = (data) => {
    // trim down data
    setMovies(data.slice(0, movieCountPerGenre));
  };

  // only trigger the API call when category in viewport
  useEffect(() => {
    if (inView) {
      dispatch(
        fetchMovieList(
          {
            ...queryParams,
            with_genres: genre.id,
          },
          handleMovieAPIData,
        ),
      );
    }
  }, [inView]);

  return (
    <>
      <div className="row" ref={ref}>
        <div className="genre-heading">
          <h1>{genre.name}</h1>
          {viewMore ? (
            <span className="view-all">
              <Link to={`genre/${genre.id}`}>View More</Link>
            </span>
          ) : null}
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
  viewMore: PropTypes.bool,
  movieCountPerGenre: PropTypes.number,
  queryParams: PropTypes.object,
};

Category.defaultProps = {
  movieCountPerGenre: 5,
  viewMore: true,
  queryParams: {},
};

export default Category;
