// redux
import { useSelector } from 'react-redux';

// components
import MovieCard from '../MovieCard';

const WatchList = () => {
  const watchListData = useSelector(({ watchList }) => watchList.movieData);

  const sortedWatchData = Object.keys(watchListData).sort(
    (a, b) => new Date(watchListData[b].time) - new Date(watchListData[a].time),
  );

  return (
    <div className="row">
      {sortedWatchData.map((key) => (
        <div key={key} className="col-6 col-sm-4 col-lg-3 col-xl-2">
          <MovieCard data={watchListData[key]} />
        </div>
      ))}
    </div>
  );
};

export default WatchList;
