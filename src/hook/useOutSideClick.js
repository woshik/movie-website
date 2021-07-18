import { useState, useEffect, useRef } from 'react';

const useOutSideClick = () => {
  const wrapperRef = useRef(null);

  const [outSideClick, setoutSideClick] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setoutSideClick(true);
      } else {
        setoutSideClick(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return [outSideClick, wrapperRef];
};

export default useOutSideClick;
