import { combineReducers } from 'redux';
import genreReducer from './genre';

// combine all reducers
export default combineReducers({
  genre: genreReducer,
});
