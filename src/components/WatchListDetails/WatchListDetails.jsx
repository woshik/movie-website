import { useEffect, useState } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { cleanUpDeleteData } from '../../redux/watchList';

// components
import MovieCard from '../MovieCard';

const WatchList = () => {
  const watchListData = useSelector(({ watchList }) => watchList);

  // merge all watch list data
  const movieData = {
    ...watchListData.movieData,
    ...watchListData.removedMovieData,
  };

  const [watchListKeys, setWatchListKeys] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setWatchListKeys(Object.keys(movieData).sort(
        (a, b) => new Date(movieData[b].time) - new Date(movieData[a].time),
      ));

    return () => {
      dispatch(cleanUpDeleteData());
    };
  }, []);

  return (
    <div className="row">
      {watchListKeys.map((key) => (
        <div key={key} className="col-6 col-sm-4 col-lg-3 col-xl-2">
          <MovieCard data={movieData[key]} />
        </div>
      ))}
    </div>
  );
};

export default WatchList;
