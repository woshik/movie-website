import PropTypes from 'prop-types';
import NavBar from '../NavBar';

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
