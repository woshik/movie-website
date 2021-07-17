import { combineReducers } from 'redux';
import genreReducer from './genre';
import movieReducer from './movie';
import watchListReducer from './watchList';

// combine all reducers
export default combineReducers({
  genre: genreReducer,
  movie: movieReducer,
  watchList: watchListReducer,
});
