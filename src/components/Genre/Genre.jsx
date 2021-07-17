import { Link } from 'react-router-dom';
import Card from '../Card';
import './style.css';

const Category = () => (
  <>
    <div className="row">
      <div className="genre-heading">
        <h1>Action </h1>
        <span className="view-all">
          <Link to="/genre">View More</Link>
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

export default Category;
