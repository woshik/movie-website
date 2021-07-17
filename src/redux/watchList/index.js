import {
  getDataFromLocalStorage,
  setDataOnLocalStorage,
} from '../../utils/localStorage';

const ADD_TO_WATCH_LIST = 'ADD_TO_WATCH_LIST';
const REMOVE_FROM_WATCH_LIST = 'REMOVE_FROM_WATCH_LIST';

const LOCAL_STORAGE_KEY = 'favorite-ids';

const initialState = {
  ids: getDataFromLocalStorage(LOCAL_STORAGE_KEY, []),
};

const watchListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_WATCH_LIST: {
      const ids = [...state.ids, payload];
      setDataOnLocalStorage(LOCAL_STORAGE_KEY, ids);

      return {
        ids,
      };
    }
    case REMOVE_FROM_WATCH_LIST: {
      const index = state.ids.indexOf(payload);

      // if id found remove that id, otherwise don't need to execute splice
      if (index !== -1) {
        state.ids.splice(index, 1);
        setDataOnLocalStorage(LOCAL_STORAGE_KEY, state.ids);
      }

      return {
        ids: [...state.ids],
      };
    }
    default:
      return {
        ...state,
      };
  }
};

const addToWatchList = (id) => ({
  type: ADD_TO_WATCH_LIST,
  payload: id,
});

const removeFromWatchList = (id) => ({
  type: REMOVE_FROM_WATCH_LIST,
  payload: id,
});

export { addToWatchList, removeFromWatchList };

export default watchListReducer;
