// redux
import { useSelector } from 'react-redux';

// components
import MovieCard from '../MovieCard';

const WatchList = () => {
  const watchListData = useSelector(({ watchList }) => watchList.movieData);

  return (
    <div className="row">
      {Object.keys(watchListData).map((key) => (
        <div key={key} className="col-6 col-sm-4 col-lg-3 col-xl-2">
          <MovieCard data={watchListData[key]} />
        </div>
      ))}
    </div>
  );
};

export default WatchList;
