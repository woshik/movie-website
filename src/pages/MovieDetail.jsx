import { useEffect } from 'react';
import PropTypes from 'prop-types';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieData } from '../redux/movieDetail';
import { addToViewList } from '../redux/viewList';

// components
import Layout from '../components/Layout';
import MovieDetailCart from '../components/MovieDetailCard';

const MovieDetail = ({ match }) => {
  // get movie Details
  const movieDetailData = useSelector(({ movieDetail }) => movieDetail.detail);
  const movieId = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieData(movieId));
  }, [movieId]);

  // view data dispatch
  useEffect(() => {
    if (movieDetailData.id) {
      dispatch(addToViewList({
        id: movieDetailData.id,
        title: movieDetailData.title,
        poster_path: movieDetailData.poster_path,
        vote_average: movieDetailData.vote_average,
      }));
    }
  }, [movieDetailData]);

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
