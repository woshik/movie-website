import { useEffect } from 'react';
import PropTypes from 'prop-types';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieData } from '../redux/movieDetail';

// components
import Layout from '../components/Layout';
import MovieDetailCart from '../components/MovieDetailCard';

const MovieDetail = ({ match }) => {
  // get movie Details
  const movieDetailData = useSelector(({ movieDetail }) => movieDetail.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieData(match.params.id));
  }, []);

  return (
    <Layout>
      <div className="container banner-less-margin">
        <MovieDetailCart movieDetail={movieDetailData} />
      </div>
    </Layout>
  );
};

MovieDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default MovieDetail;
