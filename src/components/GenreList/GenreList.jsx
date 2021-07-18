import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenreList } from '../../redux/genre';

// component
import Genre from './Genre';

const GenreList = ({
  onlyShowId,
  movieCountPerGenre,
  viewMore,
  queryParams,
  handlerGenreData,
}) => {
  // get genre list
  const genreList = useSelector(({ genre }) => genre.list);
  const [category, setCategory] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // if genre data already exist, don't need the API call every time
    if (genreList.length === 0) {
      dispatch(fetchGenreList());
    }

    // if any specific id exist query that id
    if (onlyShowId) {
      const data = genreList.filter((genre) => genre.id === onlyShowId);
      setCategory(data);
      if (handlerGenreData) handlerGenreData(data?.[0] ?? {});
    } else {
      setCategory(genreList);
    }
  }, [genreList]);

  return (
    <>
      {category.map((genre) => (
        <div key={genre.id} className="mt-6">
          <Genre
            genre={genre}
            movieCountPerGenre={movieCountPerGenre}
            viewMore={viewMore}
            queryParams={queryParams}
          />
        </div>
      ))}
    </>
  );
};

GenreList.propTypes = {
  onlyShowId: PropTypes.number,
  movieCountPerGenre: PropTypes.number,
  viewMore: PropTypes.bool,
  queryParams: PropTypes.object,
  handlerGenreData: PropTypes.func,
};

GenreList.defaultProps = {
  onlyShowId: null,
  movieCountPerGenre: 5,
  viewMore: true,
  queryParams: {},
  handlerGenreData: null,
};

export default GenreList;
