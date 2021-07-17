import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../Card';
import './style.css';

const Category = ({ genre }) => (
  <>
    <div className="row">
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

Category.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Category;
