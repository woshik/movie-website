import {
  getDataFromLocalStorage,
  setDataOnLocalStorage,
  removeDataFromLocalStorage,
} from '../../utils/localStorage';

const ADD_TO_VIEW_LIST = 'ADD_TO_VIEW_LIST';
const REMOVE_ALL_FROM_VIEW_LIST = 'REMOVE_ALL_FROM_VIEW_LIST';

const LOCAL_STORAGE_KEY = 'viewedlist';

const initialState = {
  movieData: getDataFromLocalStorage(LOCAL_STORAGE_KEY, {}),
};

const viewListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_VIEW_LIST: {
      // data will store as id and data pair
      const movieData = { ...state.movieData, [payload.id]: payload };
      setDataOnLocalStorage(LOCAL_STORAGE_KEY, movieData);

      return {
        movieData,
      };
    }
    case REMOVE_ALL_FROM_VIEW_LIST: {
      removeDataFromLocalStorage(LOCAL_STORAGE_KEY);

      return {
        movieData: {},
      };
    }
    default:
      return {
        ...state,
      };
  }
};

const addToViewList = (data) => ({
  type: ADD_TO_VIEW_LIST,
  payload: data,
});

const removeFromViewList = () => ({
  type: REMOVE_ALL_FROM_VIEW_LIST,
});

export { addToViewList, removeFromViewList };

export default viewListReducer;
