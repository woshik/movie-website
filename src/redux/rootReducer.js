import { combineReducers } from 'redux';
import genreReducer from './genre';
import watchListReducer from './watchList';
import movieDetailReducer from './movieDetail';
import viewListReducer from './viewList';

// combine all reducers
export default combineReducers({
  genre: genreReducer,
  watchList: watchListReducer,
  movieDetail: movieDetailReducer,
  viewList: viewListReducer,
});
