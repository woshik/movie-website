import PropTypes from 'prop-types';
import './style.css';

const MovieDetailCard = ({ movieDetail }) => (
  <div className="transformers-box">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-5 text-lg-left text-center mb-5">
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
      </div>
      <div className="col-lg-7">
        <div className="transformers-content">
          <h2 className="movie-title">{movieDetail.title}</h2>
          <p>
            {movieDetail?.genres?.map((genre) => genre?.name)?.join(' | ')}
          </p>
          <ul>
            <li>
              <div className="transformers-left">Overview </div>
              <div className="transformers-right">{movieDetail.overview}</div>
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
  movieDetail: PropTypes.object.isRequired,
};

export default MovieDetailCard;
