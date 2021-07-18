import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

// redux
import { useDispatch } from 'react-redux';
import { setPageSize } from '../../redux/genre';

// service
import DiscoverService from '../../services/discover.service';

// components
import MovieCard from '../MovieCard';

// assets
import './style.css';

const discoverService = new DiscoverService();

const Category = ({
  genre, movieCountPerGenre, viewMore, queryParams,
}) => {
  const dispatch = useDispatch();

  // don't need to regenerate demo list every re-render
  const demoData = useMemo(
    () => Array(movieCountPerGenre)
      .fill({})
      .map((_, i) => ({ id: i, demo: true })),
    [movieCountPerGenre],
  );

  const [movies, setMovies] = useState(demoData);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // only trigger the API call when category in viewport
  useEffect(async () => {
    if (inView) {
      // get a random number. if total pages not found set this 1
      // otherwise pick a random number range of total_pages
      const randomPage = Math.floor(Math.random() * (genre?.total_pages || 1)) + 1;

      const [data, error] = await discoverService.get({
        with_genres: genre.id,
        page: randomPage,
        ...queryParams,
      });

      if (error) {
        return;
      }

      // if total_page not fount set the result
      if (!genre?.total_pages) {
        // set total size so that next time get different movie result
        dispatch(setPageSize(genre.id, data.total_pages));
      }

      setMovies(data?.results?.slice(0, movieCountPerGenre) ?? demoData);
    }
  }, [inView, queryParams]);

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
            <MovieCard data={movie} />
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
    total_pages: PropTypes.number,
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
