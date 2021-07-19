import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/youtube';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieData } from '../redux/movieDetail';
import { addToViewList } from '../redux/viewList';

// components
import Layout from '../components/Layout';
import MovieDetailCart from '../components/MovieDetailCard';
import MovieCard from '../components/MovieCard';

// assets
import { siteBaseURL } from '../redux/static';

const MovieDetail = ({ match }) => {
  // get movie Details
  const movieDetailData = useSelector(({ movieDetail }) => movieDetail.detail);
  const { id: movieId } = match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieData(movieId));
  }, [movieId]);

  // view data dispatch
  useEffect(() => {
    if (movieDetailData.id) {
      dispatch(
        addToViewList({
          id: movieDetailData.id,
          title: movieDetailData.title,
          poster_path: movieDetailData.poster_path,
          vote_average: movieDetailData.vote_average,
          time: new Date(),
        }),
      );
    }
  }, [movieDetailData]);

  return (
    <Layout>
      <div className="container banner-less-margin">
        <MovieDetailCart movieDetail={movieDetailData} />

        <div className="row mt-5">
          <div className="col-6">
            <h2 className="mb-3">Top Cast</h2>
            <ul>
              {movieDetailData?.credits?.cast?.splice(0, 20)?.map((person) => (
                <li key={person.credit_id}>
                  {person.name}
                  {' '}
                  -
                  {' '}
                  {person.known_for_department}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <h2 className="mb-3">Crew</h2>
            <ul>
              {movieDetailData?.credits?.crew?.splice(0, 20)?.map((person) => (
                <li key={person.credit_id}>
                  {person.name}
                  {' '}
                  -
                  {' '}
                  {person.department}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <h2 className="mb-3">Videos</h2>
          {movieDetailData?.videos?.results?.splice(0, 4)?.map((video) => (
            <div
              key={video.id}
              data-id={video.id}
              className="col-md-6 col-sm-12 mb-4"
            >
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video.key}?showinfo=0&enablejsapi=1&origin=${siteBaseURL}`}
                width="100%"
                controls
              />
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <h2 className="mb-3"> Recommendation List </h2>
          {movieDetailData?.recommendations?.results?.length ? (
            movieDetailData?.recommendations?.results?.map((movie) => (
              <div key={movie.id} className="col-6 col-sm-4 col-lg-3 col-xl-2">
                <MovieCard data={movie} />
              </div>
            ))
          ) : (
            <p>Recommendation not available</p>
          )}
        </div>
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
