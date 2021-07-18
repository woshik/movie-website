import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import Favorite from '../Favorite';

// assets
import defaultPoster from '../../assets/images/default-poster.jpg';
import './style.css';

const Card = ({ data }) => (
  <div className="movie-card">
    {(data.id && !data.demo) ? <Favorite id={data.id} /> : null }
    <Link to={(data.id && !data.demo) ? `/movie/${data.id}` : '/movies'}>
      <img src={data.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}` : defaultPoster} alt={data.title || 'movie poster'} />
    </Link>
    <div className="movie-info">
      <h6>
        <Link to={`/movie/${data.id}`}>{data.title}</Link>
      </h6>
      <p className="rate">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-star-fill"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <span>{data?.vote_average || 0}</span>
        /10
      </p>
    </div>
  </div>
);

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    demo: PropTypes.bool,
  }).isRequired,
};

export default Card;
