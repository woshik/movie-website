import {
  getDataFromLocalStorage,
  setDataOnLocalStorage,
} from '../../utils/localStorage';

const ADD_TO_WATCH_LIST = 'ADD_TO_WATCH_LIST';
const REMOVE_FROM_WATCH_LIST = 'REMOVE_FROM_WATCH_LIST';
const CLEAN_UP_WATCH_LIST = 'CLEAN_UP_WATCH_LIST';

const LOCAL_STORAGE_KEY = 'watchlist';

const initialState = {
  movieData: getDataFromLocalStorage(LOCAL_STORAGE_KEY, {}),
  removedMovieData: {},
};

const watchListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_WATCH_LIST: {
      // data will store as id and data pair
      const movieData = { ...state.movieData, [payload.id]: payload };
      setDataOnLocalStorage(LOCAL_STORAGE_KEY, movieData);

      return {
        ...state,
        movieData,
      };
    }

    case REMOVE_FROM_WATCH_LIST: {
      const watchList = { ...state.movieData };
      const removedList = { ...state.removedMovieData };

      // if id found delete that data, otherwise don't need to execute this code
      if (watchList[payload.id]) {
        // push data in the removed list, so that determine witch data removed
        removedList[payload.id] = watchList[payload.id];

        // delete from local store
        delete watchList[payload.id];
        setDataOnLocalStorage(LOCAL_STORAGE_KEY, watchList);
      }

      return {
        movieData: watchList,
        removedMovieData: removedList,
      };
    }

    case CLEAN_UP_WATCH_LIST: {
      return {
        ...state,
        removedMovieData: [],
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

const cleanUpDeleteData = () => ({
  type: CLEAN_UP_WATCH_LIST,
});

export { addToWatchList, removeFromWatchList, cleanUpDeleteData };

export default watchListReducer;
