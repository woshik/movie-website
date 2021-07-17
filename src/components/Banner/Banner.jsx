import PropTypes from 'prop-types';
import './style.css';

const Banner = ({
  height, bannerImageSRC, title, subTitle,
}) => (
  <section
    className="banner"
    style={{ backgroundImage: `url(${bannerImageSRC})`, height }}
  >
    <div className="container">
      <div className="title">
        {title ? <h2>{title}</h2> : null}
        {subTitle ? <h3>{subTitle}</h3> : null}
      </div>
    </div>
  </section>
);

Banner.propTypes = {
  height: PropTypes.string.isRequired,
  bannerImageSRC: PropTypes.string.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

Banner.defaultProps = {
  title: 'john',
  subTitle: '',
};

export default Banner;
