import { memo } from 'react';
import './style.css';

const Loader = () => (
  <div className="loader">
    <div className="spinner">
      <div className="dot1" />
      <div className="dot2" />
    </div>
  </div>
);

export default memo(Loader);
