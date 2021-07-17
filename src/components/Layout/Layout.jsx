import PropTypes from 'prop-types';
import NavBar from '../NavBar';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div className="container">{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
