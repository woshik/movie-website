import React from 'react';
import PropTypes from 'prop-types';

const SortMovie = ({ sortList, selectedValue, setSelectedValue }) => {
  const handleOnChange = (e) => {
    setSelectedValue(e.target.value);
  };
  console.log(selectedValue);
  return (
    <>
      {sortList.map((sort) => (
        <div key={sort.value} className="form-check form-check-inline">
          <label className="form-check-label" htmlFor={sort.value}>
            <input
              className="form-check-input"
              type="radio"
              name="sort-movie"
              id={sort.value}
              value={sort.value}
              onChange={handleOnChange}
              checked={selectedValue === sort.value}
            />
            {sort.title}
          </label>
        </div>
      ))}
    </>
  );
};

SortMovie.propTypes = {
  sortList: PropTypes.array.isRequired,
  selectedValue: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
};

export default SortMovie;
