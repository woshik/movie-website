import { combineReducers } from 'redux';
import genreReducer from './genre';
import movieReducer from './movie';

// combine all reducers
export default combineReducers({
  genre: genreReducer,
  movie: movieReducer,
});
