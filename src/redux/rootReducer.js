import { combineReducers } from 'redux';
import genreReducer from './genre';
import movieReducer from './movie';
import watchListReducer from './watchList';
import movieDetailReducer from './movieDetail';
import viewListReducer from './viewList';

// combine all reducers
export default combineReducers({
  genre: genreReducer,
  movie: movieReducer,
  watchList: watchListReducer,
  movieDetail: movieDetailReducer,
  viewList: viewListReducer,
});
