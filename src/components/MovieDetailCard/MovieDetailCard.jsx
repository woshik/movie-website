import PropTypes from 'prop-types';

// component
import Favorite from '../Favorite';

// assets
import { imagePath } from '../../redux/static';
import defaultPoster from '../../assets/images/default-poster.jpg';
import './style.css';

const MovieDetailCard = ({ movieDetail }) => (
  <div className="transformers-box">
    <span className="favorite-icon">
      {movieDetail.id ? <Favorite movieData={movieDetail} /> : null }
    </span>
    <div className="row justify-content-center">
      <div className="col-lg-5 text-lg-left text-center mb-5">
        <img
          className="poster-image"
          src={movieDetail.poster_path ? `${imagePath}w300${movieDetail.poster_path}` : defaultPoster}
          alt={movieDetail.title}
        />
      </div>
      <div className="col-lg-7">
        <div className="transformers-content">
          <h2 className="movie-title">{movieDetail.title || 'Movie Title' }</h2>
          <p>
            {movieDetail?.genres?.map((genre) => genre?.name)?.join(' | ')}
          </p>
          <ul>
            <li>
              <div className="transformers-left">Overview </div>
              <div className="transformers-right">{movieDetail.overview || ''}</div>
            </li>
            <li>
              <div className="transformers-left">Rating </div>
              <div className="transformers-right">
                {movieDetail?.vote_average ?? 0}
                /10
              </div>
            </li>
            <li>
              <div className="transformers-left">IMDb </div>
              <div className="transformers-right">
                {movieDetail.imdb_id ? (
                  <a
                    href={`https://www.imdb.com/title/${movieDetail.imdb_id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-underline"
                  >
                    {movieDetail.title}
                  </a>
                ) : (
                  'Not Available'
                )}
              </div>
            </li>
            <li>
              <div className="transformers-left">Release Date </div>
              <div className="transformers-right">
                {movieDetail?.release_date || ''}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MovieDetailCard.propTypes = {
  movieDetail: PropTypes.object,
};

MovieDetailCard.defaultProps = {
  movieDetail: {},
};

export default MovieDetailCard;
