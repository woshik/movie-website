import {
  getDataFromLocalStorage,
  setDataOnLocalStorage,
} from '../../utils/localStorage';

const ADD_TO_WATCH_LIST = 'ADD_TO_WATCH_LIST';
const REMOVE_FROM_WATCH_LIST = 'REMOVE_FROM_WATCH_LIST';

const LOCAL_STORAGE_KEY = 'watchlist';

const initialState = {
  movieData: getDataFromLocalStorage(LOCAL_STORAGE_KEY, {}),
};

const watchListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_WATCH_LIST: {
      // data will store as id and data pair
      const movieData = { ...state.movieData, [payload.id]: payload };
      setDataOnLocalStorage(LOCAL_STORAGE_KEY, movieData);

      return {
        movieData,
      };
    }
    case REMOVE_FROM_WATCH_LIST: {
      // if id found delete that data, otherwise don't need to execute this code
      if (state.movieData[payload.id]) {
        // eslint-disable-next-line no-param-reassign
        delete state.movieData[payload.id];
        setDataOnLocalStorage(LOCAL_STORAGE_KEY, state.movieData);
      }

      return {
        movieData: { ...state.movieData },
      };
    }
    default:
      return {
        ...state,
      };
  }
};

const addToWatchList = (data) => ({
  type: ADD_TO_WATCH_LIST,
  payload: data,
});

const removeFromWatchList = (id) => ({
  type: REMOVE_FROM_WATCH_LIST,
  payload: {
    id,
  },
});

export { addToWatchList, removeFromWatchList };

export default watchListReducer;
